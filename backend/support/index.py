import json
import os
import psycopg2
from datetime import datetime

def handler(event: dict, context) -> dict:
    """API для работы с обращениями в службу поддержки"""
    method = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type, X-User-Id'
            },
            'body': ''
        }
    
    try:
        dsn = os.environ.get('DATABASE_URL')
        conn = psycopg2.connect(dsn)
        cursor = conn.cursor()
        
        if method == 'POST':
            body = json.loads(event.get('body', '{}'))
            
            cursor.execute(
                """
                INSERT INTO support_tickets 
                (user_id, name, email, subject, message, order_number, ticket_type)
                VALUES (%s, %s, %s, %s, %s, %s, %s)
                RETURNING id, created_at
                """,
                (
                    body.get('userId'),
                    body.get('name'),
                    body.get('email'),
                    body.get('subject'),
                    body.get('message'),
                    body.get('orderNumber'),
                    body.get('ticketType', 'general')
                )
            )
            
            result = cursor.fetchone()
            conn.commit()
            
            return {
                'statusCode': 201,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({
                    'success': True,
                    'ticketId': result[0],
                    'createdAt': result[1].isoformat()
                })
            }
        
        elif method == 'GET':
            user_id = event.get('queryStringParameters', {}).get('userId')
            
            if not user_id:
                return {
                    'statusCode': 400,
                    'headers': {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    },
                    'body': json.dumps({'error': 'userId is required'})
                }
            
            cursor.execute(
                """
                SELECT 
                    id, name, email, subject, message, order_number, 
                    ticket_type, status, response, created_at, responded_at
                FROM support_tickets
                WHERE user_id = %s
                ORDER BY created_at DESC
                """,
                (user_id,)
            )
            
            tickets = []
            for row in cursor.fetchall():
                tickets.append({
                    'id': row[0],
                    'name': row[1],
                    'email': row[2],
                    'subject': row[3],
                    'message': row[4],
                    'orderNumber': row[5],
                    'ticketType': row[6],
                    'status': row[7],
                    'response': row[8],
                    'createdAt': row[9].isoformat() if row[9] else None,
                    'respondedAt': row[10].isoformat() if row[10] else None
                })
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'tickets': tickets})
            }
        
        return {
            'statusCode': 405,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': 'Method not allowed'})
        }
        
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            'body': json.dumps({'error': str(e)})
        }
    finally:
        if 'cursor' in locals():
            cursor.close()
        if 'conn' in locals():
            conn.close()

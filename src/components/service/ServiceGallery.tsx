import { Badge } from '@/components/ui/badge';

interface ServiceGalleryProps {
  mainImage: string;
  additionalImages: string[];
  serviceName: string;
  subscription: string;
  onImageChange: (image: string) => void;
  getSubscriptionColor: (subscription: string) => string;
}

export default function ServiceGallery({
  mainImage,
  additionalImages,
  serviceName,
  subscription,
  onImageChange,
  getSubscriptionColor
}: ServiceGalleryProps) {
  return (
    <div>
      <div className="relative rounded-2xl overflow-hidden mb-4 border-2 border-accent/30">
        <img 
          src={mainImage} 
          alt={serviceName}
          className="w-full h-[500px] object-cover"
        />
        <Badge className={`absolute top-4 right-4 ${getSubscriptionColor(subscription)}`}>
          {subscription}
        </Badge>
      </div>
      
      <div className="grid grid-cols-3 gap-3">
        {additionalImages.map((img, index) => (
          <div 
            key={index}
            onClick={() => onImageChange(img)}
            className={`relative rounded-lg overflow-hidden cursor-pointer border-2 transition-all ${
              mainImage === img ? 'border-accent' : 'border-border hover:border-accent/50'
            }`}
          >
            <img 
              src={img} 
              alt={`${serviceName} ${index + 1}`}
              className="w-full h-32 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

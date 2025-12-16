import { AlertCircle } from "lucide-react";

const DevBanner = () => {
  return (
    <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-white py-2 px-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex items-center justify-center gap-2 text-sm font-medium">
        <AlertCircle className="w-4 h-4 animate-pulse" />
        <span>Сайт находится в разработке</span>
        <AlertCircle className="w-4 h-4 animate-pulse" />
      </div>
    </div>
  );
};

export default DevBanner;


import { cn } from "@/lib/utils";

interface BonusCardProps {
  title: string;
  description: string;
  imageSrc: string;
  className?: string;
}

const BonusCard = ({ title, description, imageSrc, className }: BonusCardProps) => {
  return (
    <div className={cn("bg-purple/40 p-4 rounded-lg shadow-md border-l-4 border-hotpink overflow-hidden relative", className)}>
      <div className="absolute top-0 right-0">
        <div className="bg-vibrantgreen text-white text-xs font-bold py-1 px-3 rounded-bl-lg shadow-md transform rotate-0">
          BÔNUS GRATUITO
        </div>
      </div>
      
      <div className="flex flex-col items-center">
        <div className="mb-4 w-full">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-32 object-cover rounded-md shadow-sm"
          />
        </div>
        <div className="text-center">
          <h4 className="font-bold text-hotpink text-xl mb-2">{title}</h4>
          <p className="text-gray-100 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default BonusCard;

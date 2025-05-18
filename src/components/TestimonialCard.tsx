
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  text: string;
  imageSrc: string;
  className?: string;
}

const TestimonialCard = ({ name, text, imageSrc, className }: TestimonialCardProps) => {
  return (
    <div className={cn("bg-white p-4 rounded-lg shadow-md border-l-4 border-hotpink", className)}>
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <img 
            src={imageSrc} 
            alt={`Foto de ${name}`} 
            className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-gray-800">{name}</h4>
          <p className="text-gray-600 text-sm">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;


import { cn } from "@/lib/utils";

interface BenefitItemProps {
  text: string;
  className?: string;
}

const BenefitItem = ({ text, className }: BenefitItemProps) => {
  return (
    <div className={cn("flex items-start gap-3 mb-4", className)}>
      <div className="flex-shrink-0 text-xl md:text-2xl text-vibrantgreen">✅</div>
      <p className="text-left text-base md:text-lg">{text}</p>
    </div>
  );
};

export default BenefitItem;

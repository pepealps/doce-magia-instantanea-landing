
interface CTAButtonProps {
  text: string;
  className?: string;
}

const CTAButton = ({ text, className = "" }: CTAButtonProps) => {
  const handleClick = () => {
    // Check if this is the first button by looking for "QUERO RECEBER" in the text
    if (text.includes("QUERO RECEBER")) {
      // Scroll to the final CTA section
      const element = document.getElementById('final-cta');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For all other buttons, navigate to the checkout page
      window.open("https://www.ggcheckout.com/checkout/v2/lkhJ0LaSIGxn2Q4JYhLq", "_blank");
    }
  };

  return (
    <button
      className={`relative overflow-hidden bg-vibrantgreen hover:bg-green-600 text-white font-extrabold py-4 px-8 rounded-lg shadow-lg transform transition-all duration-300 text-lg md:text-xl uppercase tracking-wide hover:-translate-y-1 hover:shadow-xl ${className}`}
      onClick={handleClick}
    >
      <div className="absolute inset-0 bg-white opacity-20"></div>
      <span className="relative z-10">{text}</span>
    </button>
  );
};

export default CTAButton;

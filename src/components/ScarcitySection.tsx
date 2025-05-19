
import React from "react";
import CTAButton from "./CTAButton";

const ScarcitySection = () => {
  return (
    <section className="px-4 py-12 bg-gradient-to-r from-hotpink/90 to-purple/90 text-white">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 md:p-10 shadow-lg">
          <div className="flex justify-center mb-6">
            <div className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-full flex items-center gap-2">
              <span className="text-2xl">⚠️</span>
              <span>VAGAS LIMITADAS!</span>
            </div>
          </div>
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 text-yellow-300">
            Infelizmente consigo liberar apenas <span className="bg-white text-hotpink px-2 rounded inline-block">10 cupons</span> promocionais por semana.
          </h2>
          
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative h-4 bg-white/30 rounded-full overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-[85%] bg-gradient-to-r from-yellow-400 to-vibrantgreen animate-pulse"></div>
            </div>
            <p className="text-center mt-2 text-yellow-300 text-sm">
              Após finalizar avisamos que o valor será revertido ao preço cheio.
            </p>
          </div>
          
          <div className="flex justify-center mb-8">
            <CTAButton text="SIM! EU QUERO AS RECEITAS SECRETAS" className="text-xl" />
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 justify-center">
              <span className="text-xl">✅</span>
              <span className="text-yellow-300">Garantia de 7 dias</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <span className="text-xl">🔒</span>
              <span className="text-yellow-300">Pagamento seguro</span>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <span className="text-xl">📞</span>
              <span className="text-yellow-300">Suporte via WhatsApp</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScarcitySection;

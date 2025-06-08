// Declaração global para o elemento personalizado do Wistia
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'media-id': string;
        aspect?: string;
      };
    }
  }
}
import UrgencyBanner from "@/components/UrgencyBanner";
import CTAButton from "@/components/CTAButton";
import TestimonialCard from "@/components/TestimonialCard";
import BenefitItem from "@/components/BenefitItem";
import BonusCard from "@/components/BonusCard";
import MotivesSection from "@/components/MotivesSection";
import ScarcitySection from "@/components/ScarcitySection";
import { MessageSquare } from "lucide-react";
import { useEffect } from "react";
const Index = () => {
  useEffect(() => {
    // Carrega os scripts do Wistia de forma otimizada
    const loadWistiaScript = () => {
      if (!document.querySelector('script[src*="wistia.com/player.js"]')) {
        const script1 = document.createElement('script');
        script1.src = 'https://fast.wistia.com/player.js';
        script1.async = true;
        script1.defer = true;
        document.head.appendChild(script1);
        const script2 = document.createElement('script');
        script2.src = 'https://fast.wistia.com/embed/6gzr47z4bz.js';
        script2.async = true;
        script2.defer = true;
        script2.type = 'module';
        document.head.appendChild(script2);

        // Adiciona o estilo CSS de forma otimizada
        const style = document.createElement('style');
        style.textContent = `
          wistia-player[media-id='6gzr47z4bz']:not(:defined) { 
            background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/6gzr47z4bz/swatch'); 
            display: block; 
            filter: blur(5px); 
            padding-top:56.25%; 
          }
        `;
        document.head.appendChild(style);
      }
    };

    // Carrega scripts apenas quando necessário
    const timer = setTimeout(loadWistiaScript, 100);
    return () => clearTimeout(timer);
  }, []);
  return <div className="min-h-screen bg-white font-sans relative">
      <UrgencyBanner />
      
      {/* Hero Section - Otimizado para mobile */}
      <section className="bg-gradient-to-b from-purple/10 to-hotpink/10 px-3 sm:px-4 py-8 sm:py-12 md:py-16">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Texto Hero - Melhorado para mobile */}
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 sm:mb-4 leading-tight px-2">
                Transforme <span className="text-hotpink">Recheios Sem Fogo</span> em até <span className="text-vibrantgreen font-extrabold">R$3.735 por mês</span> com doces irresistíveis!
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 px-2 max-w-4xl mx-auto">
                Descubra receitas que encantam, vendem sozinhas e ficam prontas em <span className="font-bold">15 minutos</span> — sem ligar o fogão!
              </p>
            </div>

            {/* Imagem substituta da VSL - Otimizada e responsiva */}
            <div className="flex justify-center mb-6">
              <div className="relative w-full max-w-[500px]">
                <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-pink-200 to-pink-400 rounded-xl sm:rounded-2xl blur-lg opacity-40 animate-pulse"></div>
                <div className="relative rounded-lg sm:rounded-xl shadow-2xl w-full z-10 overflow-hidden">
                  <img alt="Recheios Sem Fogo - Aprenda receitas deliciosas" className="w-full h-auto object-cover rounded-lg sm:rounded-xl" loading="eager" src="/lovable-uploads/61470f1f-01a1-40e9-be98-0bb0758a450f.png" />
                </div>
              </div>
            </div>

            {/* Botão CTA movido para baixo da imagem */}
            <div className="flex justify-center">
              <div className="w-full max-w-md px-2">
                <CTAButton text="QUERO RECEBER AS RECEITAS SECRETAS POR R$10" className="w-full text-sm sm:text-base md:text-lg py-3 sm:py-4 px-4 sm:px-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Otimizado para mobile */}
      <section className="px-3 sm:px-4 py-8 sm:py-12 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-10 px-2">
            O que você vai <span className="text-hotpink">conquistar</span> com o Recheios Sem Fogo
          </h2>
          
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            <BenefitItem text="Lucro de até R$3.735/mês com recheios simples" />
            <BenefitItem text="Prontas em 15 minutos, sem usar o fogão" />
            <BenefitItem text="Ingredientes baratos e fáceis de achar" />
            <BenefitItem text="Receita testada por mais de 18 mil alunas" />
            <BenefitItem text="Suporte exclusivo para tirar suas dúvidas" />
            <BenefitItem text="Bônus: 10 ideias para embalar e vender mais" />
          </div>
        </div>
      </section>
      
      {/* Motives Section - NUEVA SECCIÓN 1 */}
      <MotivesSection />
      
      {/* Scarcity Section - NUEVA SECCIÓN 2 */}
      <ScarcitySection />

      {/* Testimonials Section - Otimizado para mobile */}
      <section className="px-3 sm:px-4 py-8 sm:py-12 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 px-2">
            Veja o que quem já comprou está dizendo:
          </h2>
          <p className="text-center text-gray-600 mb-6 sm:mb-8 px-2">Histórias reais de mulheres que transformaram suas vidas</p>
          
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            <TestimonialCard name="Maria Silva" text="Fiz o recheio de leite ninho e vendi tudo em uma tarde! Lucrei R$280 no primeiro final de semana. As receitas são muito fáceis e deliciosas." imageSrc="https://randomuser.me/api/portraits/women/44.jpg" />
            <TestimonialCard name="Ana Santos" text="Comecei vendendo para família e hoje tenho uma clientela fiel. O curso pagou-se na primeira semana. O recheio de chocolate belga é o mais vendido!" imageSrc="https://randomuser.me/api/portraits/women/68.jpg" />
            <TestimonialCard name="Juliana Oliveira" text="Sou mãe solo e precisava de uma renda extra. Com as receitas, consigo fazer R$1.200 por mês trabalhando só nos finais de semana." imageSrc="https://randomuser.me/api/portraits/women/65.jpg" />
            <TestimonialCard name="Patrícia Mendes" text="As receitas são um sucesso! Comecei com uma encomenda pequena e hoje faço mais de 20 potes por semana. Obrigada pela oportunidade!" imageSrc="https://randomuser.me/api/portraits/women/54.jpg" />
          </div>
        </div>
      </section>

      {/* Video Section - Otimizado para mobile */}
      <section className="px-3 sm:px-4 py-8 sm:py-12 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-black/5 p-4 sm:p-6 md:p-8 lg:p-12 rounded-xl shadow-md">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 px-2">
              Assista e <span className="text-hotpink">descubra</span> como é fácil começar
            </h2>
            <div className="relative w-full pb-[56.25%]">
              <iframe className="absolute inset-0 w-full h-full rounded-lg" src="https://www.youtube.com/embed/xVJ3unlES_c" title="Recheios Sem Fogo - Como é fácil começar" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy">
              </iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials - New Section Part 1 - Otimizado para mobile */}
      <section className="px-3 sm:px-4 py-8 sm:py-12 bg-hotpink/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-10 uppercase px-2">
            O que as nossas alunas estão falando sobre os recheios secretos:
          </h2>
          
          <div className="flex justify-center">
            <img alt="Comentários de alunas" className="w-full max-w-[600px] rounded-lg shadow-lg" src="/lovable-uploads/115a5602-ac33-4166-bcb6-f8d8e7772512.png" loading="lazy" />
          </div>
        </div>
      </section>
      
      {/* Bonus Section - New Section Part 2 - Otimizado para mobile */}
      <section className="px-3 sm:px-4 py-8 sm:py-12 bg-purple/90 text-white">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-8 sm:mb-10 uppercase px-2">
            Além de tudo isso, você vai ganhar +4 bônus exclusivos:
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <BonusCard title="Bolinho no Pote" description="O Sucesso o Ano Inteiro!" imageSrc="/lovable-uploads/91d5f335-0fdd-4731-8fcd-46c6fd23dfef.png" />
            <BonusCard title="Trufas" description="Irresistíveis e Altamente Lucrativas!" imageSrc="/lovable-uploads/9ead97cd-2336-4513-91c4-a6c1bea75da0.png" />
            <BonusCard title="Brigadeiros" description="O Clássico que Faz Lucrar!" imageSrc="/lovable-uploads/bd1e2030-a09f-4ad7-b024-f6969abff313.png" />
            <BonusCard title="Donuts" description="A Novidade que Encanta e Lucra!" imageSrc="/lovable-uploads/ce506717-a286-404a-a824-9564324249f6.png" />
          </div>
        </div>
      </section>

      {/* Guarantee Section - Otimizado para mobile */}
      <section className="px-3 sm:px-4 py-8 sm:py-12 bg-vibrantgreen/10">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
            <div className="md:w-1/3 flex justify-center">
              <img src="/lovable-uploads/e2c225a7-aede-4080-9096-febf04db681c.png" alt="Garantia de 7 dias" className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain" loading="lazy" />
            </div>
            <div className="md:w-2/3">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-center md:text-left px-2">
                Garantia incondicional de 7 dias
              </h2>
              <p className="text-base sm:text-lg mb-4 sm:mb-6 px-2">
                Se por qualquer motivo você não gostar do curso ou sentir que não está funcionando para você, basta enviar um email e devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia.
              </p>
              <p className="font-bold text-vibrantgreen text-center md:text-left px-2">
                Zero risco para você experimentar!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Otimizado para mobile */}
      <section className="px-3 sm:px-4 py-8 sm:py-12 bg-gradient-to-b from-purple/5 to-hotpink/20" id="final-cta">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-3 sm:mb-4 px-2">
            O cupom aplicado só é válido <span className="bg-yellow-200 px-1">HOJE!</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 px-2">
            Depois disso, o preço volta ao normal e você perde esta oportunidade única!
          </p>
          
          <div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-xl max-w-xl mx-auto mb-6 sm:mb-8">
            <div className="text-gray-500 line-through mb-2 text-sm sm:text-base">De R$97</div>
            <div className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-hotpink mb-3 sm:mb-4">Por apenas R$10</div>
            <div className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">Pagamento único, acesso vitalício</div>
            <CTAButton text="QUERO TRANSFORMAR MINHA VIDA AGORA POR R$10" className="w-full text-sm sm:text-base md:text-lg py-3 sm:py-4 px-4 sm:px-6" />
          </div>
          
          <div className="text-center text-gray-500 text-xs sm:text-sm px-2">
            <p>Pagamento 100% seguro</p>
            <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4 mt-2">
              <span>❖ Pagamento via PIX</span>
              <span>🔒 Ambiente seguro</span>
              <span>✅ Satisfação garantida</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Otimizado para mobile */}
      <footer className="bg-gray-900 text-white text-xs sm:text-sm py-4 sm:py-6 px-3 sm:px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="text-center md:text-left">
              <p>© 2025 Recheios Sem Fogo - Todos os direitos reservados</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-center">
              <a href="#" className="text-gray-400 hover:text-white">Política de Privacidade</a>
              <a href="#" className="text-gray-400 hover:text-white">Termos de Uso</a>
              <a href="https://wa.link/kvoiub" className="text-gray-400 hover:text-white">Contato</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp floating button - Otimizado para mobile */}
      <a href="https://wa.link/kvoiub" target="_blank" rel="noopener noreferrer" className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 z-50 bg-vibrantgreen text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300" aria-label="Contact us on WhatsApp">
        <MessageSquare size={24} className="sm:w-7 sm:h-7" />
      </a>
    </div>;
};
export default Index;

import React from "react";
import { Check, DollarSign, TrendingUp, ChartBar, Smile, Users } from "lucide-react";

interface MotiveCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const MotiveCard = ({ icon, title, description }: MotiveCardProps) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-hotpink flex items-start gap-4 hover:shadow-lg transition-shadow">
      <div className="text-hotpink shrink-0">{icon}</div>
      <div>
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

interface CourseContentCardProps {
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
}

const CourseContentCard = ({ title, description, imageSrc, alt }: CourseContentCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={alt} 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const MotivesSection = () => {
  return (
    <section className="px-4 py-12 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10 uppercase">
          Motivos para você adquirir os <span className="text-hotpink">recheios secretos</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <MotiveCard 
            icon={<Check size={24} />} 
            title="Aprenda Mesmo Sendo Totalmente Iniciante" 
            description="Método simples e direto, ideal pra quem nunca fez doce." 
          />
          <MotiveCard 
            icon={<DollarSign size={24} />} 
            title="Baixo Investimento" 
            description="Comece com pouco. Ingredientes acessíveis e baratos." 
          />
          <MotiveCard 
            icon={<TrendingUp size={24} />} 
            title="Mercado em Crescimento" 
            description="Confeitaria tá em alta. Demanda só aumenta." 
          />
          <MotiveCard 
            icon={<ChartBar size={24} />} 
            title="Margem de Lucro Atraente" 
            description="Receita barata com lucro de até 200% por unidade." 
          />
          <MotiveCard 
            icon={<Smile size={24} />} 
            title="Satisfação Pessoal" 
            description="Faça doces lindos e encante com sabor e visual." 
          />
          <MotiveCard 
            icon={<Users size={24} />} 
            title="Aprenda com Outras Profissionais" 
            description="Receitas validadas por quem vive de confeitaria." 
          />
        </div>
        
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 bg-purple/10 py-4 rounded-lg">
          O QUE VOCÊ VAI <span className="text-hotpink">APRENDER</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CourseContentCard 
            title="Recheios Estruturados" 
            description="Ninho com Nutella, Dois Amores, Abacaxi, Maracujá e mais." 
            imageSrc="/lovable-uploads/e34d89c2-549a-4bcd-afe2-9591c53db84e.png" 
            alt="Bolo com recheio visível" 
          />
          <CourseContentCard 
            title="Massas Perfeitas" 
            description="Chocolate, Red Velvet, Baunilha, Cenoura, etc." 
            imageSrc="/lovable-uploads/ab026f3f-2e03-4371-b6b2-371b845e1a61.png" 
            alt="Massas de chocolate" 
          />
          <CourseContentCard 
            title="Bolos Decorados Completos" 
            description="Montagem, estrutura e finalização." 
            imageSrc="/lovable-uploads/ec453ed7-51dd-404e-8cad-583b6aeea72a.png" 
            alt="Bolo decorado com chantilly e cerejas" 
          />
          <CourseContentCard 
            title="Coberturas Perfeitas" 
            description="Chantininho, Ganache, Buttercream, Glacê Real." 
            imageSrc="/lovable-uploads/c6db7a4b-442d-4048-88c2-2a96728649d8.png" 
            alt="Cobertura de chocolate sendo derramada" 
          />
        </div>
      </div>
    </section>
  );
};

export default MotivesSection;

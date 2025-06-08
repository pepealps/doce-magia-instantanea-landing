
import { useEffect, useState } from 'react';

const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [today, setToday] = useState('');

  useEffect(() => {
    const date = new Date();
    setToday(date.toLocaleDateString('pt-BR'));

    const countdown = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(countdown);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');

  return (
    <div className="sticky top-0 z-50 w-full bg-hotpink text-white text-center py-3 px-4 font-bold text-sm md:text-base">
      {timeLeft > 0 ? (
        <>
          CUPOM DE DESCONTO APLICADO — VÁLIDO ATÉ HOJE {today} 🔥 | OFERTA ACABA EM{' '}
          <span className="inline-block bg-black px-2 py-1 rounded text-white">
            {minutes}:{seconds}
          </span>
        </>
      ) : (
        'FINALIZE A COMPRA PARA GARANTIR O CUPOM'
      )}
    </div>
  );
};

export default UrgencyBanner;

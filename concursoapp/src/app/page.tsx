'use client';

import { useState } from 'react';

export default function Home() {
  const [resposta, setResposta] = useState('');

  const enviar = async () => {
    try {
      const response = await fetch('/api/create-question', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ conteudo: 'Qual é a capital da França?' }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Erro da API:', errorText);
        setResposta(`Erro ${response.status}: ${errorText}`);
        return;
      }

      const data = await response.json();
      setResposta(data.message);
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setResposta('Erro na requisição');
    }
  };

  return (
    <main style={{ padding: 20 }}>
      <h1>Envio de Pergunta</h1>
      <button onClick={enviar}>Enviar Pergunta</button>
      {resposta && <p>{resposta}</p>}
    </main>
  );
}





// import VerticalLinearStepper from '@/components/stepper';

// export default function Home() {
//   return (
//     <div className="">
//       <h1>Ola</h1>
//       {/* <VerticalLinearStepper /> */}
//     </div>
//   );
// }
// // 
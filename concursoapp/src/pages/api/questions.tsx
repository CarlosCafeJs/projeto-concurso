// src/pages/api/questions.ts
import type { NextApiRequest, NextApiResponse } from 'next'

// Middleware para habilitar CORS
function allowCors(fn: any) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*'); // Liberado para qualquer origem. Troque por domínio específico se quiser.
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }
    return await fn(req, res);
  }
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const perguntas = [
    {
      id: 1,
      nome: 'Qual das alternativas abaixo representa uma condição necessária para um deadlock ocorrer?',
      resposta: 1,
      banca: 'Cesgranrio',
      ano: '2025',
      category: 'banco de dados',
      subcategory: 'normalização',
      tema: 'deadlock',
      respostas: [
        { id: 1, resposta: 'Espera circular' },
        { id: 2, resposta: 'Exclusão mútua' },
        { id: 3, resposta: 'Não preempção' },
        { id: 4, resposta: 'Posse e espera' },
        { id: 5, resposta: 'Reentrância' },
      ],
    },
    {
      id: 2,
      nome: 'Qual é a principal característica da técnica de normalização em banco de dados?',
      resposta: 2,
      banca: 'Cesgranrio',
      ano: '2025',
      category: 'banco de dados',
      subcategory: 'normalização',
      tema: 'normalização',
      respostas: [
        { id: 1, resposta: 'Redução da redundância' },
        { id: 2, resposta: 'Facilidade na inserção de dados' },
        { id: 3, resposta: 'Aumento da velocidade de consultas' },
        { id: 4, resposta: 'Melhoria na segurança de dados' },
        { id: 5, resposta: 'Facilidade na indexação' },
      ],
    },
    {
      id: 3,
      nome: 'Em sistemas distribuídos, o que é necessário para evitar a condição de deadlock?',
      resposta: 3,
      banca: 'Cesgranrio',
      ano: '2025',
      category: 'sistemas distribuídos',
      subcategory: 'deadlock',
      tema: 'deadlock',
      respostas: [
        { id: 1, resposta: 'Exclusão mútua' },
        { id: 2, resposta: 'Espera circular' },
        { id: 3, resposta: 'Prevenção de espera' },
        { id: 4, resposta: 'Preempção de recursos' },
        { id: 5, resposta: 'Reentrância' },
      ],
    },
    {
      id: 4,
      nome: 'O que define a exclusão mútua em sistemas computacionais?',
      resposta: 4,
      banca: 'Cesgranrio',
      ano: '2025',
      category: 'sistemas operacionais',
      subcategory: 'concorrência',
      tema: 'exclusão mútua',
      respostas: [
        { id: 1, resposta: 'Dois processos podem acessar um recurso simultaneamente' },
        { id: 2, resposta: 'Os recursos são divididos entre os processos' },
        { id: 3, resposta: 'Nenhum processo pode acessar um recurso compartilhado' },
        { id: 4, resposta: 'Acesso exclusivo a um recurso por um único processo' },
        { id: 5, resposta: 'Recursos são alocados sem bloqueios' },
      ],
    },
    {
      id: 5,
      nome: 'O que é a normalização em banco de dados?',
      resposta: 1,
      banca: 'Cesgranrio',
      ano: '2025',
      category: 'banco de dados',
      subcategory: 'normalização',
      tema: 'normalização',
      respostas: [
        { id: 1, resposta: 'Processo de organização dos dados' },
        { id: 2, resposta: 'Processo de criptografia de dados' },
        { id: 3, resposta: 'Processo de backup de dados' },
        { id: 4, resposta: 'Processo de compressão de dados' },
        { id: 5, resposta: 'Processo de indexação de dados' },
      ],
    },
    {
      id: 6,
      nome: 'Em um banco de dados, qual o principal objetivo da 1ª Forma Normal (1NF)?',
      resposta: 3,
      banca: 'Cesgranrio',
      ano: '2025',
      category: 'banco de dados',
      subcategory: 'normalização',
      tema: '1NF',
      respostas: [
        { id: 1, resposta: 'Eliminar dependências funcionais' },
        { id: 2, resposta: 'Garantir que os dados sejam redundantes' },
        { id: 3, resposta: 'Eliminar atributos multivalorados' },
        { id: 4, resposta: 'Dividir tabelas em várias colunas' },
        { id: 5, resposta: 'Aumentar a performance das consultas' },
      ],
    },
    {
      id: 7,
      nome: 'Qual é a definição de deadlock em sistemas operacionais?',
      resposta: 2,
      banca: 'Cesgranrio',
      ano: '2025',
      category: 'sistemas operacionais',
      subcategory: 'concorrência',
      tema: 'deadlock',
      respostas: [
        { id: 1, resposta: 'Processos que não interagem entre si' },
        { id: 2, resposta: 'Condição onde processos aguardam por recursos que nunca estarão disponíveis' },
        { id: 3, resposta: 'Quando os processos utilizam recursos de forma eficiente' },
        { id: 4, resposta: 'Quando os processos não são escaláveis' },
        { id: 5, resposta: 'Condição de comunicação eficiente entre os processos' },
      ],
    },
    {
      id: 8,
      nome: 'Qual a principal vantagem da normalização no design de banco de dados?',
      resposta: 4,
      banca: 'Cesgranrio',
      ano: '2025',
      category: 'banco de dados',
      subcategory: 'normalização',
      tema: 'normalização',
      respostas: [
        { id: 1, resposta: 'Aumento da redundância de dados' },
        { id: 2, resposta: 'Aumento na complexidade da consulta' },
        { id: 3, resposta: 'Redução da performance das consultas' },
        { id: 4, resposta: 'Redução de redundâncias e dependências' },
        { id: 5, resposta: 'Facilidade no processamento paralelo' },
      ],
    },
    {
      id: 9,
      nome: 'O que significa a condição de "posse e espera" em sistemas de concorrência?',
      resposta: 5,
      banca: 'Cesgranrio',
      ano: '2025',
      category: 'sistemas operacionais',
      subcategory: 'concorrência',
      tema: 'deadlock',
      respostas: [
        { id: 1, resposta: 'Processos podem acessar recursos simultaneamente' },
        { id: 2, resposta: 'Processos ficam bloqueados indefinidamente' },
        { id: 3, resposta: 'Recursos são compartilhados por vários processos' },
        { id: 4, resposta: 'O sistema preempta os recursos quando necessário' },
        { id: 5, resposta: 'Processos mantêm recursos enquanto aguardam outros recursos' },
      ],
    },
    {
      id: 10,
      nome: 'Qual a definição de reentrância em sistemas operacionais?',
      resposta: 1,
      banca: 'Cesgranrio',
      ano: '2025',
      category: 'sistemas operacionais',
      subcategory: 'concorrência',
      tema: 'reentrância',
      respostas: [
        { id: 1, resposta: 'Função pode ser chamada por múltiplos processos simultaneamente' },
        { id: 2, resposta: 'Processos não podem compartilhar recursos' },
        { id: 3, resposta: 'Processos possuem prioridade fixa' },
        { id: 4, resposta: 'Processos aguardam em fila para acessar recursos' },
        { id: 5, resposta: 'Sistema não permite execução simultânea de processos' },
      ],
    },
  ];

  res.status(200).json({ perguntas });
}

export default allowCors(handler);

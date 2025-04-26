// app/api/questions/route.ts
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET() {
  try {
    // Busca todas as questões com suas alternativas
    const questions = await prisma.questao.findMany({
      include: {
        alternativas: true
      },
      orderBy: {
        id: 'asc' // Ordena por ID para manter a ordem consistente
      }
    });

    // Transforma os dados para o formato esperado pelo Stepper
    const formattedQuestions = questions.map(question => {
      // Encontra o índice da alternativa correta
      const correctIndex = question.alternativas.findIndex(alt => alt.correta);
      
      return {
        id: question.id,
        enunciado: question.enunciado,
        alternativas: question.alternativas.map(alt => ({
          id: alt.id,
          texto: alt.resposta, // Mapeia 'resposta' para 'texto' como esperado pelo front
          correta: alt.correta
        })),
        resposta_correta: correctIndex >= 0 ? correctIndex : 0 // Garante que sempre haja um índice válido
      };
    });

    return NextResponse.json({
      perguntas: formattedQuestions
    });

  } catch (error) {
    console.error('Erro ao buscar questões:', error);
    return NextResponse.json(
      { error: 'Erro ao buscar questões' },
      { status: 500 }
    );
  }
}
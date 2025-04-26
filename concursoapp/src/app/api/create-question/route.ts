import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Alternativa } from '@/types/questionTypes';

// Tipo para o corpo da requisição
interface QuestaoInput {
  enunciado: string;
  assunto: string;
  nivel_dificuldade: string;
  referencia: string;
  explicacao: string;
  tags?: string[];
  data_criacao?: string;
  origem: string;
  categoria_concurso: string;
  peso?: number;
  categoria_assunto: string;
  tempo_resposta_estipulado: string;
  alternativas: {
    resposta: string;
    correta: boolean;
  }[];
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validações básicas
    if (!body.enunciado || !body.assunto) {
      return NextResponse.json(
        { error: 'Enunciado e assunto são obrigatórios' },
        { status: 400 }
      );
    }

    // Processar data_criacao corretamente
    const dataCriacao = body.data_criacao
      ? new Date(body.data_criacao)
      : new Date();

    // Criar questão no banco de dados
    const questao = await prisma.questao.create({
      data: {
        ...body,
        data_criacao: dataCriacao, // Já é um Date
        tags: body.tags || [],
        peso: body.peso || 1,
        alternativas: {
          create: (body.alternativas || []).map((alt: { resposta: string, correta: boolean }) => ({
            resposta: alt.resposta,
            correta: alt.correta,
          })),
        },
      },
      include: {
        alternativas: true,
      },
    });

    return NextResponse.json({
      message: 'Questão criada com sucesso!',
      questao,
    });

  } catch (error) {
    console.error('[ERRO API]', error);
    return NextResponse.json(
      { error: 'Erro ao criar questão' },
      { status: 500 }
    );
  }
}
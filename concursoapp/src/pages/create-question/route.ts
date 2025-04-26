// File: src/app/api/create-question/route.ts

import prisma from '@/lib/prisma';
import { Questao } from '@/types/questao';
import { NextResponse, NextRequest } from 'next/server';

// CORS Preflight para permitir requisições de outros domínios
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

// GET todas as questões com alternativas e comentários
export async function GET() {
  try {
    const questoes = await prisma.questao.findMany({
      include: {
        alternativas: true,
        comentarios: true,
      },
    });

    return new NextResponse(JSON.stringify({ success: true, questoes }), {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Erro ao buscar questões:', error);
    return new NextResponse(JSON.stringify({ success: false, error: String(error) }), {
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  }
}

// POST nova questão
export async function POST(req: NextRequest) {
  try {
    const body: Questao = await req.json();

    const envioQuestao = await prisma.questao.create({
      data: {
        id: body.id,
        enunciado: body.enunciado,
        assunto: body.assunto,
        nivel_dificuldade: body.nivel_dificuldade,
        referencia: body.referencia,
        explicacao: body.explicacao,
        tags: body.tags,
        data_criacao: body.data_criacao,
        origem: body.origem,
        categoria_concurso: body.categoria_concurso,
        peso: body.peso,
        categoria_assunto: body.categoria_assunto,
        tempo_resposta_estipulado: body.tempo_resposta_estipulado,
        alternativas: {
          create: body.alternativas.map((alt) => ({
            resposta: alt.resposta,
            correta: alt.correta,
          })),
        },
        comentarios: {
          create: body.comentarios.map((c) => ({
            usuario: c.usuario,
            data_comentario: c.data_comentario,
            comentario: c.comentario,
          })),
        },
      },
    });

    return new NextResponse(JSON.stringify({ success: true, questao: envioQuestao }), {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Erro ao criar questão:', error);
    return new NextResponse(JSON.stringify({ success: false, error: String(error) }), {
      status: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  }
}

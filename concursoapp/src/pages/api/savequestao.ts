// saveQuestao.ts

import { NextResponse } from 'next/server';
import { Questao } from '../types/questao'  // Importando o tipo

export async function POST(request: Request): Promise<NextResponse> {
  try {
    // Recebe o corpo da requisição (o JSON da questão)
    const body = (await request.json()) as Questao;

    // Aqui você pode processar o JSON (salvar no banco de dados, etc.)
    // Por enquanto, estamos apenas retornando o JSON recebido

    return NextResponse.json({
      message: 'Questão recebida com sucesso!',
      questaoRecebida: body,
    });
  } catch (error) {
    // Se ocorrer um erro, retorna a mensagem de erro com status 400
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 }
    );
  }
}

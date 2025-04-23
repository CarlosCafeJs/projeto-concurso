import { put } from '@vercel/blob';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { Questao } from '../../types/questao';

function allowCors(
  fn: (req: NextApiRequest, res: NextApiResponse) => Promise<any>
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    if (req.method === 'OPTIONS') {
      res.status(200).end();
      return;
    }
    return await fn(req, res);
  };
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    const body = req.body as Questao;

    const token = process.env.BLOB_READ_WRITE_TOKEN;

    if (!token) {
      return res.status(500).json({ error: 'Token do blob não configurado' });
    }

    const blob = await put(`questao-${Date.now()}.json`, JSON.stringify(body), {
      access: 'public',
      token, // ⬅️ token adicionado aqui
    });

    return res.status(200).json({
      message: 'Questão salva com sucesso no blob!',
      blobUrl: blob.url,
    });
  } catch (error) {
    return res.status(400).json({
      error: (error as Error).message,
    });
  }
}

export default allowCors(handler);


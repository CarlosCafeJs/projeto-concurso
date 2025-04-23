// types.ts

export type Alternativa = {
  resposta: string;
  correta: boolean;
};

export type Comentario = {
  usuario: string;
  data_comentario: string;
  comentario: string;
};

export type Questao = {
  id: number;
  enunciado: string;
  alternativas: Alternativa[];
  assunto: string;
  nivel_dificuldade: string;
  referencia: string;
  explicacao: string;
  tags: string[];
  data_criacao: string;
  origem: string;
  categoria_concurso: string;
  peso: number;
  categoria_assunto: string;
  tempo_resposta_estipulado: string;
  comentarios: Comentario[];
};

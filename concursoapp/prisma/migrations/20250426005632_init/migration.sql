-- CreateTable
CREATE TABLE "Questao" (
    "id" SERIAL NOT NULL,
    "enunciado" TEXT NOT NULL,
    "assunto" TEXT NOT NULL,
    "nivel_dificuldade" TEXT NOT NULL,
    "referencia" TEXT NOT NULL,
    "explicacao" TEXT NOT NULL,
    "tags" TEXT[],
    "data_criacao" TIMESTAMP(3) NOT NULL,
    "origem" TEXT NOT NULL,
    "categoria_concurso" TEXT NOT NULL,
    "peso" INTEGER NOT NULL,
    "categoria_assunto" TEXT NOT NULL,
    "tempo_resposta_estipulado" TEXT NOT NULL,

    CONSTRAINT "Questao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Alternativa" (
    "id" SERIAL NOT NULL,
    "resposta" TEXT NOT NULL,
    "correta" BOOLEAN NOT NULL,
    "questaoId" INTEGER NOT NULL,

    CONSTRAINT "Alternativa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comentario" (
    "id" SERIAL NOT NULL,
    "usuario" TEXT NOT NULL,
    "data_comentario" TIMESTAMP(3) NOT NULL,
    "comentario" TEXT NOT NULL,
    "questaoId" INTEGER NOT NULL,

    CONSTRAINT "Comentario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Alternativa" ADD CONSTRAINT "Alternativa_questaoId_fkey" FOREIGN KEY ("questaoId") REFERENCES "Questao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentario" ADD CONSTRAINT "Comentario_questaoId_fkey" FOREIGN KEY ("questaoId") REFERENCES "Questao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

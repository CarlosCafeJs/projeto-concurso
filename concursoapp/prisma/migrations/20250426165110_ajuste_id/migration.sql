/*
  Warnings:

  - You are about to drop the `Question` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `data_comentario` on the `Comentario` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `data_criacao` on the `Questao` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Alternativa" DROP CONSTRAINT "Alternativa_questaoId_fkey";

-- DropForeignKey
ALTER TABLE "Comentario" DROP CONSTRAINT "Comentario_questaoId_fkey";

-- AlterTable
ALTER TABLE "Comentario" DROP COLUMN "data_comentario",
ADD COLUMN     "data_comentario" TIMESTAMP(3) NOT NULL;

-- AlterTable
CREATE SEQUENCE questao_id_seq;
ALTER TABLE "Questao" ALTER COLUMN "id" SET DEFAULT nextval('questao_id_seq'),
DROP COLUMN "data_criacao",
ADD COLUMN     "data_criacao" TIMESTAMP(3) NOT NULL;
ALTER SEQUENCE questao_id_seq OWNED BY "Questao"."id";

-- DropTable
DROP TABLE "Question";

-- AddForeignKey
ALTER TABLE "Alternativa" ADD CONSTRAINT "Alternativa_questaoId_fkey" FOREIGN KEY ("questaoId") REFERENCES "Questao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comentario" ADD CONSTRAINT "Comentario_questaoId_fkey" FOREIGN KEY ("questaoId") REFERENCES "Questao"("id") ON DELETE CASCADE ON UPDATE CASCADE;

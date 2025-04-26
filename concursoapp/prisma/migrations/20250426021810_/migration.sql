-- AlterTable
ALTER TABLE "Comentario" ALTER COLUMN "data_comentario" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Questao" ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "data_criacao" SET DATA TYPE TEXT;
DROP SEQUENCE "Questao_id_seq";

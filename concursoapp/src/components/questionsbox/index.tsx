'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import RadioPositionEnd from '../selectoptions'; // Ajuste o caminho conforme sua estrutura
import ButtonSizes from '../buttonsquestion'; // Ajuste o caminho conforme sua estrutura

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }} >
    •
  </Box>
);

type Resposta = {
  id: number;
  resposta: string;
};

type QuestionsBoxProps = {
  question: {
    nome: string;
    respostas: Resposta[];
    resposta_correta: number; // ID da resposta correta
  };
  onNext: (userAnswer: number) => void;
  onBack: () => void;
  activeStep: number;
  totalSteps: number;
  answered: boolean; // Adicionando a propriedade 'answered'
};

const QuestionsBox = ({ question, onNext, onBack, activeStep, totalSteps, answered }: QuestionsBoxProps) => {
  const [selectedAnswer, setSelectedAnswer] = React.useState<number | null>(null);

  const handleAnswerSelected = (id: number) => {
    setSelectedAnswer(id);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      onNext(selectedAnswer); // Passa o ID da resposta selecionada
    }
  };

  return (
    <div className="flex h-screen w-full justify-center items-center">
      <Card
        sx={{
          width: { xs: '90%', sm: 500, md: 600, lg: 800 },
          minHeight: 400,
          mx: 'auto',
          mt: 4,
          p: 2,
        }}
      >
        <CardContent>
          <Typography gutterBottom sx={{ fontSize: 14 }} color="text.secondary">
            Cesgranrio {bull} BANESE {bull} 2025
          </Typography>
          <Typography gutterBottom sx={{ fontSize: 16 }} color="text.primary">
            {question.nome}
          </Typography>
        </CardContent>

        <RadioPositionEnd
          respostas={question.respostas}
          onAnswerSelected={handleAnswerSelected} // Passa a função para o RadioPositionEnd
        />
        <ButtonSizes onNext={handleNext} onBack={onBack} activeStep={activeStep} totalSteps={totalSteps} />
      </Card>
    </div>
  );
};

export default QuestionsBox;

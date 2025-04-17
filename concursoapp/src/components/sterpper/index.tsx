'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import QuestionsBox from '../questionsbox'; // Ajuste o caminho conforme sua estrutura

const VerticalLinearStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [questions, setQuestions] = React.useState<any[]>([]);
  const [answeredQuestions, setAnsweredQuestions] = React.useState<boolean[]>([]);
  const [score, setScore] = React.useState<number>(0);

  React.useEffect(() => {
    fetch('https://literate-parakeet-7g7pgj7w56vcx9pw-3001.app.github.dev/api/questions')
      .then((response) => response.json())
      .then((data) => setQuestions(data.perguntas));
  }, []);

  const handleNext = (userAnswer: number) => {
    const correctAnswer = questions[activeStep].resposta_correta;

    // Verifique se a resposta do usuário está correta
    if (userAnswer === correctAnswer) {
      setScore((prevScore) => prevScore + 1); // Incrementa o score se a resposta estiver correta
    }

    const newAnsweredQuestions = [...answeredQuestions];
    newAnsweredQuestions[activeStep] = true; // Marca a questão como respondida
    setAnsweredQuestions(newAnsweredQuestions);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setAnsweredQuestions([]);
    setScore(0);
  };

  const handleFinish = () => {
    alert(`Você terminou! Sua pontuação é: ${score}/${questions.length}`);
    handleReset(); // Reseta para reiniciar o quiz
  };

  if (questions.length === 0) {
    return <Typography>Carregando...</Typography>;
  }

  return (
    <Box sx={{ maxWidth: 900, mx: 'auto' }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {questions.map((question, index) => (
          <Step key={question.id}>
            <StepLabel>{`Questão ${index + 1}`}</StepLabel>
            <StepContent>
              <QuestionsBox
                question={question}
                onNext={handleNext}
                onBack={handleBack}
                activeStep={activeStep}
                totalSteps={questions.length}
                answered={answeredQuestions[activeStep] || false}
              />

            </StepContent>
          </Step>
        ))}
      </Stepper>

      {activeStep === questions.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>Você finalizou todas as etapas!</Typography>
          <Box sx={{ mt: 2 }}>
            <Typography sx={{ mb: 2 }}>Sua pontuação: {score}/{questions.length}</Typography>
            <button onClick={handleFinish}>Finalizar</button>
            <button onClick={handleReset}>Reiniciar</button>
          </Box>
        </Paper>
      )}
    </Box>
  );
};

export default VerticalLinearStepper;

'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import QuestionsBox from '../questionsbox';

const VerticalLinearStepper = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [questions, setQuestions] = React.useState<any[]>([]);
  const [answeredQuestions, setAnsweredQuestions] = React.useState<boolean[]>([]);
  const [score, setScore] = React.useState<number>(0);

  React.useEffect(() => {
    fetch('https://musical-space-meme-px7px579g4qfxjx-3000.app.github.dev/api/questions')
      .then((response) => response.json())
      .then((data) => setQuestions(data.perguntas));
  }, []);

  const handleNext = (userAnswer: number) => {
    const correctAnswer = questions[activeStep].resposta_correta;

    if (userAnswer === correctAnswer) {
      setScore((prevScore) => prevScore + 1);
    }

    const newAnsweredQuestions = [...answeredQuestions];
    newAnsweredQuestions[activeStep] = true;
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
    handleReset();
  };

  if (questions.length === 0) {
    return <Typography sx={{ color: 'white' }}>Carregando...</Typography>;
  }

  return (<div className='text-white bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen flex items-center justify-center'>
    <Box sx={{ maxWidth: 900, mx: 'auto', color: 'white' }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {questions.map((question, index) => (
          <Step key={question.id}>
            <StepLabel sx={{ color: 'white', '& .MuiStepLabel-label': { color: 'white' } }}>
              {`Questão ${index + 1}`}
            </StepLabel>

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
        <Paper square elevation={0} sx={{ p: 3, backgroundColor: 'transparent', color: 'white' }}>
          <Typography>Você finalizou todas as etapas!</Typography>
          <Box sx={{ mt: 2 }}>
            <Typography sx={{ mb: 2 }}>Sua pontuação: {score}/{questions.length}</Typography>
            <button onClick={handleFinish}>Finalizar</button>
            <button onClick={handleReset}>Reiniciar</button>
          </Box>
        </Paper>
      )}
    </Box>
  </div>
  );
};

export default VerticalLinearStepper;

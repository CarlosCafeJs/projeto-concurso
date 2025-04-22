'use client';

import React from 'react';
import { Box, Button } from '@mui/material';

type ButtonSizesProps = {
  onNext: () => void;
  onBack: () => void;
  activeStep: number;
  totalSteps: number;
  answered: boolean;
  selectedAnswer: number | null;
};

const ButtonSizes = ({
  onNext,
  onBack,
  activeStep,
  totalSteps,
  answered,
  selectedAnswer,
}: ButtonSizesProps) => {
  const isLastStep = activeStep === totalSteps - 1;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        px: 2,
        py: 3,
      }}
    >
      <Button
        variant="outlined"
        onClick={onBack}
        disabled={activeStep === 0}
      >
        Voltar
      </Button>

      <Button
        variant="contained"
        onClick={onNext}
        disabled={answered || selectedAnswer === null}
      >
        {isLastStep ? 'Finalizar' : 'Próximo'}
      </Button>
    </Box>
  );
};

export default ButtonSizes;

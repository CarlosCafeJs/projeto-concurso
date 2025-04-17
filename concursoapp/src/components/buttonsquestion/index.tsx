'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

type ButtonSizesProps = {
  onNext: () => void;
  onBack: () => void;
  activeStep: number;
  totalSteps: number;
};

const ButtonSizes = ({ onNext, onBack, activeStep, totalSteps }: ButtonSizesProps) => {
  return (
    <Box sx={{ '& button': { m: 1 } }}>
      <div className="flex justify-between items-center">
        <Button
          size="large"
          sx={{
            color: '#000',
            padding: 1,
            borderRadius: '8px',
            border: '1px solid transparent',
            '&:hover': {
              borderColor: '#0033A0',
              backgroundColor: '#FFCC00',
            },
          }}
          disabled={activeStep === 0}
          onClick={onBack}
        >
          Anterior
        </Button>

        <Button
          size="large"
          sx={{
            color: '#000',
            padding: 1,
            border: '1px solid transparent',
            '&:hover': {
              borderColor: '#0033A0',
              backgroundColor: '#FFCC00',
            },
            borderRadius: '8px',
          }}
          onClick={onNext}
          disabled={activeStep === totalSteps - 1}
        >
          Próximo
        </Button>
      </div>
    </Box>
  );
};

export default ButtonSizes;

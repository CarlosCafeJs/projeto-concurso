'use client';

import * as React from 'react';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';

type Resposta = {
  id: number;
  resposta: string;
};

type RadioPositionEndProps = {
  respostas: Resposta[];
  onAnswerSelected: (id: number) => void; // Função para passar a resposta selecionada para o componente pai
};

const RadioPositionEnd = ({ respostas, onAnswerSelected }: RadioPositionEndProps) => {
  const [selectedAnswer, setSelectedAnswer] = React.useState<number | null>(null);

  const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedValue = parseInt(event.target.value, 10);
    setSelectedAnswer(selectedValue);
    onAnswerSelected(selectedValue); // Passa a resposta selecionada de volta para o componente pai
  };

  return (
    <RadioGroup aria-label="Resposta" name="resposta" value={selectedAnswer || ''} onChange={handleAnswerChange}>
      <List
        sx={{
          minWidth: 150,
          '--List-gap': '0.3rem',
          '--ListItem-paddingY': '1rem',
          '--ListItem-radius': '8px',
          '--ListItemDecorator-size': '32px',
        }}
      >
        {respostas.map((item) => (
          <ListItem key={item.id} variant="outlined" sx={{ boxShadow: 'sm', maxHeight: 46, color: '#000', padding: 1 }}>
            <ListItemDecorator>{['A', 'B', 'C', 'D', 'E'][item.id - 1]}</ListItemDecorator>
            <Radio value={item.id.toString()} label={item.resposta} />
          </ListItem>
        ))}
      </List>
    </RadioGroup>
  );
};

export default RadioPositionEnd;

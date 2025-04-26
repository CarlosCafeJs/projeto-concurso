'use client';

import { useState } from 'react';
import { z } from 'zod';
import { Box, TextField, Button, FormControl, InputLabel, Select, MenuItem, FormHelperText, Checkbox, FormControlLabel, Typography, SelectChangeEvent } from '@mui/material';

// Defina seus schemas de validação
const alternativaSchema = z.object({
  resposta: z.string().min(1, "A resposta não pode estar vazia"),
  correta: z.boolean()
});

const questaoSchema = z.object({
  enunciado: z.string().min(10, "O enunciado deve ter pelo menos 10 caracteres"),
  assunto: z.string().min(3, "O assunto deve ter pelo menos 3 caracteres"),
  nivel_dificuldade: z.enum(['facil', 'medio', 'dificil']),
  referencia: z.string().optional(),
  explicacao: z.string().optional(),
  tempo_resposta_estipulado: z.string().optional(),
  alternativas: z.array(alternativaSchema)
    .min(2, "São necessárias pelo menos 2 alternativas")
    .refine(alternativas => alternativas.some(a => a.correta), {
      message: "Pelo menos uma alternativa deve estar correta"
    })
});

export default function RegisterQuestions() {
  const [response, setResponse] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [question, setQuestion] = useState({
    enunciado: '',
    assunto: '',
    nivel_dificuldade: 'medio',
    referencia: '',
    explicacao: '',
    tempo_resposta_estipulado: '00:02:00',
    alternativas: [
      { resposta: '', correta: false },
      { resposta: '', correta: false },
      { resposta: '', correta: false },
      { resposta: '', correta: false },
      { resposta: '', correta: false },
    ],
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string>) => {
    const { name, value } = e.target;
    setQuestion(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAlternativeChange = (index: number, field: string, value: string | boolean) => {
    const newAlternatives = [...question.alternativas];
    newAlternatives[index] = { ...newAlternatives[index], [field]: value };
    setQuestion(prev => ({ ...prev, alternativas: newAlternatives }));
  };

  const submitQuestion = async () => {
    try {
      const alternativasValidas = question.alternativas.filter(a => a.resposta.trim());

      const validatedData = questaoSchema.parse({
        ...question,
        alternativas: alternativasValidas
      });

      setErrors({});

      const response = await fetch('/api/create-question', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validatedData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erro ao criar questão');
      }

      setResponse('Questão criada com sucesso!');
      setQuestion({
        enunciado: '',
        assunto: '',
        nivel_dificuldade: 'medio',
        referencia: '',
        explicacao: '',
        tempo_resposta_estipulado: '00:02:00',
        alternativas: [
          { resposta: '', correta: false },
          { resposta: '', correta: false },
          { resposta: '', correta: false },
          { resposta: '', correta: false },
          { resposta: '', correta: false },
        ],
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          const path = err.path.join('.');
          newErrors[path] = err.message;
        });
        setErrors(newErrors);
        setResponse('Corrija os erros no formulário');
      } else {
        setResponse(error instanceof Error ? error.message : 'Erro desconhecido');
      }
    }
  };

  const getError = (fieldName: string) => {
    return errors[fieldName] ? (
      <FormHelperText error>{errors[fieldName]}</FormHelperText>
    ) : null;
  };

  return (
    <Box component="main" sx={{ maxWidth: '800px', background: '#fff', color: '#000', margin: '0 auto', padding: '20px' }}>
      <Typography variant="h4" gutterBottom>Criar Nova Questão</Typography>

      <Box mb={3}>
        <TextField
          label="Enunciado"
          name="enunciado"
          value={question.enunciado}
          onChange={handleInputChange}
          fullWidth
          multiline
          rows={4}
          required
          error={!!errors['enunciado']}
          helperText={getError('enunciado')}
        />
      </Box>

      <Box mb={3}>
        <TextField
          label="Assunto"
          name="assunto"
          value={question.assunto}
          onChange={handleInputChange}
          fullWidth
          required
          error={!!errors['assunto']}
          helperText={getError('assunto')}
        />
      </Box>

      <Box mb={3}>
        <FormControl fullWidth>
          <InputLabel id="nivel_dificuldade-label">Nível de Dificuldade</InputLabel>
          <Select
            labelId="nivel_dificuldade-label"
            name="nivel_dificuldade"
            value={question.nivel_dificuldade}
            onChange={handleInputChange}
            label="Nível de Dificuldade"
            required
          >
            <MenuItem value="facil">Fácil</MenuItem>
            <MenuItem value="medio">Médio</MenuItem>
            <MenuItem value="dificil">Difícil</MenuItem>
          </Select>
          {getError('nivel_dificuldade')}
        </FormControl>
      </Box>

      <Box mb={3}>
        <Typography variant="h6">Alternativas: *</Typography>
        {question.alternativas.map((alt, index) => (
          <Box key={index} display="flex" alignItems="center" mb={2}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={alt.correta}
                  onChange={(e) => handleAlternativeChange(index, 'correta', e.target.checked)}
                />
              }
              label="Alternativa correta"
            />
            <TextField
              label={`Alternativa ${index + 1}`}
              value={alt.resposta}
              onChange={(e) => handleAlternativeChange(index, 'resposta', e.target.value)}
              fullWidth
              required
            />
          </Box>
        ))}
        {getError('alternativas')}
        {getError('alternativas.correta')}
      </Box>

      <Box mb={3}>
        <TextField
          label="Referência (opcional)"
          name="referencia"
          value={question.referencia}
          onChange={handleInputChange}
          fullWidth
        />
      </Box>

      <Box mb={3}>
        <TextField
          label="Explicação (opcional)"
          name="explicacao"
          value={question.explicacao}
          onChange={handleInputChange}
          fullWidth
          multiline
          rows={3}
        />
      </Box>

      <Box mb={3}>
        <TextField
          label="Tempo estimado (HH:MM:SS)"
          name="tempo_resposta_estipulado"
          value={question.tempo_resposta_estipulado}
          onChange={handleInputChange}
          fullWidth
          placeholder="00:02:00"
        />
      </Box>

      <Box mb={3} display="flex" gap={2}>
        <Button
          variant="outlined"
          onClick={() => {
            setQuestion(prev => ({
              ...prev,
              alternativas: [...prev.alternativas, { resposta: '', correta: false }]
            }));
          }}
        >
          Adicionar Alternativa
        </Button>

        <Button
          variant="outlined"
          color="error"
          onClick={() => {
            if (question.alternativas.length > 2) {
              setQuestion(prev => ({
                ...prev,
                alternativas: prev.alternativas.slice(0, -1)
              }));
            }
          }}
          disabled={question.alternativas.length <= 2}
        >
          Remover Alternativa
        </Button>
      </Box>

      <Box mb={3}>
        <Button
          onClick={submitQuestion}
          variant="contained"
          color="primary"
          fullWidth
          sx={{ padding: '10px' }}
        >
          Criar Questão
        </Button>
      </Box>

      {response && (
        <Box
          sx={{
            padding: '10px',
            marginTop: '20px',
            backgroundColor: response.includes('sucesso') ? '#dff0d8' : '#f8d7da',
            border: `1px solid ${response.includes('sucesso') ? '#d0e9c6' : '#f5c6cb'}`,
            color: response.includes('sucesso') ? '#3c763d' : '#721c24',
            borderRadius: '4px'
          }}
        >
          <Typography>{response}</Typography>
        </Box>
      )}
    </Box>
  );
}
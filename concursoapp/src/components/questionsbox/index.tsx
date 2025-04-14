import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const QuestionsBox = () => {
  return (
    <div className='flex h-screen w-full justify-center items-center'>
      <Card
        sx={{
          width: {
            xs: '90%',
            sm: 500,
            md: 600,
            lg: 800,
          },
          minHeight: 400,
          mx: 'auto',
          mt: 4,
          p: 2,
        }}
      >
        <CardContent>
          <Typography gutterBottom sx={{ fontSize: 14 }} color="text.secondary">
            Banca {bull} Cesgranrio 2021
          </Typography>
          <Typography gutterBottom sx={{ fontSize: 24 }} color="text.primary">
            Pergunta 1
          </Typography>
        </CardContent>
        {/* <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </div >
  );
}


export default QuestionsBox;
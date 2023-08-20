"use client"
import React from 'react';
import { Container, Typography, Link , Grid} from '@mui/material';
import { BarraDeNavegacao } from '@/componentes/navbar/BarraDeNavegacao';
import {ThemeProvider,  createTheme} from '@mui/material';
import { green, deepOrange, grey } from '@mui/material/colors';


const useStyles ={
  container: {
    paddingTop: 4,
    paddingBottom: 4,
  },
  textContainer: {
    marginBottom: 4,
  },
};

const theme = createTheme({
  palette:{
      primary :{main: green[900]} ,
      secondary:{main : deepOrange[900]},
      white : {main: "#fff"},
      black : {main : "#0D0D0D", contrastText :"#212121"},
      subtitle : {main : grey[700]}

      
  }
})


const PrivacyPolicyPage = () => {
  const classes = useStyles;

  return (

    <ThemeProvider theme={theme}> 
      <Grid container xs={12} mt={20}>

        <BarraDeNavegacao />


      <Container  className={classes.container}>
        <Typography variant="h4" gutterBottom>
          Política de Privacidade
        </Typography>
        <div className={classes.textContainer}>
          <Typography variant="body1" gutterBottom>
            Esta Política de Privacidade descreve como o site [Nome do Seu Site] ("nós", "nosso" ou "site") coleta,
            usa e compartilha suas informações pessoais quando você utiliza nosso site [URL do Seu Site].
          </Typography>
          {/* Adicione mais trechos de texto conforme necessário */}
        </div>
        <div className={classes.textContainer}>
          <Typography variant="h6" gutterBottom>
            Coleta e Uso de Informações Pessoais
          </Typography>
          <Typography variant="body1" gutterBottom>
            Ao utilizar nosso site, podemos coletar informações pessoais que você voluntariamente fornece, como seu nome,
            endereço de e-mail e outras informações relevantes. Essas informações são utilizadas para os seguintes propósitos:
          </Typography>
          {/* Adicione mais trechos de texto conforme necessário */}
        </div>
        {/* Continue adicionando os parágrafos relevantes da política de privacidade */}
        <div className={classes.textContainer}>
          <Typography variant="h6" gutterBottom>
            Contato
          </Typography>
          <Typography variant="body1" gutterBottom>
            Se você tiver alguma dúvida ou preocupação relacionada à privacidade, entre em contato conosco pelo e-mail{' '}
            <Link href="mailto:seu@email.com">seu@email.com</Link>.
          </Typography>
        </div>
      </Container>

      </Grid>
    </ThemeProvider>
  );
};

export default PrivacyPolicyPage;

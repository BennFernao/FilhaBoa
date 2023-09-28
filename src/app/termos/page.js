"use client"
import React from 'react';
import { Container, Typography, Link ,Box,  Grid} from '@mui/material';
import { BarraDeNavegacao } from '@/componentes/navbar/BarraDeNavegacao';
import {ThemeProvider,  createTheme} from '@mui/material';
import { green, deepOrange, grey } from '@mui/material/colors';
import { Footer } from '@/componentes/footers/footer1';


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

        <Grid container item sx={{justifyContent : "center",  alignItemsCenter:"center"}}> 
            <Grid container item sx={{width: "80%", marginTop: "20px"}}>   
                <Box > 

                    <Typography variant="h3" >Termos e Condições de Uso do Site</Typography>
                    <Typography variant="body1" sx={{mb:5}}>Bem-vindo ao site do FilhaBoa. Antes de prosseguir, pedimos que leia atentamente estes Termos e Condições de Uso. Ao acessar e utilizar nosso site, você concorda com os seguintes termos:</Typography>

                    <Typography variant="h5" sx={{mb:1}}>1. Introdução</Typography >
                    <Typography variant="body1" sx={{mb:5}}>Este site é oferecido com o objetivo de fornecer uma forma de apadrinhares vinhas em portugal. Nada do que é apresentado neste site deve ser interpretado como aconselhamento um conhecimento específico, tampouco constitui uma relação produtor-cliente. </Typography>

                    <Typography variant="h5" sx={{mb:1}}>2. Informações e Conteúdo</Typography>
                    <Typography variant="body1" sx={{mb:5}}>Faremos o possível para fornecer informações precisas e atualizadas em nosso site. No entanto, não garantimos a exatidão, completude ou atualidade das informações apresentadas. As informações podem estar sujeitas a erros, omissões ou imprecisões.</Typography>

                    <Typography variant="h5" sx={{mb:1}}>3. Uso de Dados dos Usuários</Typography>
                    <Typography variant="body1" sx={{mb:5}}>Comprometemo-nos a proteger a privacidade dos dados fornecidos pelos usuários do site. Ao utilizar nosso site, você concorda com a coleta e o uso de suas informações de acordo com nossa <a href="/politica-de-privacidade">Política de Privacidade</a>. As informações pessoais fornecidas serão tratadas com a máxima confidencialidade e utilizadas somente de acordo com os propósitos para os quais foram coletadas.</Typography>

                    <Typography variant="h5" sx={{mb:1}}>4. Propriedade Intelectual</Typography>
                    <Typography variant="body1" sx={{mb:5}}>Todo o conteúdo presente neste site, incluindo mas não se limitando a textos, imagens, logotipos, gráficos, vídeos e áudios, é protegido por direitos autorais e outras leis de propriedade intelectual. Nenhum conteúdo deste site pode ser reproduzido, distribuído, transmitido, exibido, vendido, licenciado ou de qualquer forma explorado para fins comerciais ou não, sem a nossa autorização expressa por escrito.</Typography>

                    <Typography variant="h5" sx={{mb:1}}>5. Links para Terceiros</Typography>
                    <Typography variant="body1" sx={{mb:5}}>Nosso site pode conter links para sites de terceiros, que são fornecidos apenas para sua conveniência. Não temos controle sobre o conteúdo, políticas de privacidade e práticas de sites de terceiros. Recomendamos que você revise os termos e condições de uso e a política de privacidade de qualquer site acessado por meio de links em nosso site.</Typography>

                    <Typography variant="h5" sx={{mb:1}}>6. Isenção de Responsabilidade</Typography>
                    <Typography variant="body1" sx={{mb:5}}>Você utiliza nosso site por sua conta e risco. Não nos responsabilizamos por quaisquer danos diretos, indiretos, consequenciais, ou incidentais decorrentes do uso ou incapacidade de uso deste site, bem como de qualquer conteúdo ou serviço nele contido. Isentamo-nos também de quaisquer responsabilidades relacionadas a falhas técnicas, vírus, interrupções, ou outras questões relacionadas ao acesso e uso do site.</Typography>

                    <Typography variant="h5" sx={{mb:1}}>7. Alterações nos Termos e Condições</Typography>
                    <Typography variant="body1" sx={{mb:5}}>Reservamo-nos o direito de alterar estes Termos e Condições a qualquer momento, sem aviso prévio. As alterações entrarão em vigor a partir do momento em que forem publicadas neste site. Recomendamos que você visite periodicamente esta página para se manter atualizado sobre possíveis mudanças.</Typography>

                    <Typography variant="body1" sx={{mb:5}}>Ao continuar utilizando nosso site, você declara estar ciente e concorda com estes Termos e Condições de Uso. Se você não concorda com estes termos, solicitamos que não utilize nosso site. Em caso de dúvidas ou solicitações, por favor, entre em contato conosco por meio dos canais de comunicação disponíveis no site.</Typography>
                </Box>
            </Grid>
        </Grid>

        <Grid container item>

          <Footer />

        </Grid>

      </Grid>
    </ThemeProvider>
  );
};

export default PrivacyPolicyPage;

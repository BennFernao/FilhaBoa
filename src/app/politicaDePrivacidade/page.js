"use client"
import React from 'react';
import { Container, Typography, Link , Grid, Box} from '@mui/material';
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
   
        <BarraDeNavegacao />


        <Grid container item sx={{justifyContent : "center",  alignItemsCenter:"center", mt:"80px"}}> 
            <Grid container item sx={{width: "80%", marginTop: "20px"}}>   
                <Box >

                <Typography variant="h3" >Política de Privacidade</Typography>
                <Typography variant="body1" sx={{mb:5}}>A sua privacidade é importante para nós. Esta Política de Privacidade descreve como coletamos, usamos, divulgamos e protegemos as informações pessoais dos usuários do site do FilhaBoa. Ao utilizar nosso site, você concorda com os termos descritos nesta política.</Typography>

                        <Box >   
                            <Typography variant="h5" sx={{mb:1}}>1. Informações Coletadas</Typography>
                            <Typography variant="body1" sx={{mb:5}}>Quando você acessa nosso site, podemos coletar informações que você nos fornece voluntariamente, como nome, endereço de e-mail e número de telefone. Além disso, podemos coletar informações técnicas, como o endereço IP, tipo de navegador, dispositivo utilizado, páginas visitadas e atividades realizadas no site.</Typography>

                            <Typography variant="h5" sx={{mb:1}}>2. Uso das Informações</Typography>
                            <Typography variant="body1" sx={{mb:5}}>As informações coletadas são utilizadas para os seguintes fins:</Typography>
                            <ul>
                                <li><Typography variant="body1" sx={{mb:1}}>Fornecer e personalizar os conteúdos e serviços do site;</Typography></li>
                                <li><Typography variant="body1" sx={{mb:1}}>Responder a consultas, dúvidas e solicitações;</Typography></li>
                                <li><Typography variant="body1" sx={{mb:1}}>Enviar comunicações importantes, como atualizações e informações relevantes;</Typography></li>
                                <li><Typography variant="body1" sx={{mb:1}}>Melhorar a experiência do usuário no site;</Typography></li>
                                <li><Typography variant="body1" sx={{mb:5}}>Realizar análises e pesquisas para aprimorar nossos serviços.</Typography></li>
                            </ul>

                            <Typography variant="h5" sx={{mb:1}}>3. Compartilhamento de Informações</Typography>
                            <Typography variant="body1" sx={{mb:5}}>As informações pessoais dos usuários não serão vendidas, alugadas ou compartilhadas com terceiros para fins comerciais. No entanto, poderemos compartilhar informações com prestadores de serviços contratados para auxiliar na operação do site e em nossas atividades, desde que estes estejam sujeitos a obrigações de confidencialidade.</Typography>

                            <Typography variant="h5" sx={{mb:1}}>4. Cookies e Tecnologias Semelhantes</Typography>
                            <Typography variant="body1" sx={{mb:5}}>Utilizamos cookies e tecnologias semelhantes para coletar informações sobre o uso do site, melhorar sua funcionalidade e fornecer uma experiência personalizada. Os cookies podem ser desativados nas configurações do navegador, mas isso pode afetar a funcionalidade do site.</Typography>

                            <Typography variant="h5" sx={{mb:1}}>5. Segurança das Informações</Typography>
                            <Typography variant="body1" sx={{mb:5}}>Empregamos medidas de segurança adequadas para proteger as informações pessoais dos usuários contra acesso não autorizado, alteração, divulgação ou destruição.</Typography>

                            <Typography variant="h5" sx={{mb:1}}>6. Links para Terceiros</Typography>
                            <Typography variant="body1" sx={{mb:5}}>Nosso site pode conter links para sites de terceiros. Esta Política de Privacidade aplica-se apenas ao nosso site, portanto, recomendamos que você leia as políticas de privacidade de quaisquer sites visitados por meio desses links.</Typography>

                            <Typography variant="h5" sx={{mb:1}}>7. Direitos do Usuário</Typography>
                            <Typography variant="body1" sx={{mb:5}}>Os usuários têm o direito de acessar, corrigir, atualizar ou excluir suas informações pessoais. Caso deseje exercer esses direitos, entre em contato conosco por meio dos canais de comunicação disponíveis no site.</Typography>

                            <Typography variant="h5" sx={{mb:1}}>8. Alterações na Política de Privacidade</Typography>
                            <Typography variant="body1" sx={{mb:5}}>Reservamo-nos o direito de alterar esta Política de Privacidade a qualquer momento, com efeito a partir da data de publicação em nosso site. Recomendamos que você verifique periodicamente esta página para se manter informado sobre possíveis alterações.</Typography>

                            <Typography variant="h5" sx={{mb:1}}>9. Contato</Typography>
                            <Typography variant="body1" sx={{mb:5}}>Se você tiver alguma dúvida ou preocupação sobre esta Política de Privacidade ou sobre a forma como tratamos as informações pessoais, entre em contato conosco por meio dos canais disponíveis no site.</Typography>

                            <footer>
                            <Typography variant="body1" sx={{mb:5, fontWeight:"bold"}}>Data da última atualização: 29/07/2023 às 19:00.</Typography>
                            <Typography variant="body1" sx={{mb:5, fontWeight:"bold"}}>FilhaBoa</Typography>
                            </footer>
                            </Box>
                </Box>
            </Grid>

      </Grid>

      <Footer />
    </ThemeProvider>
  );
};

export default PrivacyPolicyPage;

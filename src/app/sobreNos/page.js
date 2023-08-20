"use client"
import * as React from 'react';
import { BarraDeNavegacao } from "@/componentes/navbar/BarraDeNavegacao";
import { Grid, Box, Typography, Divider, Button } from "@mui/material";
import {  ThemeProvider, createTheme } from '@mui/material';
import { green, deepOrange, grey } from '@mui/material/colors';
import Image from 'next/image';

import { ScreenComDoisComponentes, PequenaDescricaoTextual, PequenaDescricaoTextualMenor } from '@/componentes/screens/screenComDoisComponentes';
import { ScreenTituloMaisCards, ScreenTituloMaisCardsDois } from '@/componentes/screens/screenTituloMaisCards';
import { Footer } from '@/componentes/footers/footer1';
import HeaderUm from '@/componentes/headers/header1';

const theme = createTheme({
  palette:{
      primary :{main: green[900]} ,
      secondary:{main : deepOrange[900]},
      white : {main: "#fff"},
      black : {main : "#0D0D0D", contrastText :"#212121"},
      subtitle : {main : grey[700]}

      
  }
})

export default function Home() {

  // Definições gerais

  const definicoesGerais = {
    paddingHorizontal : 5,
    paddingVertical : 15
  }

  // Dados para o primeiro componente

  const itemsParaOComponenteUm ={

    titulo : "Há um tempo atrás começamos a impactar o mundo",
    descricao : "A importância do apadrinhamento vai além do vinho. Ao apadrinhar uma videira, você se torna um guardião de uma parte significativa da nossa história e cultura. Você está escrevendo seu próprio capítulo nesta história, contribuindo para o futuro do vinho e para a celebração do legado que ele carrega consigo",
    subtitulo : "Junte-se a nós no apadrinhamento de videiras",
  }

  const componenteUmDoScreenUm = <PequenaDescricaoTextual {...itemsParaOComponenteUm} />
  const ComponenteDoisScreenUm = ()=>( 
    <Box mt={10} >
         <Image width={640} height={640}  src="/img8.jpg" style={{objectFit:"cover"}} />
    </Box>
  )

    // Dados para o Segundo componente

const itensDoScreenTituloMaisCards = {

  titulo : "10 anos plantando com amor",
  dadosDosCards : [{
        srcImagem : "/img3.jpg",
      
        titulo : "Plante com responsabilidade" 
      },{
        srcImagem : "/img3.jpg",
 
        titulo : "Seja um participante" 
      },{
        srcImagem : "/img3.jpg",
       
        titulo : "Festeje connosco" 
      }
    ]
}

    // Dados para o segundo componente

    const itemsParaOComponenteTres ={
      titulo : "Cultive Memórias Duradouras",
      descricao : "Você estará cultivando memórias que durarão uma vida inteira. Ao segurar uma taça do vinho produzido por suas videiras, você sentirá uma conexão profunda com a terra, o tempo e a tradição. Cada gole será uma celebração não apenas do vinho, mas do seu papel na criação dele.",
      subtitulo : "O apadrinhamento de videiras transcende os limites do presente"
    }
  
    const componenteUmDoScreenTres = <PequenaDescricaoTextual {...itemsParaOComponenteTres} />
    const ComponenteDoisScreenTres = ()=>( 
      <Box mt={10} pr={5}>
           <Image width={640} height={640}  src="/img7.jpg" style={{objectFit:"cover"}} alt='Vinhas da filha boa' />
      </Box>
    )


// Dados para o Quarto Componente

const itemsParaOComponenteQuatro ={
  descricao: "Nossa vinícola é um guardião do ambiente que a cerca. Ao apadrinhar uma videira, você se une a nós na promoção da agricultura sustentável e da preservação da biodiversidade local. ",
  titulo : "Suporte Ambiental",
  subtitulo: "Connosco plantas melhor" 
}

const itemsParaOComponenteQuinto ={
  descricao: "Ao apadrinhar uma videira, você não está apenas investindo em uvas; você está investindo em uma experiência completa. Você terá o privilégio de acompanhar de perto a evolução de suas videiras ao longo das estações ",
  titulo : "Do Vinhedo à Experiência ",
  subtitulo: "Connosco plantas melhor" 
}

const componenteUmDoScreenCinco = <PequenaDescricaoTextualMenor {...itemsParaOComponenteQuinto} />
const ComponenteDoisScreenCinco = ()=>( 
  <Box >
       <Image width={640} height={450} style={{maxWidth:"100%", objectFit:"cover"}} src="/img3.jpg" />
  </Box>
)

const componenteUmDoScreenQuatro = <PequenaDescricaoTextualMenor {...itemsParaOComponenteQuatro} />
const ComponenteDoisScreenQuatro = ()=>( 
  <Box >
       <Image width={640} height={450} src="/img3.jpg" style={{maxWidth:"100%", objectFit:"cover"}} />
  </Box>
)


const dadosParaOHeader = {
  titulo :"Sobre Nós",
  descricao: "Saiba mais sobre  nós"
}





  

  return (

    <ThemeProvider theme={theme}>
      <BarraDeNavegacao />
      <HeaderUm  {...dadosParaOHeader}/>

      <Grid container >
        {// primeiro elemento
        }
        <ScreenComDoisComponentes ComponenteUm={componenteUmDoScreenUm} ComponenteDois={<ComponenteDoisScreenUm />}  {...definicoesGerais} primeiroElemento={true}/>
        {// Segundo elemento
        }
        <ScreenTituloMaisCards titulo={itensDoScreenTituloMaisCards.titulo} dadosDosCards={itensDoScreenTituloMaisCards.dadosDosCards}/>

         {// Terceiro  elemento
        }

        <ScreenComDoisComponentes ComponenteDois={componenteUmDoScreenTres} ComponenteUm={<ComponenteDoisScreenTres />}  {...definicoesGerais}/>

        {// Quarto elemento
        }

        <Box px={definicoesGerais.paddingHorizontal}>
          <Typography variant='h2' sx={{fontWeight:"bold", mb:10}}>Juntos podemos melhorar o mundo</Typography>
        </Box>
        <Grid container item xs={12} sx={{display:"flex", flexDirection:"row"}} px={definicoesGerais.paddingHorizontal}>
            <Grid item xs={12} md={6} p={2}>
                <ScreenComDoisComponentes ComponenteDois={componenteUmDoScreenQuatro} ComponenteUm={<ComponenteDoisScreenQuatro />}  {...definicoesGerais} paddingVertical={10} bgColor="white"/>
            </Grid>
            <Grid item xs={12} md={6} p={2}>
                <ScreenComDoisComponentes ComponenteDois={componenteUmDoScreenCinco} ComponenteUm={<ComponenteDoisScreenCinco />}  {...definicoesGerais} paddingVertical={10} bgColor="white"/>
            </Grid>
        </Grid>

        {
          //Quarto
        }



        <Grid  container item px={definicoesGerais.paddingHorizontal} py={definicoesGerais.paddingVertical} sx={{ backgroundColor:"#000000", flexDirection:"column"}}>
          <Grid item>

            <Typography variant="h3" sx={{fontWeight:"bold", mb:8}} color="white.main">
              Conheça os nossos planos 
            </Typography>

          </Grid>

          <Grid container item >
            <Grid xs={12} lg={4} p={2}>  
              <Box sx={{width:"100%", height:600, backgroundColor: grey[900],boxSizing:"border-box", p:5}}>

                <Typography color={grey[500]} sx={{fontWeight:700}} variant="body1">Planos Filha Boa</Typography>
                <Typography color="white.main" variant="h5" sx={{fontWeight:"bold", my:2}}>Plano Básico</Typography>
                

                <Typography color={grey[500]} variant="body1">
                É importante fornecer informações claras e transparentes sobre os detalhes do plano para garantir que o cliente esteja ciente do que está adquirindo. Aqui estão alguns dos dados mais importantes que alguém pode querer saber sobre um plano de pagamento 
                </Typography>

                <Typography color={grey[200]} variant='body1' my={2} >
                  Apartir de 1$
                </Typography>
                <Typography color={grey[200]} variant='body1' my={2} sx={{textDecoration: "line-through"}} >
                  Apartir de 1$
                </Typography>


                <Typography color={grey[200]} variant='body1' my={2}>
                  Por 3 meses
                </Typography>

                <Typography color={grey[200]} variant='body1' my={2}>
                  Cancelamento automático 
                </Typography>



                <Box sx={{width:"100%", display:"flex", flexDirection:"column", mt:8}}>

                  <Button variant="contained"   sx={{position:"block"}}>
                    Aderir
                  </Button>

                  <Button outlined="contained" color='white' sx={{mt:2}}>
                    Saber mais
                  </Button>

                </Box>



              </Box>
            </Grid>

            <Grid xs={12} lg={4} p={2}>  
              <Box sx={{width:"100%", height:600, backgroundColor: grey[900],boxSizing:"border-box", p:5}}>

  <Typography color={grey[500]} sx={{fontWeight:700}} variant="body1">Planos Filha Boa</Typography>
  <Typography color="white.main" variant="h5" sx={{fontWeight:"bold", my:2}}>Plano Básico</Typography>


  <Typography color={grey[500]} variant="body1">
  É importante fornecer informações claras e transparentes sobre os detalhes do plano para garantir que o cliente esteja ciente do que está adquirindo. Aqui estão alguns dos dados mais importantes que alguém pode querer saber sobre um plano de pagamento 
  </Typography>

  <Typography color={grey[200]} variant='body1' my={2} >
    Apartir de 1$
  </Typography>
  <Typography color={grey[200]} variant='body1' my={2} sx={{textDecoration: "line-through"}} >
    Apartir de 1$
  </Typography>


  <Typography color={grey[200]} variant='body1' my={2}>
    Por 3 meses
  </Typography>

  <Typography color={grey[200]} variant='body1' my={2}>
    Cancelamento automático 
  </Typography>



  <Box sx={{width:"100%", display:"flex", flexDirection:"column", mt:8}}>

    <Button variant="contained"   sx={{position:"block"}}>
      Aderir
    </Button>

    <Button outlined="contained" color='white' sx={{mt:2}}>
      Saber mais
    </Button>

  </Box>



              </Box>
            </Grid>

            <Grid xs={12} lg={4} p={2}> 
              <Box sx={{width:"100%", height:600, backgroundColor: grey[900],boxSizing:"border-box", p:5}}>

              <Typography color={grey[500]} sx={{fontWeight:700}} variant="body1">Planos Filha Boa</Typography>
              <Typography color="white.main" variant="h5" sx={{fontWeight:"bold", my:2}}>Plano Básico</Typography>


              <Typography color={grey[500]} variant="body1">
              É importante fornecer informações claras e transparentes sobre os detalhes do plano para garantir que o cliente esteja ciente do que está adquirindo. Aqui estão alguns dos dados mais importantes que alguém pode querer saber sobre um plano de pagamento 
              </Typography>

              <Typography color={grey[200]} variant='body1' my={2} >
                Apartir de 1$
              </Typography>
              <Typography color={grey[200]} variant='body1' my={2} sx={{textDecoration: "line-through"}} >
                Apartir de 1$
              </Typography>


              <Typography color={grey[200]} variant='body1' my={2}>
                Por 3 meses
              </Typography>

              <Typography color={grey[200]} variant='body1' my={2}>
                Cancelamento automático 
              </Typography>



              <Box sx={{width:"100%", display:"flex", flexDirection:"column", mt:8}}>

                <Button variant="contained"   sx={{position:"block"}}>
                  Aderir
                </Button>

                <Button outlined="contained" color='white' sx={{mt:2}}>
                  Saber mais
                </Button>

              </Box>



              </Box>
            </Grid>


          </Grid>

        </Grid>




        <Grid container item px={definicoesGerais.paddingHorizontal} py={definicoesGerais.paddingVertical} sx={{ backgroundColor:"#000000"}}>
          <Footer />
          <Divider sx={{color: grey[100], backgroundColor: grey[500]}} />
        </Grid>

          
          

        </Grid>


    </ThemeProvider>



  )
}

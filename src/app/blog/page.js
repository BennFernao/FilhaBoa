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

    titulo : "Torne se um Guardião",
    descricao : "A importância do apadrinhamento vai além do vinho. Ao apadrinhar uma videira, você se torna um guardião de uma parte significativa da nossa história e cultura. Você está escrevendo seu próprio capítulo nesta história, contribuindo para o futuro do vinho e para a celebração do legado que ele carrega consigo",
    subtitulo : "Junte-se a nós no apadrinhamento de videiras",
    textoParaAcaoUm : "Apadrinhar",
    aviso : "Ao continuares neste site, você aceita a nossa politca e termos de privacidade"
  }

  const componenteUmDoScreenUm = <PequenaDescricaoTextual {...itemsParaOComponenteUm} />
  const ComponenteDoisScreenUm = ()=>( 
    <Box mt={10} >
         <Image width={640} height={640}  src="/img5.jpg" style={{objectFit:"cover"}} />
    </Box>
  )

    // Dados para o Segundo componente

const itensDoScreenTituloMaisCards = {

  titulo : "10 anos plantando com amor",
  dadosDosCards : [{
        srcImagem : "/img3.jpg",
        textoParaAcao : "Saber mais",
        titulo : "Plante com responsabilidade" 
      },{
        srcImagem : "/img3.jpg",
        textoParaAcao : "Saber mais",
        titulo : "Seja um participante" 
      },{
        srcImagem : "/img3.jpg",
        textoParaAcao : "Saber mais",
        titulo : "Festeje connosco" 
      }
    ]
}

    // Dados para o segundo componente

    const itemsParaOComponenteTres ={
      titulo : "Cultive Memórias Duradouras",
      descricao : "Você estará cultivando memórias que durarão uma vida inteira. Ao segurar uma taça do vinho produzido por suas videiras, você sentirá uma conexão profunda com a terra, o tempo e a tradição. Cada gole será uma celebração não apenas do vinho, mas do seu papel na criação dele.",
      subtitulo : "O apadrinhamento de videiras transcende os limites do presente",
      textoParaAcaoUm : "Saiba mais"

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
  subtitulo: "Connosco plantas melhor" ,
  textoParaAcaoUm : "Junte-se a nós ",
}

const itemsParaOComponenteQuinto ={
  descricao: "Ao apadrinhar uma videira, você não está apenas investindo em uvas; você está investindo em uma experiência completa. Você terá o privilégio de acompanhar de perto a evolução de suas videiras ao longo das estações ",
  titulo : "Do Vinhedo à Experiência ",
  subtitulo: "Connosco plantas melhor" ,
  textoParaAcaoUm : "Junte-se a nós ",
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



// Dados para o Quinto Componente


const itemsDadosDosPosts = {
 
  dadosDosCards : [
    {
        autor: "Filha boa",
        titulo: "OS encargos que suportamos",
        srcImagem : "/img4.jpg",
        
    },        {
        autor: "Filha boa",
        titulo: "OS encargos que suportamos",
        srcImagem : "/img4.jpg",
        
    }, {
        autor: "Filha boa",
        titulo: "OS encargos que suportamos",
        srcImagem : "/img4.jpg",
        
    }
  ]

}

const dadosParaOHeader = {
  titulo :"BLOG",
  descricao: " Acompanhe as principais noticias sobre a filha boa aqui"
}


// Dados para o Quinto Componente

const questoesERespostas = [
  {
    questao: "Como os negócios da Filha boa funciona",
    resposta : "Funcionamos como um grupo nacional tentando"
  },  {
    questao: "Como os negócios da Filha boa funciona",
    resposta : "Funcionamos como um grupo nacional tentando"
  },  {
    questao: "Como os negócios da Filha boa funciona",
    resposta : "Funcionamos como um grupo multinacional tentando"
  },  {
    questao: "Como os negócios da Filha boa funciona",
    resposta : "Funcionamos como um grupo multinacional tentando"
  }
]


  

  return (

    <ThemeProvider theme={theme}>
      <BarraDeNavegacao />
      <HeaderUm {...dadosParaOHeader} />


      <Grid container >

        {// Quinto
        }

        <Grid container item sx={{backgroundColor : "#f7f7f7"}}>  
            <ScreenTituloMaisCardsDois  {...itemsDadosDosPosts}/>
        </Grid>


 



        <Grid container item px={definicoesGerais.paddingHorizontal} py={definicoesGerais.paddingVertical} sx={{ backgroundColor:"#000000"}}>
          <Footer />
          <Divider sx={{color: grey[100], backgroundColor: grey[500]}} />
        </Grid>

          
          

        </Grid>


    </ThemeProvider>



  )
}

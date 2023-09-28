"use client"
import * as React from 'react';
import { BarraDeNavegacao } from "@/componentes/navbar/BarraDeNavegacao";
import { Grid, Box, Typography, Divider, Button } from "@mui/material";

import { green, deepOrange, grey } from '@mui/material/colors';
import Image from 'next/image';

import { ScreenComDoisComponentes, PequenaDescricaoTextual, PequenaDescricaoTextualMenor } from '@/componentes/screens/screenComDoisComponentes';
import { Footer } from '@/componentes/footers/footer1';
import PlanoDeApadrinhamento from '@/componentes/apresentacaoDeCards/apresentacao1';
import { ContainerParaDoisComponentes, Imagem } from '../page';
import { ItensDeAutenticacao } from '@/componentes/navbar/subcomponentes/ItemDeAutenticacao';



export default function Home() {

  // Definições gerais



  // Dados para o primeiro componente

  // Definições gerais
  const definicoesGerais = {
    paddingHorizontal : 5,
    paddingVertical : 15
  }

// Elementos para o primeiro componente

const itemsParaOComponenteUm = {

  titulo : "Funcionamos como representamos ",
  descricao : "A importância do apadrinhamento vai além do vinho Ao apadrinhar uma videira, você se torna um guardião  de uma parte significativa da nossa história e cultura  Você está escrevendo seu próprio capítulo nesta história,  contribuindo para o futuro do vinho e para a celebração do legado que ele carrega consigo. ",
  subtitulo : "Aguardando por você",

  aviso : "Ao continuares , você aceita a nossa politica e termos de privacidade",
  linkParaOAviso : "/politicaDePrivacidade"
}
const Componente1DoGrid1 = <PequenaDescricaoTextual {...itemsParaOComponenteUm} /> 
const Componente2DoGrid1 = <Imagem src={"/img21.jpg"} />

    // Dados para o Segundo componente

const itensDoScreenTituloMaisCards = {

  titulo : "10 anos plantando com amor",
  dadosDosCards : [{
        srcImagem : "/img3.jpg",
        titulo : "Plante com responsabilidade" 
      },{
        srcImagem : "/img10.jpg", 
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

const ComponenteUmDoScreenQuatro = ({titulo, subtitulo,descricao, textoParaAcaoUm, linkParaAcao})=>{
  return(

    <Box pt={2} pl={2}>

        <Typography variant="body1" sx={{mt:2,fontWeight:"bold", color:grey[700]}}>
            {subtitulo}
        </Typography>

        <Typography variant="h4" color={grey["900"]} gutterBottom sx={{fontWeight:"bold"}}>
            {titulo}
        </Typography>

        <Typography variant="body1" sx={{mt:4, color:grey[700]}}>
            {descricao}
        </Typography>

        {textoParaAcaoUm && 
        <Box sx={{mt:4}}>
            <Button variant="outlined"  size="large" href={linkParaAcao}  sx={{mr:4, color:"white"}} endIcon={<ArrowForward />}>{textoParaAcaoUm}</Button>
          
        </Box>
        }

    </Box>

  )
}
const ComponenteDoisScreenCinco = ()=>( 
  <Box >
       <Image width={640} height={450} style={{maxWidth:"100%", objectFit:"cover"}} src="/img3.jpg" />
  </Box>
)

const ComponenteDoisScreenQuatro = ()=>( 
  <Box >
       <Image width={640} height={450} src="/img3.jpg" style={{maxWidth:"100%", objectFit:"cover"}} />
  </Box>
)






 

  return (

   
      
      

      <Grid container >

      <BarraDeNavegacao>
          <ItensDeAutenticacao />
       </BarraDeNavegacao>
      {// primeiro elemento
      }
      <ContainerParaDoisComponentes Componente1={Componente1DoGrid1} Componente2={Componente2DoGrid1} opcoes={{bg:"#0D0D0D", py:2}} />


      {// primeiro elemento
      }
      <ContainerParaDoisComponentes Componente1={Componente2DoGrid1} Componente2={Componente1DoGrid1} opcoes={{bg:"#0D0D0D", py:2}} />



        {// Quarto elemento
        }
              <Grid item>

                <Box px={definicoesGerais.paddingHorizontal} mt={5}>
                  <Typography variant='h3' sx={{fontWeight:"bold", mb:2, color:"#226027"}}>Juntos podemos melhorar o mundo</Typography>
                </Box>

                <Grid container item xs={12} sx={{display:"flex", flexDirection:"row"}} px={definicoesGerais.paddingHorizontal}>
                    <Grid item xs={12} md={6} p={2}>
                        <ScreenComDoisComponentes ComponenteDois={<ComponenteUmDoScreenQuatro {...itemsParaOComponenteQuatro}  />} ComponenteUm={<ComponenteDoisScreenQuatro />}  {...definicoesGerais} paddingVertical={10} bgColor="white"/>
                    </Grid>


                    <Grid item xs={12} md={6} p={2}>
                        <ScreenComDoisComponentes  ComponenteDois={<ComponenteUmDoScreenQuatro {...itemsParaOComponenteQuatro}  />} ComponenteUm={<ComponenteDoisScreenCinco />}  {...definicoesGerais} paddingVertical={10} bgColor="white"/>
                    </Grid>
                </Grid>

              </Grid>


        {
          //Quarto
        }



      <Grid  container item px={definicoesGerais.paddingHorizontal} py={8} sx={{ backgroundColor:"#000000", flexDirection:"column"}}>
          <Grid item>

            <Typography variant="h3" sx={{fontWeight:"bold", mb:4, color:"#54ad5b" }} >
                Conheça os nossos planos 
            </Typography>

          </Grid>

          <Grid container item >
              <PlanoDeApadrinhamento />
              <PlanoDeApadrinhamento />
              <PlanoDeApadrinhamento />

          </Grid>


      </Grid>






        <Grid container item px={definicoesGerais.paddingHorizontal} py={definicoesGerais.paddingVertical} sx={{ backgroundColor:"#000000"}}>
          <Footer />
          <Divider sx={{color: grey[100], backgroundColor: grey[500]}} />
        </Grid>

          
          

        </Grid>


 


  )
}

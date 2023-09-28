"use client"
import * as React from 'react';
import { green, deepOrange, grey } from '@mui/material/colors';
import { Grid, Box, Typography, Divider, Button , TextField, Icon} from "@mui/material";

import Image from 'next/image';

import { ScreenComDoisComponentes, PequenaDescricaoTextual, PequenaDescricaoTextualMenor } from '@/componentes/screens/screenComDoisComponentes';
import { ScreenTituloMaisCards, ScreenTituloMaisCardsDois } from '@/componentes/screens/screenTituloMaisCards';
import PerguntaEResposta from './Home/acordation';
import { Footer } from '@/componentes/footers/footer1';
import PlanoDeApadrinhamento from '@/componentes/apresentacaoDeCards/apresentacao1';
import { ArrowForward, Circle, Mouse } from '@mui/icons-material';

import { ModalCertificado } from './apadrinhar/page';
import { buscarDadosJson } from '../../utils/fecths/post';
import {degrees, PDFDocument, rgb, StandardFonts} from "pdf-lib"
import { ItensDeAutenticacao } from '@/componentes/navbar/subcomponentes/ItemDeAutenticacao';
import { BarraDeNavegacao } from '@/componentes/navbar/BarraDeNavegacao';




export default function App(){

  // Definições gerais
    const definicoesGerais = {
      paddingHorizontal : 5,
      paddingVertical : 15
    }

  // Elementos para o primeiro componente

  const itemsParaOComponenteUm = {

    titulo : "Torne se um Guardião ",
    descricao : "A importância do apadrinhamento vai além do vinho Ao apadrinhar uma videira, você se torna um guardião  de uma parte significativa da nossa história e cultura  Você está escrevendo seu próprio capítulo nesta história,  contribuindo para o futuro do vinho e para a celebração do legado que ele carrega consigo. ",
    subtitulo : "Aguardando por você",
    textoParaAcaoUm : "Apadrinhar",
    linkParaAcao :"/apadrinhar",
    aviso : "Ao continuares , você aceita a nossa politica e termos de privacidade",
    linkParaOAviso : "/politicaDePrivacidade"
  }
  const Componente1DoGrid1 = <PequenaDescricaoTextual {...itemsParaOComponenteUm} /> 
  const Componente2DoGrid1 = <Imagem src={"/img8.jpg"} />

  const Componente2DoGrid2 = <Imagem src={"/img21.jpg"} />


  // Elementos para o segundo componente

  const itensDoScreenTituloMaisCards = {

    titulo : "10 anos plantando com amor",
    dadosDosCards : [{
          srcImagem : "/img3.jpg",
          textoParaAcao : "Saber mais",
          linkParaAcao : "/comoFunciona",
          titulo : "Plante com responsabilidade" 
        },{
          srcImagem : "/img14.jpg",
          textoParaAcao : "Saber mais",
          linkParaAcao : "/comoFunciona",
          titulo : "Seja um participante" 
        },{
          srcImagem : "/img13.jpg",
          textoParaAcao : "Saber mais",
          linkParaAcao : "/contacto",
          titulo : "Fale connosco" 
        }
      ]
    }


  // Dados para o Quarto Componente

const itemsParaOComponenteQuatro ={
  descricao: "Nossa vinícola é um guardião do ambiente que a cerca. Ao apadrinhar uma videira, você se une a nós na promoção da agricultura sustentável e da preservação da biodiversidade local. ",
  titulo : "Suporte Ambiental",
  subtitulo: "Connosco plantas melhor" ,
  textoParaAcaoUm : "Junte-se a nós ",
  linkParaAcao : "/apadrinhar"
}

const itemsParaOComponenteQuinto ={
  descricao: "Ao apadrinhar uma videira, você não está apenas investindo em uvas; você está investindo em uma experiência completa. Você terá o privilégio de acompanhar de perto a evolução de suas videiras ao longo das estações ",
  titulo : "Do Vinhedo à Experiência ",
  subtitulo: "Connosco plantas melhor" ,
  textoParaAcaoUm : "Junte-se a nós ",
  linkParaAcao:"/apadrinhar"
}

const componenteUmDoScreenCinco = <PequenaDescricaoTextualMenor {...itemsParaOComponenteQuinto} />
const ComponenteDoisScreenCinco = ()=>( 
  <Box >
       <Image width={640} height={450} style={{maxWidth:"100%", objectFit:"cover",  borderRadius:"5px"}} src="/img16.jpg" />
  </Box>
)



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

const ComponenteDoisScreenQuatro = ()=>( 
  <Box >
       <Image width={640} height={450} src="/img15.jpg" style={{maxWidth:"100%", objectFit:"cover", borderRadius:"5px"}} />
  </Box>
)



const itemsDadosDosPosts = {
  titulo : "Artigos Recentes",
  textoLerMais : "Mais Artigos",
  dadosDosCards : [
    {
        autor: "Filha boa",
        titulo: "OS encargos que suportamos",
        srcImagem : "/img5.jpg",
        
    },        {
        autor: "Filha boa",
        titulo: "OS encargos que suportamos",
        srcImagem : "/img4.jpg",
        
    }, {
        autor: "Filha boa",
        titulo: "OS encargos que suportamos",
        srcImagem : "/img8.jpg",
        
    }
  ]

}

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
  },
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


  

  return(

    <Grid container sx={{backgroundColor: "#FFFFFF"}} >

        <BarraDeNavegacao>
          <ItensDeAutenticacao />
        </BarraDeNavegacao>

      {// primeiro elemento
      }
      <ContainerParaDoisComponentes Componente1={Componente1DoGrid1} Componente2={Componente2DoGrid1} opcoes={{bg:"#0D0D0D", py:2}} />

      {// primeiro elemento
      }
      <ContainerParaDoisComponentes Componente1={Componente2DoGrid2} Componente2={Componente1DoGrid1} opcoes={{bg:"#0D0D0D", py:2}} />

      {
        //Segundo elemento
      }
      <ScreenTituloMaisCards titulo={itensDoScreenTituloMaisCards.titulo} dadosDosCards={itensDoScreenTituloMaisCards.dadosDosCards}/>

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
        //Terceiro elemento
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

        {
        // Quinto
        }

        <Grid container item sx={{backgroundColor : "#f7f7f7"}}>  
          <ScreenTituloMaisCardsDois  {...itemsDadosDosPosts}/>
        </Grid>


        {
        // 
        }

        <Grid container item xs={12}  px={definicoesGerais.paddingHorizontal} py={definicoesGerais.paddingVertical}>

          <Typography variant='h3' sx={{fontWeight:"bold", mb:10, color: "#226027"}}>Perguntas Frequentes</Typography>

          <Grid container  xs={12}  > 
          {questoesERespostas.map((qr, pos)=>(

              <Grid  xs={12} md={6} sx={{px:2, my:2}}>  
                <PerguntaEResposta  questao={qr.questao} resposta={qr.resposta} />
              </Grid>
          ))}
          </Grid>
        </Grid>


        {
        // Footer
        }
        <Grid container item px={definicoesGerais.paddingHorizontal} py={definicoesGerais.paddingVertical} sx={{ backgroundColor:"#000000"}}>
          <Footer />
          <Divider sx={{color: grey[100], backgroundColor: grey[500]}} />
        </Grid>

    </Grid>
  )
}


export function Imagem({src}){

  return(
    <Box  mt={10}  sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
      <Image width={680} height={640}  src={src} style={{objectFit:"cover", borderRadius:3}} />
    </Box> 
  )
}


export function ContainerParaDoisComponentes({Componente1, Componente2, opcoes}){

  return(

    <Grid container item xs={12} sx={{ display:"flex", flexDirection:"row", flexWrap: "wrap", justifyContent: "space-between", bgcolor: opcoes.bg ? opcoes.bg : "inherit", py: opcoes.py ? opcoes.py : 2}} >

          <Grid item xs ={12} md={6} >
             {Componente1}           
          </Grid>

          <Grid container item xs={12} md={6} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}  >
            {Componente2}   
          </Grid>
    </Grid>
  )
}

function Container2(){

  return(
    <Grid container  item sx={{py:10,px:5, bgcolor : "#0D0D0D",  display:"flex", flexDirection:"column"}}>
        <Typography variant='h3' sx={{fontWeight:"bold", color:grey["200"]}}>
            Tenha a sua vinha em poucos cliques
        </Typography>

        <Grid item lg={5}>

          <Box sx={{backgroundColor: grey["900"], display:"flex", flexDirection:"column", p:4}}>
            <Typography variant='h6'  color={grey["100"]} sx={{fontWeight:"bold"}}>
              1
            </Typography>

            <Box sx={{ display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}} >

              <Icon color={grey["100"]}>
                <Circle color={grey["100"]}/>
              </Icon>

              <Typography variant='h6'>
                Selecionar as videiras 
              </Typography>

            </Box>

            <Typography variant='body1'>
                 Primeiramente selecione as videiras que pretende apadrinhar Primeiramente selecione as videiras que pretende apadrinhar Primeiramente selecione as videiras que pretende apadrinhar Primeiramente selecione as videiras que pretende apadrinhar Primeiramente selecione as videiras que pretende apadrinhar
              </Typography>

          </Box>
          
        </Grid>


    </Grid>
  )
}
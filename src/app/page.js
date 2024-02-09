"use client"
import * as React from 'react';
import { green, deepOrange, grey } from '@mui/material/colors';
import { Grid, Box, Typography, Divider, Button , TextField, Icon, useMediaQuery} from "@mui/material";

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
import PrimeiroComponente from '@/componentesPageInicial/primeiro';
import SegundoComponente from '@/componentesPageInicial/segundo';
import TerceiroComponente from '@/componentesPageInicial/terceiro';

import { Fade } from 'react-reveal';



export default function App(){

  // Definições gerais
    const definicoesGerais = {
      paddingHorizontal : 5,
      paddingVertical : 10
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



const ComponenteUmDoScreenSeis = ()=>{

  const [modalDeCertificadoAberto, setModalDeCertificadoAberto] = React.useState(false)
  const [nome, setNome] = React.useState("")


  function abriModalCertificado(){

    escreverCertificado()
    setModalDeCertificadoAberto(true)
  }


  function manipularONome(e){

    setNome(e.target.value)

  }

  function escreverCertificado(){

  

    fetch("/cert/api").then((res)=>res.arrayBuffer())

     .then(async (res)=> {

       const exBytes = res 
       const pdfDoc = await PDFDocument.load(exBytes)
       const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
     
       const pages = pdfDoc.getPages()
       const firstPage = pages[0]
       const { width, height } = firstPage.getSize()
       
       firstPage.drawText(nome, {
         x: width/2 - 60,
         y: height / 2 ,
         
         size: 20,
         font: helveticaFont,
         color: rgb(0.23, 0.4, 0.74),
         
         
       })

       firstPage.drawText('Obrigado por teres apadrinhado as videiras da filhaboa', {
         x: 170,
         y: height / 2  - 40,
         size: 20,
         font: helveticaFont,
         color: rgb(0, 0, 0),
         
       })
     
       const pdfBytes = await pdfDoc.save()

       const pdfData = await pdfDoc.saveAsBase64({dataUri: true})
       const iframe = document.querySelector("#mypdf")

       console.log("acessado")

       iframe.src = pdfData
       iframe.style.width = "100%"
       iframe.style.height = "100%"
       
       
       })

   }



  return(

    <Grid container item >
              <Box px={5} mt={20} >

                  <Typography variant="h6" sx={{fontWeight:"bold", color:grey[700]}}>
                      visualize o seu certificado
                  </Typography>

                  <Typography variant="h2" color="black.main" gutterBottom sx={{fontWeight:"bold", color: "#226027"}}>
                      Simule o seu certificado
                  </Typography>

                  <Typography variant="body1" sx={{mt:4, color:grey[600]}}>
                      Visualize o seu certificado e motive-se a ver as videiras crescendo por sua causa.
                  </Typography>


                  <Box sx={{mt:4}}>
                      <TextField id="standard-basic" label="Seu nome" variant="standard" sx={{display:"block"}}  onChange={manipularONome}/>
                      <Button variant="outlined"  size="large"  sx={{mr:4,mt:4, color:"white"}} endIcon={<ArrowForward />} onClick={abriModalCertificado}>
                          Visualizar
                      </Button>
          
                  </Box>
                    
              </Box>

              <ModalCertificado nome={nome} modalDeCertificadoAberto={modalDeCertificadoAberto} setModalDeCertificadoAberto={setModalDeCertificadoAberto} />
    </Grid>
  )
}
const ComponenteDoisScreenSeis = ()=>( 
      <Box mt={10} pr={5}>
           <Image width={640} height={640}  src="/img17.jpg" style={{objectFit:"cover"}} alt='Vinhas da filha boa' />
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
        
    }, {
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
    questao: "Quais são os principais desafios ou obstáculos que a filha boa enfrenta atualmente ",
    resposta : "Atualmente, enfrentamos desafios como [desafios específicos], mas estamos implementando estratégias para superá-los e continuar nosso crescimento sustentável."
  },  {
    questao: "Qual é a missão da filha boa",
    resposta : "Nossa missão é fornecer soluções inovadoras para nossos clientes, promovendo a excelência e a satisfação do cliente"
  },  {
    questao: "Qual é o histórico de crescimento da filha boa nos últimos anos",
    resposta : "Temos experimentado um crescimento consistente nos últimos anos, com aumentos de [percentual] em receita e uma presença mais forte no mercado."
  },  {
    questao: "Como a filha boa aborda questões de responsabilidade social e sustentabilidade",
    resposta : "Estamos comprometidos com práticas empresariais éticas, responsabilidade social e sustentabilidade ambiental. Implementamos programas como [exemplos de iniciativas]."
  },
  {
    questao: "Quais são os planos futuros de expansão ou desenvolvimento da filha boa",
    resposta : "Estamos focados em expandir nossa presença global, introduzir novos produtos/serviços e investir em pesquisa e desenvolvimento para manter nossa posição de liderança"
  },  {
    questao: "Como a filha boa lida com a inovação e a tecnologia em seu setor",
    resposta : "Investimos continuamente em pesquisa e desenvolvimento para estar na vanguarda da inovação. Adotamos tecnologias emergentes, como [exemplos de tecnologias]."
  },  {
    questao: "Como os negócios da Filha boa funciona",
    resposta : "Funcionamos como um grupo multinacional tentando"
  },  {
    questao: "Qual é a cultura organizacional da filha boa ",
    resposta : "Nossa cultura é baseada em [valores da empresa], promovendo um ambiente de trabalho colaborativo, inclusivo e focado no desenvolvimento pessoal e profissional."
  }
]


  

  return(

    <Grid container sx={{backgroundColor: "#FFFFFF"}} >

        <BarraDeNavegacao>
          <ItensDeAutenticacao />
        </BarraDeNavegacao>

      <PrimeiroComponente />
      
      <Grid container sx={{mt:5}}>  
          <TerceiroComponente />
      </Grid>

      {// Quarto elemento
      }
      <Grid item>

          <Box px={definicoesGerais.paddingHorizontal} mt={5}>
            <Typography variant='h3' sx={{fontWeight:"bold", mb:2, color:"#226027"}}>Juntos podemos melhorar o mundo</Typography>
          </Box>

          <Grid container item xs={12} sx={{display:"flex", flexDirection:"row"}} px={definicoesGerais.paddingHorizontal}>
              <Grid item xs={12} md={6} p={2}>
                  <Fade>
                    <ScreenComDoisComponentes ComponenteDois={<ComponenteUmDoScreenQuatro {...itemsParaOComponenteQuatro}  />} ComponenteUm={<ComponenteDoisScreenQuatro />}  {...definicoesGerais} paddingVertical={10} bgColor="white"/>
                  </Fade>
              </Grid>


              <Grid item xs={12} md={6} p={2}>
                  <Fade>
                    <ScreenComDoisComponentes  ComponenteDois={<ComponenteUmDoScreenQuatro {...itemsParaOComponenteQuatro}  />} ComponenteUm={<ComponenteDoisScreenCinco />}  {...definicoesGerais} paddingVertical={10} bgColor="white"/>
                  </Fade>
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
              
                <PlanoDeApadrinhamento nomeDoPlano="Básico" valorPresente={50} valorAnterior={70} mensalidade={3}  />
                <PlanoDeApadrinhamento nomeDoPlano="Max" valorPresente={75} valorAnterior={90} mensalidade={3}  />
                <PlanoDeApadrinhamento nomeDoPlano="Premium" valorPresente={85} valorAnterior={95} mensalidade={3}  />
              
          </Grid>


      </Grid>


      {
        //Terceiro elemento, Simulador de certificado
      }

      <ScreenComDoisComponentes ComponenteDois={<ComponenteUmDoScreenSeis />} ComponenteUm={<ComponenteDoisScreenSeis />}  {...definicoesGerais}/>

        {
        // Quinto
        }

        <Grid container item sx={{backgroundColor : "#f7f7f7"}}>  
          <ScreenTituloMaisCardsDois  {...itemsDadosDosPosts} />
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
    <>
    <Box  mt={10}  sx={{display:"flex", justifyContent:"center", alignItems:"center", padding:{xs: 4, lg:0} }}>
      <Image width={680} height={640}  src={src} style={{objectFit:"cover", borderRadius:3, maxWidth:"100%"}} />
    </Box> 


    </>
  )
}


export function ContainerParaDoisComponentes({Componente1, Componente2, opcoes}){

  return(

    <Grid container item xs={12} sx={{ display:"flex", flexDirection: opcoes.diretion, flexWrap: "wrap", justifyContent: "space-between", bgcolor: opcoes.bg ? opcoes.bg : "inherit", py: opcoes.py ? opcoes.py : 2}} >

            <Grid container item xs={12} md={6} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}  >
              {Componente1}   
            </Grid>

            <Grid item xs ={12} md={6} >
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
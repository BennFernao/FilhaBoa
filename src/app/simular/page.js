"use client"
import * as React from 'react';
import { BarraDeNavegacao } from "@/componentes/navbar/BarraDeNavegacao";
import { green, deepOrange, grey } from '@mui/material/colors';
import { Grid, Box, Typography, Divider, Button , TextField} from "@mui/material";

import Image from 'next/image';

import { ScreenComDoisComponentes, PequenaDescricaoTextual, PequenaDescricaoTextualMenor } from '@/componentes/screens/screenComDoisComponentes';
import { ScreenTituloMaisCards, ScreenTituloMaisCardsDois } from '@/componentes/screens/screenTituloMaisCards';
import PerguntaEResposta from '../Home/acordation';
import { Footer } from '@/componentes/footers/footer1';
import PlanoDeApadrinhamento from '@/componentes/apresentacaoDeCards/apresentacao1';
import { ArrowForward } from '@mui/icons-material';
import { ModalCertificado } from '../apadrinhar/page';
import { buscarDadosJson } from '../../../utils/fecths/post';
import {degrees, PDFDocument, rgb, StandardFonts} from "pdf-lib"




export default function Home() {

  // Definições gerais
  const definicoesGerais = {
    paddingHorizontal : 5,
    paddingVertical : 15
  }

  // Dados para o primeiro componente

  const itemsParaOComponenteUm ={

    titulo : "Torne se um Guardião ",
    descricao : "A importância do apadrinhamento vai além do vinho Ao apadrinhar uma videira, você se torna um guardião  de uma parte significativa da nossa história e cultura  Você está escrevendo seu próprio capítulo nesta história,  contribuindo para o futuro do vinho e para a celebração do legado que ele carrega consigo. ",
    subtitulo : "Aguardando por você",
    textoParaAcaoUm : "Apadrinhar",
    linkParaAcao :"/apadrinhar",
    aviso : "Ao continuares , você aceita a nossa politica e termos de privacidade",
    linkParaOAviso : "/politicaDePrivacidade"
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

    // Dados para o segundo componente

    const itemsParaOComponenteTres ={
      titulo : "Cultive Memórias Duradouras",
      descricao : "Você estará cultivando memórias que durarão uma vida inteira. Ao segurar uma taça do vinho produzido por suas videiras, você sentirá uma conexão profunda com a terra, o tempo e a tradição. Cada gole será uma celebração não apenas do vinho, mas do seu papel na criação dele.",
      subtitulo : "O apadrinhamento de videiras transcende os limites do presente",
      textoParaAcaoUm : "Saiba mais",
      linkParaAcao : "/comoFunciona"

    }
  
    const componenteUmDoScreenTres = <PequenaDescricaoTextual {...itemsParaOComponenteTres} />
    const ComponenteDoisScreenTres = ()=>( 
      <Box mt={10} pr={5}>
           <Image width={640} height={640}  src="/img7.jpg" style={{objectFit:"cover"}} alt='Vinhas da filha boa' />
      </Box>
    )


        // Dados para o segundo componente

    const itemsParaOComponenteSeis ={
          titulo : "Simule o seu certificado",
          descricao : "Você estará cultivando memórias que durarão uma vida inteira. Ao segurar uma taça do vinho produzido por suas videiras, você sentirá uma conexão profunda com a terra, o tempo e a tradição. Cada gole será uma celebração não apenas do vinho, mas do seu papel na criação dele.",
          subtitulo : "O apadrinhamento de videiras transcende os limites do presente",
          textoParaAcaoUm : "Saiba mais"
    
        }
      
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

                      <Typography variant="h2" color="black.main" gutterBottom sx={{fontWeight:"bold"}}>
                          Simule o seu certificado
                      </Typography>

                      <Typography variant="body1" sx={{mt:4, fontWeight:"bold", color:grey[600]}}>
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
       <Image width={640} height={450} style={{maxWidth:"100%", objectFit:"cover"}} src="/img16.jpg" />
  </Box>
)



const componenteUmDoScreenQuatro = <PequenaDescricaoTextualMenor {...itemsParaOComponenteQuatro} />
const ComponenteDoisScreenQuatro = ()=>( 
  <Box >
       <Image width={640} height={450} src="/img15.jpg" style={{maxWidth:"100%", objectFit:"cover"}} />
  </Box>
)



// Dados para o Quinto Componente


const itemsDadosDosPosts = {
  titulo : "Artigos Recentes",
  textoLerMais : "Mais Artigos",
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


  return ( 

      <div>
   
      <Grid container sx={{backgroundColor: "#FFFFFF"}} >
        {// primeiro elemento
        }


        <Grid container item xs={12} sx={{ display:"flex", flexDirection:"row", flexWrap: "wrap", justifyContent: "space-between",backgroundColor: "#1E1E1E" }} >
            <Grid item xs ={12} md={6} >
              <PequenaDescricaoTextual {...itemsParaOComponenteUm} />          
            </Grid>

            <Grid container item xs={12} md={6} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}  >

                <Box mt={10}  sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                  <Image width={680} height={640}  src="/img20.jpg" style={{objectFit:"cover", borderRadius:3}} />
                </Box>    
            </Grid>
        </Grid>



        {// Segundo elemento
        }
        <ScreenTituloMaisCards titulo={itensDoScreenTituloMaisCards.titulo} dadosDosCards={itensDoScreenTituloMaisCards.dadosDosCards}/>

        {// Terceiro  elemento
        }

        <Grid container item xs={12} sx={{ display:"flex", flexDirection:"row", flexWrap: "wrap", justifyContent: "space-between",backgroundColor: "#FFFFFF",  mb:4 }} >


            <Grid container item xs={12} md={6} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}  >

                <Box mt={10}  sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                  <Image width={680} height={640}  src="/img20.jpg" style={{objectFit:"cover", borderRadius:3}} />
                </Box>    
            </Grid>

            <Grid item xs ={12} md={6} >
              <Box px={5} mt={30} >
                            
                  <div style={{backgroundColor: "#000", width: "200px", padding:"10px", borderRadius:"10px", marginTop:"10px"}}>
                      <Typography variant="body1" sx={{fontWeight:"bold", color:grey[100]}}>
                          Uma grande equipa
                      </Typography>
                  </div>


                  <Typography variant="h3"  gutterBottom sx={{fontWeight:"bold", color:"#226027", my:4}}>
                      Profisionais qualificados
                  </Typography>

                  <Typography variant="body2" sx={{my:4, color:grey[900]}}>
                      Você estará cultivando memórias que durarão uma vida inteira. Ao segurar uma taça do vinho produzido por suas videiras, você sentirá uma conexão profunda com a terra, o tempo e a tradição. Cada gole será uma celebração não apenas do vinho, mas do seu papel na criação dele.
                  </Typography>

                   <Box sx={{my:4 }}>
                      <Button  variant="outlined" size="large" href="/"  sx={{mr:4, color:"#226027", borderRadius:3, width:"200px", }} endIcon={<ArrowForward />}>Saiba mais</Button>
                  </Box>

              </Box>         
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
              <PlanoDeApadrinhamento />
              <PlanoDeApadrinhamento />
              <PlanoDeApadrinhamento />

          </Grid>


        </Grid>


        {// Quarto elemento
        }

        <Box px={definicoesGerais.paddingHorizontal} mt={5}>
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



          {// Terceiro  elemento
        }
        

        <ScreenComDoisComponentes ComponenteDois={<ComponenteUmDoScreenSeis />} ComponenteUm={<ComponenteDoisScreenSeis />}  {...definicoesGerais}/>


        {// Quinto
        }

        <Grid container item sx={{backgroundColor : "#f7f7f7"}}>  
          <ScreenTituloMaisCardsDois  {...itemsDadosDosPosts}/>
        </Grid>


 
        <Grid container item xs={12}  px={definicoesGerais.paddingHorizontal} py={definicoesGerais.paddingVertical}>

          <Typography variant='h2' sx={{fontWeight:"bold", mb:10}}>Perguntas Frequentes</Typography>

          <Grid container  xs={12}  > 
          {questoesERespostas.map((qr, pos)=>(

              <Grid  xs={12} md={6} sx={{px:2, my:2}}>  
                <PerguntaEResposta  questao={qr.questao} resposta={qr.resposta} />
              </Grid>
          ))}
           </Grid>
        </Grid>


        <Grid container item px={definicoesGerais.paddingHorizontal} py={definicoesGerais.paddingVertical} sx={{ backgroundColor:"#000000"}}>
          <Footer />
          <Divider sx={{color: grey[100], backgroundColor: grey[500]}} />
        </Grid>




          
          

        </Grid>


        </div>

  )
}

"use client"
import { Card1 } from "@/componentes/cards/cards1"
import BlogCard from "@/componentes/cards/cards2"
import { Delete, Edit, Logout } from "@mui/icons-material"
import { Grid, Typography, Box, Button, Avatar, TextField, Modal } from "@mui/material"
import Image from "next/image"
import React from "react"
import { buscarDadosJson } from "../../../utils/fecths/post"


function ModalEscreverPost({modalDeEscreverPostAberto, setModalDeEscreverPostAberto}){

   const [titulo, setTitulo] = React.useState(null)


    function manipularFechamento(){
        setModalDeEscreverPostAberto(false)
    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        pt: 2,
        px: 4,
        pb: 3,
      };

    
    
  

    return(
        <Modal
            open={modalDeEscreverPostAberto}
            onClose={manipularFechamento}
        >

            <Box sx={{...style, width: 500, height: 600}}>                   
                    <Typography variant="h6" color="black.main" sx={{textAlign:"center", mb:4}}>
                       Escrever um novo post
                    </Typography>

                    <TextField  fullWidth label="Titulo" type="text" sx={{my:1}} onChange={(e)=>{setTitulo(e.target.value)}}/>
                    <TextField  fullWidth label="Subtitulo" type="text" sx={{my:1}} onChange={(e)=>{setTitulo(e.target.value)}}/>
                    <TextField  fullWidth  type="file" onChange={(e)=>{setTitulo(e.target.value)}} sx={{my:1}}/>
                    <TextField  fullWidth label="Conteudo" multiline rows={8} type="text" sx={{my:1}} onChange={(e)=>{setTitulo(e.target.value)}}/>


                    <Button variant="contained" fullWidth  onClick={manipularFechamento}>
                        Adicionar
                    </Button>
            </Box>

            
        </Modal>
    )
}


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

const Blog = ()=>{

    const [modalDeEscreverPostAberto,  setModalDeEscreverPostAberto] = React.useState(false)


    return( 
    <Grid container item>

        <Grid container item sx={{display:"flex", flexDirection:"row", justifyContent:"flex-end"}}>
            <Button onClick={()=> {setModalDeEscreverPostAberto(true)}} variant="contained">Escrever Post</Button>
        </Grid>

        <Grid container item>

            {itemsDadosDosPosts.dadosDosCards.map((item, pos)=>(

                <Grid item xs={12} md={6} lg={4} p={2}>  
                    <BlogCard {...item} key={pos} />
                </Grid>

            ))}

        </Grid>

        <ModalEscreverPost modalDeEscreverPostAberto={modalDeEscreverPostAberto} setModalDeEscreverPostAberto={setModalDeEscreverPostAberto} />
        

    </Grid>
    )
}

const VideiraApadrinhada = ({posicao, plano, dataDeInicio, dataFinal})=>(

    <Grid container item >
        <Box sx={{width:"100%",display:"flex", flexDirection:"row", justifyContent:"space-between", p:2}}>

            <Box>
                <Typography>Data</Typography>
                <Typography>De {dataDeInicio} a {dataFinal}</Typography>
            </Box>

            <Box>
                <Typography>Videira</Typography>
                <Typography> {posicao}</Typography>
            </Box>

            <Box>
                <Typography>Plano </Typography>
                <Typography>{plano}</Typography>
            </Box>


        </Box>
    </Grid>

)

const DadosDoUser = ()=>(
    <Grid container item sx={{flexDirection:"column"}}>
        <Avatar sx={{mb:2}}>
            A
        </Avatar>

        <Box sx={{display:"flex", flexDirection:"row"}}>
            <Typography>Nome : </Typography>
            <Typography>Ben Fernao</Typography>
        </Box>

        <Box sx={{display:"flex", flexDirection:"row"}}>
            <Typography sx={{mb:1}}>Email : </Typography>
            <Typography>bennfernao@gmail.com</Typography>
        </Box>

    </Grid>
)
const Apadrinhos = ()=>{ 

    const dadosDosApadrinhos = [{
        posicao:"A53", 
        plano :"Basico", 
        dataDeInicio :"12/06/2019", 
        dataFinal: "12/06/2019"
    },
    {
        posicao:"A53", 
        plano :"Basico", 
        dataDeInicio :"12/06/2019", 
        dataFinal: "12/06/2019"
    }

]

return( 
    <Grid container item>
        
        <Box sx={{width:"100%"}}>
            {dadosDosApadrinhos.map((apadrinho, pos)=>(
                <VideiraApadrinhada  {...apadrinho}  key={pos}/>
            ))}  
        </Box>

    </Grid>)
}


function ModalEscreverPlano({modalDeEscreverPlanoAberto, setModalDeEscreverPlanoAberto}){

    const [titulo, setTitulo] = React.useState(null)
 
 
     function manipularFechamento(){
         setModalDeEscreverPlanoAberto(false)
     }
 
     const style = {
         position: 'absolute',
         top: '50%',
         left: '50%',
         transform: 'translate(-50%, -50%)',
         width: 400,
         bgcolor: 'background.paper',
         border: '2px solid #000',
         boxShadow: 24,
         pt: 2,
         px: 4,
         pb: 3,
       };
 
     
     
   
 
     return(
         <Modal
             open={modalDeEscreverPlanoAberto}
             onClose={manipularFechamento}
         >
 
             <Box sx={{...style, width: 500, height: 600}}>                   
                     <Typography variant="h6" color="black.main" sx={{textAlign:"center", mb:4}}>
                        Escrever um novo plano
                     </Typography>
 
                     <TextField  fullWidth label="Titulo" type="text" sx={{my:1}} onChange={(e)=>{setTitulo(e.target.value)}}/>
                     <TextField  fullWidth label="Prazo" type="text" sx={{my:1}} onChange={(e)=>{setTitulo(e.target.value)}}/>
                
                     <TextField  fullWidth label="Valor"  type="text" sx={{my:1}} onChange={(e)=>{setTitulo(e.target.value)}}/>
 
 
                     <Button variant="contained" fullWidth  onClick={manipularFechamento}>
                         Adicionar
                     </Button>
             </Box>
 
             
         </Modal>
     )
 }

 function ModalAtualizarPlano({modalDeAtualizarPlanoAberto, setModalDeAtualizarPlanoAberto}){

    const [titulo, setTitulo] = React.useState(null)
 
 
     function manipularFechamento(){
         setModalDeAtualizarPlanoAberto(false)
     }
 
     const style = {
         position: 'absolute',
         top: '50%',
         left: '50%',
         transform: 'translate(-50%, -50%)',
         width: 400,
         bgcolor: 'background.paper',
         border: '2px solid #000',
         boxShadow: 24,
         pt: 2,
         px: 4,
         pb: 3,
       };
 
     
     
   
 
     return(
         <Modal
             open={modalDeAtualizarPlanoAberto}
             onClose={manipularFechamento}
         >
 
             <Box sx={{...style, width: 500, height: 600}}>                   
                     <Typography variant="h6" color="black.main" sx={{textAlign:"center", mb:4}}>
                        Escrever um novo plano
                     </Typography>
 
                     <TextField  fullWidth label="Titulo" type="text" sx={{my:1}} onChange={(e)=>{setTitulo(e.target.value)}}/>
                     <TextField  fullWidth label="Prazo" type="text" sx={{my:1}} onChange={(e)=>{setTitulo(e.target.value)}}/>
                
                     <TextField  fullWidth label="Valor"  type="text" sx={{my:1}} onChange={(e)=>{setTitulo(e.target.value)}}/>
 
 
                     <Button variant="contained" fullWidth  onClick={manipularFechamento}>
                         Adicionar
                     </Button>
             </Box>
 
             
         </Modal>
     )
 }

 function ModalDeletarPlano({modalDeDeletarPlanoAberto, setModalDeDeletarPlanoAberto}){

    const [titulo, setTitulo] = React.useState(null)
 
 
     function manipularFechamento(){
         setModalDeDeletarPlanoAberto(false)
     }
 
     const style = {
         position: 'absolute',
         top: '50%',
         left: '50%',
         transform: 'translate(-50%, -50%)',
         width: 400,
         bgcolor: 'background.paper',
         border: '2px solid #000',
         boxShadow: 24,
         pt: 2,
         px: 4,
         pb: 3,
       };
 
     
     
   
 
     return(
         <Modal
             open={modalDeDeletarPlanoAberto}
             onClose={manipularFechamento}
         >
 
             <Box sx={{...style, width: 500, height: 600}}>                   
                     <Typography variant="h6" color="black.main" sx={{textAlign:"center", mb:4}}>
                        Tem certeza que pretende deletar o plano
                     </Typography>
 

 
            <Box sx={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                     <Button variant="contained" fullWidth  onClick={manipularFechamento}>
                         Adicionar
                     </Button>

                     <Button variant="contained" fullWidth  onClick={manipularFechamento}>
                         Adicionar
                     </Button>
            </Box>
             </Box>
 
             
         </Modal>
     )
 }

const Planos = ()=>{

    const [modalDeEscreverPlanoAberto,  setModalDeEscreverPlanoAberto] = React.useState(false)
    const [modalDeDeletarPlanoAberto, setModalDeDeletarPlanoAberto] = React.useState(false)
    const [modalDeAtualizarPlanoAberto, setModalDeAtualizarPlanoAberto] = React.useState(false)


    const planosExistentes = [
        {
            titulo : "Plano Basico",
            prazo : 4,
            valor : 500
        },
        {
            titulo : "Plano Max",
            prazo : 4,
            valor : 500
        },
        {
            titulo : "Plano Premium",
            prazo : 4,
            valor : 500
        }
    ]

    return(
        <Grid container >

            <Grid container item sx={{flexDirection:"center",  justifyContent:"space-between", alignItems:"center", mb:3, p:2}}>
                <Typography variant="h4" sx={{fontWeight:"500"}}>
                    Planos existentes
                </Typography>

                <Button variant="contained" onClick={()=>{setModalDeEscreverPlanoAberto(true)}}>
                    Adicionar novo plano
                </Button>
            </Grid>

            <Grid container item>
                {planosExistentes.map((plano, pos)=>(

                <Box sx={{width:"100%",display:"flex", flexDirection:"row", justifyContent:"space-between", p:2}}>
                        <Box sx={{width:"80%",display:"flex", flexDirection:"row", justifyContent:"space-between", p:2}}>

                                <Box>
                                    <Typography>Titulo</Typography>
                                    <Typography>{plano.titulo}</Typography>
                                </Box>

                                <Box>
                                    <Typography>Valor</Typography>
                                    <Typography> {plano.valor}</Typography>
                                </Box>

                                <Box>
                                    <Typography>Prazo </Typography>
                                    <Typography>{plano.prazo}</Typography>
                                </Box>
                        </Box>

                        <Box sx={{width: "20%" , display: "flex", flexDirection: "row", justifyContent:"flex-end", p:2}}>

                            <Edit sx={{mx:1}} onClick={()=>{setModalDeAtualizarPlanoAberto(true)}}/>
                            <Delete sx={{mx:1}} onClick={()=>{setModalDeDeletarPlanoAberto(true)}}/>

                        </Box>
                </Box>

                ))}

            </Grid>

            <ModalEscreverPlano modalDeEscreverPlanoAberto={modalDeEscreverPlanoAberto}  setModalDeEscreverPlanoAberto={setModalDeEscreverPlanoAberto} />
            <ModalDeletarPlano  modalDeDeletarPlanoAberto={modalDeDeletarPlanoAberto} setModalDeDeletarPlanoAberto = {setModalDeDeletarPlanoAberto} />
            <ModalAtualizarPlano modalDeAtualizarPlanoAberto={modalDeAtualizarPlanoAberto} setModalDeAtualizarPlanoAberto={setModalDeAtualizarPlanoAberto} />
        </Grid>
    )
}


const componentesDoDashboard = [DadosDoUser, Apadrinhos, Blog, Planos]





export default function DashBoardUser(){

    const [itemAtivo, setItemAtivo] = React.useState(0)
    const itensDeNavegacao = [  "User", "Apadrinhos", "Blog", "Planos" ]
    const ComponenteAtual = componentesDoDashboard[itemAtivo]

    function manipularItemAtivo(pos){

        setItemAtivo(pos)
    }

    async function efetuarLogout(){

        const [resultados, _] = await buscarDadosJson({url: "/logout/api", method : "GET"})
        console.log(resultados)
    
    }

    return(

        <Grid container>

            <Grid container item>
                <Grid container item sx={{flexDirection:"row", justifyContent:"space-between", alignItems:"center", p:4}}>
                    <Box sx={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                        <Image src="/logo.png" width={50} height={50} alt="Logotipo da Filha Boa" /> 
                        <Typography variant="h5" sx={{letterSpacing:2}}>FilhaBoa</Typography>
                    </Box>


                    <Button startIcon={<Logout />} onClick={efetuarLogout}>Logout</Button>
                </Grid>

                <Grid container item sx={{p:4}}>
                    <Grid container md={12}  item sx={{display:{xs:"none", md:"flex"}, flexDirection:"row", p:2, backgroundColor:"#EBF7EB", mb:4}} >

                        {
                            itensDeNavegacao.map((item, pos)=>(
                                <Button variant="text"  onClick={()=>{manipularItemAtivo(pos)}} sx={{display:"block", my:1, fontWeight: itemAtivo == pos ? "bold" : "400"}}> {item}</Button>
                            ))
                        }

                    </Grid>

                    <Grid container md={12} item sx={{display:{xs:"none", md: "flex"}}}>
                            <ComponenteAtual />
                    </Grid>

                </Grid>
            </Grid>
        </Grid>
    )
}
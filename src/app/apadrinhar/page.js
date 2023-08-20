"use client"
import { BarraDeNavegacao } from "@/componentes/navbar/BarraDeNavegacao";

import {  ThemeProvider, Typography, createTheme, Grid, Box, Button , Checkbox,MenuItem,  Modal, FormControl, InputLabel, Select} from '@mui/material';
import { green, deepOrange, grey } from '@mui/material/colors';
import Image from "next/image";
import * as React from "react"
import { Provider, useDispatch, useSelector,  } from "react-redux";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import Store from "../../../redux/store"


import {deletarVideiraSelecionada, inserirPlanos, inserirVideiraSelecionada, alterarSessaoAtiva, mapearUmaSessao} from "../../../redux/reducer"



const theme = createTheme({
    palette:{
        primary :{main: green[900]} ,
        secondary:{main : deepOrange[900]},
        white : {main: "#fff"},
        black : {main : "#0D0D0D", contrastText :"#212121"},
        subtitle : {main : grey[700]}
  
        
    }
  })



function  App(){

    const [modalDeApadrinhamentoAberto, setModalDeApadrinhamentoAberto] = React.useState(false)
    const [modalDeVisualizarVideiraAberto, setModalDeVisualizarVideira] = React.useState(false)

    const todosDadosDasSessoes = useSelector((state)=> state.sessoes)
    const {sessaoAtivada, estadosDasVideirasDasSessoes, videirasSelecionadas } = todosDadosDasSessoes

    const dispacth = useDispatch()

    function manipularAberturaDoModalApadrinhar(){
        setModalDeApadrinhamentoAberto(true)
    }
    
   
    return(


        <ThemeProvider theme={theme}>
            <BarraDeNavegacao />


            <Grid container item xs={12}  sx={{display:"flex", flexDirection:"row", gap:2}} >

                <Grid container item md={2}  sx={{display:{xs:"none", md:"flex"}, flexDirection:"column", pt:15,bgcolor: grey[200], height:"100vh", justifyContent:"start", alignItems:"center"}} >
                    {estadosDasVideirasDasSessoes.map((sessao, pos)=>(
                        <Box key={pos}>   
                            <Button variant={sessaoAtivada ==  pos + 1 ? "contained" : "text"} sx={{color:"black", my:1, color:"#000"}} onClick={()=>{

                                dispacth(alterarSessaoAtiva({sessaoAtivada : pos + 1 }))
                                                           
                                }}>Sessão {pos + 1 }</Button>
                        </Box>
                    ))}
                </Grid>

                <Grid container item md={9} sx={{pt:15, display:"flex" , flexDirection:"column"}}>

                    <Grid mb={3} container item sx={{justifyContent:"flex-end"}}>
                        <Button variant="contained" disabled = {(videirasSelecionadas.length == 0)} onClick={manipularAberturaDoModalApadrinhar}>Apadrinhar ({videirasSelecionadas.length})</Button>
                    </Grid>

                    <Grid mb={3} container item>

                        {[  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
                          'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].map((letra, pos)=>(

                            <Box sx={{width:42, display:"flex", flexDirection:"row", justifyContent:"center"}}>
                                {letra}
                            </Box>
                          ))
}

                    </Grid>

                    <Grid container item sx={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>  

                        {estadosDasVideirasDasSessoes[sessaoAtivada - 1].map((elemento, pos)=>{  

                            const itemSelecionado = videirasSelecionadas.find((item=> item.pos == pos && item.nome == "A23")) ? true : false
                            
                            return( 
                            
                            <Box sx={{position:"relative", width: 42, height:40}} key={pos} >   
                                <Image width={40} height={40} src="/img4.jpg" onClick={()=>{setModalDeVisualizarVideira(true)}} />
                                <div style={{width:"10px", height:"10px", position: "absolute", bottom: 0, right:0, backgroundColor:!elemento ? "red" : "green", borderRadius: "10px" }} >
                                    
                                </div>
                                <input type="checkbox" style={{position: "absolute", top: 0, right:0 }}  checked={itemSelecionado}    onClick={(e)=>{ 


                                if(e.target.checked){
        
                                    dispacth(inserirVideiraSelecionada({videiraSelecionada: {pos, nome:"A23"}}))

                                }else{
                                    
                                    dispacth(deletarVideiraSelecionada({videiraAExcluir: {pos, nome:"A23"}}))
                                }
                            }}
                                     
                            />
                            </Box>
                            )
                           })}
                           
                    </Grid>
                </Grid>

                <ModalAdadrinhar modalDeApadrinhamentoAberto={modalDeApadrinhamentoAberto} setModalDeApadrinhamentoAberto={setModalDeApadrinhamentoAberto} />
                <ModalVisualizarDadosDaVideira modalDeVisualizarVideiraAberto={modalDeVisualizarVideiraAberto} setModalDeVisualizarVideira={setModalDeVisualizarVideira} />

            </Grid>

            </ThemeProvider>
       
    )
}

export default function Apadrinhar(){

    return(

        <Provider store={Store}>
            <App />
        </Provider>

    )
}


function ModalAdadrinhar({modalDeApadrinhamentoAberto, setModalDeApadrinhamentoAberto}){



    const videirasSelecionadas = useSelector((state)=> state.sessoes.videirasSelecionadas)
    

    function manipularFechamento(){
        setModalDeApadrinhamentoAberto(false)
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
            open={modalDeApadrinhamentoAberto}
            onClose={manipularFechamento}

        >

            <Box sx={{...style, width: 400, height: 500}}>                   
                    <Typography variant="h6" color="black.main" sx={{textAlign:"center", mb:4}}>
                        Apadrinhar as videiras selecionadas
                    </Typography>

                    {videirasSelecionadas.map((item, pos)=>(

                        <ItemSelecionado item={item} key={pos}/>


                    ))}

                    <Button variant="contained" fullWidth  onClick={manipularFechamento}>
                        Finalizar
                    </Button>
            </Box>

            
        </Modal>
    )
}


function ModalVisualizarDadosDaVideira({modalDeVisualizarVideiraAberto, setModalDeVisualizarVideira}){



    const videirasSelecionadas = useSelector((state)=> state.sessoes.videirasSelecionadas)
    

    function manipularFechamento(){
        setModalDeVisualizarVideira(false)
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
            open={modalDeVisualizarVideiraAberto}
            onClose={manipularFechamento}

        >

            <Box sx={{...style, width: 400, height: 500}}>                   
                    <Typography variant="h6" color="black.main" sx={{textAlign:"center", mb:4}}>
                        Nome da videira
                    </Typography>

                    <Typography >
                        Apadrinhado por : Ben Fernao
                    </Typography>

                    <Typography >
                        De 12/06/2018  a 06/06/2019
                    </Typography>

                    <Typography>
                        Estado: Indisponível
                    </Typography>


                    <Button variant="contained" fullWidth  onClick={manipularFechamento}>
                        Finalizar
                    </Button>

                    <Button variant="outlined" fullWidth href="/historico" sx={{mt:2}}  onClick={manipularFechamento}>
                        Ver Historico
                    </Button>
            </Box>

            
        </Modal>
    )
}

function ItemSelecionado({item}){

    const [idPlanoSelecionado, setIdPlanoSelecionado] = React.useState(0)
    function manipularPlanoSelecionado (e){

        const idPlanoSelecionado = e.target.value
        setIdPlanoSelecionado(idPlanoSelecionado)

    }


    return(

    <Box >
        <Typography variant="body1">
            {item.nome}, {item.pos}
        </Typography>
        <FormControl fullWidth>
            <InputLabel id="labelDoSelecionadorDePlanos">Plano</InputLabel>
            <Select

            labelId="labelDoSelecionadorDePlanos"
            label="Plano"
            value={idPlanoSelecionado}
            onChange={manipularPlanoSelecionado}
            sx={{color: "#000"}}
            
            >

                <MenuItem value ={1}>Plano 1</MenuItem>
                <MenuItem value ={2}> Plano 2</MenuItem>
                <MenuItem value ={3}>Plano 3</MenuItem>

            </Select>
        </FormControl>
    </Box>
    )
}
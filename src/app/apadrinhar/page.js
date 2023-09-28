"use client"
import { BarraDeNavegacao } from "@/componentes/navbar/BarraDeNavegacao";

import {  Typography,  Grid, Box, Button , Checkbox,MenuItem,  Modal, FormControl, InputLabel, Select, ImageList} from '@mui/material';
import { green, deepOrange, grey, red } from '@mui/material/colors';
import Image from "next/image";
import * as React from "react"
import { Provider, useDispatch, useSelector,  } from "react-redux";
import { UseSelector } from "react-redux/es/hooks/useSelector";
import Store from "../../../redux/store"
import { ItensDeAutenticacao } from "@/componentes/navbar/subcomponentes/ItemDeAutenticacao";

import {degrees, PDFDocument, rgb, StandardFonts} from "pdf-lib"



import {deletarVideiraSelecionada, inserirPlanos, inserirVideiraSelecionada, alterarSessaoAtiva, mapearUmaSessao, inserirEstadosDeVideirasDeUmaSecao} from "../../../redux/reducer"
import { buscarDadosJson } from "../../../utils/fecths/post";


function  App(){

    const [modalDeApadrinhamentoAberto, setModalDeApadrinhamentoAberto] = React.useState(false)
    const [modalDeVisualizarVideiraAberto, setModalDeVisualizarVideira] = React.useState(false)
    const [dadosAdicionaisDaVideiraPatrocinada , setdadosAdicionaisDaVideiraPatrocinada] = React.useState(null)
    const [dadosBasicosDaVideira, setDadosBasicosDaVideira] = React.useState({posicao: "", secao : "", estado: ""})
    

    const todosDadosDasSessoes = useSelector((state)=> state.sessoes)
    const {sessaoAtivada, estadosDasVideirasDasSessoes, videirasSelecionadas } = todosDadosDasSessoes

    const letras = [  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    const itemsDoMapa = letras.concat(estadosDasVideirasDasSessoes[sessaoAtivada- 1])

    const dispacth = useDispatch()

    function manipularAberturaDoModalApadrinhar(){

        setModalDeApadrinhamentoAberto(true)

    }

        
    function manipularAtivacaoDeUmaSessao({secao}){

        dispacth(alterarSessaoAtiva({sessaoAtivada : secao }))

        buscarDadosJson({url: "/apadrinhar/vinhas/api", method: "POST", dados:{ secao}}).then((res)=> {

            const [resultados, options] = res
          
    
                if(resultados[0] != "erro"){

                        dispacth(inserirEstadosDeVideirasDeUmaSecao({estadosDasVideiras: resultados}))
                }else{
    
                    console.log("erro")
                }
            }).catch((erro)=>{
                console.log(erro)    
            })
    }


    React.useEffect(()=>{
    
            manipularAtivacaoDeUmaSessao({secao: 1})
    }, [])

    async function manipularVisualizacaoDeDadosDaVideira({posicao, secao, estado}){

        setModalDeVisualizarVideira(true)
        setDadosBasicosDaVideira({posicao, secao, estado})
        

        if(estado){

            const [resposta, options] = await buscarDadosJson({url: "/apadrinhar/vinhas/videiraPatrocinada/api", method:"POST", dados:{posicao, secao}})
            const nomeCompleto = resposta[0].nome + " " + resposta[0].sobrenome
            const {dataInicio, dataFinal} = resposta[1]

            const dadosDaVideira = {nomeCompleto, dataInicio, dataFinal}
            setdadosAdicionaisDaVideiraPatrocinada((_)=> dadosDaVideira)
            
            
        }else{

            setdadosAdicionaisDaVideiraPatrocinada(null)
        }

    }
    
   
    return(

            <Grid container item xs={12}  sx={{display:"flex", flexDirection:"row", gap:2}} >
                <BarraDeNavegacao>
                    <ItensDeAutenticacao />
                </BarraDeNavegacao>

                <Grid container item md={2}  sx={{display:{xs:"none", md:"flex"}, flexDirection:"column", pt:15,bgcolor: grey[200], height:"100vh", justifyContent:"start", alignItems:"center"}} >
                    {estadosDasVideirasDasSessoes.map((sessao, pos)=>(
                        <Box key={pos}>   
                            <Button variant={sessaoAtivada ==  pos + 1 ? "contained" : "text"} sx={{color:"black", my:1, color:"#000"}} onClick={()=>{
                                
                                
                                manipularAtivacaoDeUmaSessao({secao: pos + 1})
                                                           
                                }}>Sessão {pos + 1 }</Button>

                        </Box>
                    ))}
                </Grid>

                <Grid container item md={9} sx={{pt:15, display:"flex" , flexDirection:"column"}}>

                    <Grid mb={3} container item sx={{justifyContent:"flex-end"}}>
                       
                        <Button variant="contained" disabled = {(videirasSelecionadas.length == 0)} onClick={manipularAberturaDoModalApadrinhar}>Apadrinhar ({videirasSelecionadas.length})</Button>
                    </Grid>


                    <Grid container item sx={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>  


                    <ImageList cols={26} rowHeight={40} sx={{width:"100%", height:"100%"}}>

                        {itemsDoMapa.map((elemento, pos)=>{

                            if(typeof elemento == "string"){

                                return <Typography variant="body1" textAlign="center">{elemento}</Typography>
                            }else{

                            const itemSelecionado = videirasSelecionadas.find((item=> item.pos == elemento.posicao && item.secao == sessaoAtivada)) ? true : false
                            
                            return( 
                            
                            <Box sx={{position:"relative", width: 42, height:40}} key={pos} >   
                                <Image width={40} height={40} src="/img4.jpg" onClick={()=>{manipularVisualizacaoDeDadosDaVideira({posicao:elemento.posicao, secao: elemento.secao, estado: elemento.estaPatrocinado})}} />

                                <div style={{width:"10px", height:"10px", position: "absolute", bottom: 0, right:0, backgroundColor:elemento.estaPatrocinado ? "red" : "green", borderRadius: "10px" }} >
                                    
                                </div>
                                <input type="checkbox" style={{position: "absolute", top: 0, right:0 }}  checked={itemSelecionado}    onClick={(e)=>{ 


                                if(e.target.checked){
        
                                    dispacth(inserirVideiraSelecionada({videiraSelecionada: {pos: elemento.posicao, secao: elemento.secao}}))
                                    

                                }else{
                                    
                                    dispacth(deletarVideiraSelecionada({videiraAExcluir: {pos: elemento.posicao, secao: elemento.secao}}))
                                }
                            }}
                                     
                            />
                            </Box>
                            )}
                           })}
                    </ImageList>
                           
                    </Grid>
                </Grid>

                <ModalAdadrinhar modalDeApadrinhamentoAberto={modalDeApadrinhamentoAberto} setModalDeApadrinhamentoAberto={setModalDeApadrinhamentoAberto} />
                <ModalVisualizarDadosDaVideira modalDeVisualizarVideiraAberto={modalDeVisualizarVideiraAberto} setModalDeVisualizarVideira={setModalDeVisualizarVideira} dadosBasicosDaVideira={dadosBasicosDaVideira} dadosVideiraPatrocinada={dadosAdicionaisDaVideiraPatrocinada} />

            </Grid>

       
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


export function ModalCertificado({modalDeCertificadoAberto, setModalDeCertificadoAberto, nome}){


    function manipularFechamento(){
        setModalDeCertificadoAberto(false)
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
            open={modalDeCertificadoAberto}
            onClose={manipularFechamento}
        >

            <Box sx={{...style, width: 600, height: 300}}>                   

                    <Typography>
                       {nome}
                    </Typography>

                    <Box sx={{width:"100%", height:"100%"}}>

                        <iframe id="mypdf">
                        </iframe>

                    </Box>


            </Box>
   
        </Modal>
    )
}


function ModalVisualizarDadosDaVideira({modalDeVisualizarVideiraAberto, setModalDeVisualizarVideira, dadosBasicosDaVideira, dadosVideiraPatrocinada }){



    const videirasSelecionadas = useSelector((state)=> state.sessoes.videirasSelecionadas)
    const {posicao, secao, estado} = dadosBasicosDaVideira
    

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
                        Informações da videira
                    </Typography>


                    <Box sx={{width:"100%", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center", mb:2}}>
                        <Image src="/vinha.jpeg" alt="videira da filha boa"  width={200} height={200} style={{maxWidth:"100%"}}/>
                    </Box> 

                    <Typography >
                        Secao:{secao}
                    </Typography>


                    <Typography >
                        Posicao:{posicao}
                    </Typography>

                    <Typography  color={estado ? red[500] : green[500]}>
                        Estado: {estado ?  "Apadrinhado" : "Disponível para o apadrinhamento"}
                    </Typography>

                    { (dadosVideiraPatrocinada != null)  &&
                        (<Box> 
                            <Typography >
                                Apadrinhado por : {dadosVideiraPatrocinada.nomeCompleto}
                            </Typography>

                            <Typography >
                                {dadosVideiraPatrocinada.dataInicio}  a {dadosVideiraPatrocinada.dataFinal}
                            </Typography>
                        </Box>)
                    }




                    <Button variant="contained" fullWidth  onClick={manipularFechamento}>
                        Finalizar
                    </Button>

                    <Button variant="outlined" fullWidth href={`/historico/${secao}/${posicao}`} sx={{mt:2}}  onClick={manipularFechamento}>
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
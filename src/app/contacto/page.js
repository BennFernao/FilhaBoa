"use client"

import { Footer } from "@/componentes/footers/footer1";
import HeaderUm from "@/componentes/headers/header1";
import { BarraDeNavegacao } from "@/componentes/navbar/BarraDeNavegacao";
import { Send } from "@mui/icons-material";
import { Button, Grid, TextField, Box, Typography, Alert } from "@mui/material";

import { green, deepOrange, grey } from '@mui/material/colors';
import { useState } from "react";
import { buscarDadosJson } from "../../../utils/fecths/post";






export default function Contacto(){

    const [nome, setNome] = useState(null)
    const [email, setEmail] = useState(null)
    const [assunto, setAssunto] = useState(null)
    const [mensagem, setMensagem] = useState(null)

    const [dadosParaAlerta, setDadosParaAlerta] = useState({estado:false, mensagem:"", tipo: ""})


    async function manipularEnvioDeDados(){

        if(nome && email && assunto && mensagem){

            const [resultados, _ ] = await buscarDadosJson({url: "/contacto/api", dados :{nome, email, assunto, mensagem}, method:"POST"})

            if(resultados[0] == "sucesso"){

                const novosDadosDaAlerta = {
                    estado:true,
                    mensagem:"Mensagem enviada com sucesso",
                    tipo: "success"
                }

                setNome("")
                setAssunto("")
                setMensagem("")
                setEmail("")
                                
                setDadosParaAlerta(novosDadosDaAlerta)

            }else{

                
                const novosDadosDaAlerta = {
                    estado:true,
                    mensagem:"Erro ao enviar a mensagem, tente novamente",
                    tipo: "error"
                }

                setDadosParaAlerta(novosDadosDaAlerta)
            }


        }else{

            const novosDadosDaAlerta = {
                estado:true,
                 mensagem:"Preencha todos os campos",
                 tipo: "error"
            }

            setDadosParaAlerta(novosDadosDaAlerta)

            setTimeout(()=>{

                const novosDadosDaAlerta = {estado:false, mensagem:"", tipo: ""}
                setDadosParaAlerta(novosDadosDaAlerta)         
            }, 6000)
        }    
    }



    return(


        <Grid container sx={{mt:10}}>
            <BarraDeNavegacao />

            
            <Grid container item sx={{height:700, justifyContent:"center", alignItems:"center"}}>

                <Box sx={{backgroundColor: "#EBF7EB", p:4, borderRadius:1}}>

                <Typography variant="h4" textAlign="center" sx={{fontWeight:"700", mb:2}}>Entre em Contacto</Typography>
                
                <Box sx={{width:400}}>
                    <TextField label="Seu nome" value={nome} variant="outlined" fullWidth sx={{my:1}} onChange={(e)=>{setNome(e.target.value)}}/>
                    <TextField label="Email" variant="outlined" value={email} fullWidth sx={{my:1}} onChange={(e)=>{setEmail(e.target.value)}} />
                    <TextField label="Assunto" variant="outlined" value={assunto} fullWidth sx={{my:1}} onChange={(e)=>{setAssunto(e.target.value)}}/>
                    <TextField label="Mensagem" multiline rows={8}  value={mensagem} variant="outlined" fullWidth sx={{my:1}} onChange={(e)=>{setMensagem(e.target.value)}}/>


                    <Button fullWidth variant="contained" endIcon={<Send />} onClick={manipularEnvioDeDados}>Enviar</Button>
                    {dadosParaAlerta.estado && 
                        <Alert severity={dadosParaAlerta.tipo} >
                            {dadosParaAlerta.mensagem}

                        </Alert >
                        }
                </Box>
                </Box>

            </Grid>


   

        </Grid>
  
    )
}
"use client"
import HeaderUm from "@/componentes/headers/header1";
import { BarraDeNavegacao } from "@/componentes/navbar/BarraDeNavegacao";
import { Grid, Typography, Box, Container, Stack } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, deepOrange, grey } from '@mui/material/colors';
import { Footer } from "@/componentes/footers/footer1";



const theme = createTheme({
    palette:{
        primary :{main: green[900]} ,
        secondary:{main : deepOrange[900]},
        white : {main: "#fff"},
        black : {main : "#0D0D0D", contrastText :"#212121"},
        subtitle : {main : grey[700]}
  
    }
  })


export default function HistoricoDaVideira(){

    const dadosParaOHeader = {
       titulo:"Historico da videira 1",
        descricao: "Conheça os detalhes da videira e sabia quando e por quem foi apadrinhado"
    }

    return (

        <ThemeProvider theme={theme}> 
        <Grid container>

            <BarraDeNavegacao />
            <HeaderUm {...dadosParaOHeader}/>

            <Grid container item  sx={{mt:10, px:10, bgcolor:"#f7f7f7", position:"relative"}}>

                <Stack sx={{backgroundColor:"#fff", flexDirection:"row", justifyContent:"space-between", width:"100%", p:2, position:"relative", zIndex:"1000"}}>
                    <ItemDoHistorico titulo="Apadrinhado Por" descricao="Ben Fernao"/>

                    <ItemDoHistorico titulo="Plano" descricao="Basico"/>
                    <ItemDoHistorico titulo="Data" descricao="De 12/09/2018 a 06/06/2019" />

                </Stack>

            </Grid>

         


        </Grid>
        </ThemeProvider>
    )
}

function ItemDoHistorico ({titulo, descricao}){

    return(

        <Box sx={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <Typography sx={{color:grey[700], fontWeight:"600"}}>
                {titulo}
            </Typography>
            <Typography  sx={{fontWeight:"600", color:grey[900]}} >
                {descricao}
            </Typography>
        </Box>


    )
}
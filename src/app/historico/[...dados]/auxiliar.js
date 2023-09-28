"use client"
import HeaderUm from "@/componentes/headers/header1";
import { BarraDeNavegacao } from "@/componentes/navbar/BarraDeNavegacao";
import { Grid, Typography, Box, Container, Stack } from "@mui/material";
import { green, deepOrange, grey } from '@mui/material/colors';
import { Footer } from "@/componentes/footers/footer1";



export default function HistoricoDaVideira({dadosDosHistoricos, dadosDaVideira}){

    const {historicos, patrocinadores} = dadosDosHistoricos
    const {secao, posicao} = dadosDaVideira
    

    const dadosParaOHeader = {
       titulo: `Historico da videira ${secao}-${posicao} `,
        descricao: "Conheça os detalhes da videira e sabia quando e por quem foi apadrinhado"
    }


    

    return (

      
        <Grid container>

            <BarraDeNavegacao />
            <HeaderUm {...dadosParaOHeader}/>
        
            <Grid container item  sx={{mt:10, px:10, bgcolor:"#f7f7f7", position:"relative"}}>

                {patrocinadores.lenght == 0 ?  (patrocinadores.map((patrocinador, pos)=>(

                    <Stack sx={{backgroundColor:"#fff", flexDirection:"row", justifyContent:"space-between", width:"100%", p:2, position:"relative", zIndex:"1000"}}>
                        <ItemDoHistorico titulo="Apadrinhado Por" descricao={patrocinador}/>
                        
                        <ItemDoHistorico titulo="Data" descricao={` ${historicos[pos].dataInicio} a ${historicos[pos].dataFinal}`} />
                    </Stack>

                    )))
                    : <Box  p={2}> 
                        <Typography variant="h5" sx={{fontWeight:"600", color:grey[900]}}>
                            Esta videira nunca foi apadrinhada
                        </Typography>
                    </Box>
                } 

            </Grid>

        </Grid>
      
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
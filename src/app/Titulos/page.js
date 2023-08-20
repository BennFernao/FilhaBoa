import { Link } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import React from "react";


function HeadersUm({titulo, subtitulo}){
    const espacos = {
        espacoEntreElementos : 3,
        espacoEntreComponentes: 6
    }

    return(
   
        <Grid container  sx={{justifyContent:"center", alignItems:"center", marginBottom: espacos.espacoEntreComponentes}}>
            <Typography variant="h2" sx={{marginBottom: espacos.espacoEntreElementos}}>{titulo}</Typography>
            <Typography variant="body1">{subtitulo}</Typography>            
        </Grid>


    )
}

function HeadersDois({titulo, textoParaAcao}){
    const espacos = {
        espacoEntreElementos : 3,
        espacoEntreComponentes: 6
    }

    return(
  
        <Grid container  sx={{display:"flex", direction: "row" ,justifyContent:"space-between", alignItems:"center", marginBottom: espacos.espacoEntreComponentes}}>
            <Typography variant="h2" sx={{marginBottom: espacos.espacoEntreElementos}}>{titulo}</Typography>
            <Button size="large" endIcon={<Link />}>{textoParaAcao}</Button>            
        </Grid>
    )
}



export default function App(){

    const itemUm = {
        titulo : "Olá mundo, podes ser meu se agora",
        subtitulo: "O que podemos fazer neste momento é mais incrível do que podes imaginar e isso não seria possível sem que tu viesses aqui nos visitar"
    }

    const itemDois = {
        titulo : "Olá mundo, podes ser meu se agora",
        subtitulo: "Ver Mais"
    }

    return(
        <Grid>
            
            <HeadersUm titulo={itemUm.titulo} subtitulo={itemUm.subtitulo} />
            <HeadersDois titulo={itemDois.titulo} textoParaAcao={itemDois.subtitulo} />


        </Grid>

    )
}
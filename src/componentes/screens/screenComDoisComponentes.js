import { ArrowForward, NextPlan } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

const { Grid,  Typography, Box, Button } = require("@mui/material");


export function ScreenComDoisComponentes({ComponenteUm, ComponenteDois, paddingHorizontal, paddingVertical, bgColor, primeiroElemento}){
    return(
        <Grid container item xs={12} sx={{ display:"flex", flexDirection:"row", flexWrap: "wrap", justifyContent: "space-between",mb:20,  backgroundColor: bgColor ? bgColor:  "#f7f7f7"}} >
            <Grid item xs ={12} md={6} >
                {ComponenteUm}
            </Grid>

            <Grid container item xs={12} md={6} sx={{display:"flex", justifyContent:"flex-end"}}  >
                {ComponenteDois}
            </Grid>
        </Grid>
    )
}







export function PequenaDescricaoTextual({titulo, subtitulo,descricao ,textoParaAcaoUm,  aviso }){

    return (  
        <Box px={5} mt={20} >

            <Typography variant="h6" sx={{fontWeight:"bold", color:grey[700]}}>
                {subtitulo}
            </Typography>

            <Typography variant="h2" color="black.main" gutterBottom sx={{fontWeight:"bold"}}>
                {titulo}
            </Typography>

            <Typography variant="body1" sx={{mt:4, fontWeight:"bold", color:grey[600]}}>
                {descricao}
            </Typography>

            {textoParaAcaoUm && <Box sx={{mt:4, }}>
                <Button  variant="contained" size="large"  sx={{mr:4, color:"white", borderRadius:0, width:"300px", }} endIcon={<ArrowForward />}>{textoParaAcaoUm}</Button>
            </Box>}

            {
            aviso && <Box sx={{mt:2}}>
            <Typography variant="subtitle2" sx={{fontWeight:"bold", color:grey[600]}} >
                {aviso}
            </Typography>
            </Box>
            }

        </Box>
    )
}


export function PequenaDescricaoTextualMenor({titulo, subtitulo,descricao, textoParaAcaoUm}){

    return (  
        <Box pt={2} pl={1}>

            <Typography variant="body1" sx={{mt:2,fontWeight:"bold", color:grey[700]}}>
                {subtitulo}
            </Typography>

            <Typography variant="h3" color="black.main" gutterBottom sx={{fontWeight:"bold"}}>
                {titulo}
            </Typography>

            <Typography variant="body1" sx={{mt:4, color:grey[700]}}>
                {descricao}
            </Typography>

            {textoParaAcaoUm && <Box sx={{mt:4}}>
                <Button variant="outlined"  size="large"  sx={{mr:4, color:"white"}} endIcon={<ArrowForward />}>{textoParaAcaoUm}</Button>
              
            </Box>}

        </Box>
    )
}


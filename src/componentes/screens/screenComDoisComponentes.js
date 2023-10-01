import { ArrowForward, NextPlan } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import Image from "next/image";

const { Grid,  Typography, Box, Button, Stack } = require("@mui/material");


export function ScreenComDoisComponentes({ComponenteUm, ComponenteDois, paddingHorizontal, paddingVertical, bgColor, primeiroElemento}){
    return(
        <Grid container item xs={12} sx={{ display:"flex", flexDirection:"row", flexWrap: "wrap", justifyContent: "space-between",mb:20,  backgroundColor: bgColor ? bgColor:  "#f7f7f7"}} >
            <Grid item xs ={12} md={6}  >
                {ComponenteUm}
            </Grid>

            <Grid container item xs={12} md={6} sx={{display:"flex", justifyContent:"flex-end"}}  >
                {ComponenteDois}
            </Grid>
        </Grid>
    )
}







export function PequenaDescricaoTextual({titulo, subtitulo,descricao ,textoParaAcaoUm,  aviso , linkParaOAviso, linkParaAcao}){

    return ( 
        <>  
        <Box px={5} mt={30} display={{xs: "none", md:"block"}} >

            <Box>     
                <div style={{backgroundColor: "#000", width: "250px", padding:"10px", borderRadius:"10px", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                    <Typography variant="body1" sx={{fontWeight:"bold", color:grey[100], mx:1}}>
                        {subtitulo}
                    </Typography>
                    <Image width={25} height={25} src="/waitIcon.svg" alt="imagem de espera" />
                </div>
                
                <Box sx={{display:"flex", flexDirection:"row", mt:1}}>
                    <Typography variant="h3"  gutterBottom sx={{fontWeight:"bold",my:0, color:grey[300]}}>
                        Torne se um 
                    </Typography>

                    <Typography variant="h3"  gutterBottom sx={{fontWeight:"bold", color:"#54AD5B",my:0,  mx:2}}>
                        Padrinho 
                    </Typography>
                </Box>

            </Box>

            <Typography variant="body1" sx={{mt:4, color:grey[400]}}>
                {descricao}
            </Typography>

            {textoParaAcaoUm && <Box sx={{mt:4}}>
                <Button  variant="outlined" size="large" href={linkParaAcao}  sx={{mr:4, color:"#54AD5B", borderRadius:3, width:"200px", }} endIcon={<ArrowForward />}>{textoParaAcaoUm}</Button>
            </Box>}

        </Box>

        <Box px={5} mt={10} display={{xs: "block", md:"none"}} >

                <Box>     
                    <div style={{backgroundColor: "#000", width: "250px", padding:"10px", borderRadius:"10px", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                        <Typography variant="body1" sx={{fontWeight:"bold", color:grey[100], mx:1}}>
                            {subtitulo}
                        </Typography>
                        <Image width={25} height={25} src="/waitIcon.svg" alt="imagem de espera" />
                    </div>
                    
                    <Box sx={{display:"flex", flexDirection:"row", mt:1}}>
                        <Typography variant="h3"  gutterBottom sx={{fontWeight:"bold",my:0, color:grey[300]}}>
                            Torne se um 
                        </Typography>

                        <Typography variant="h3"  gutterBottom sx={{fontWeight:"bold", color:"#54AD5B",my:0,  mx:2}}>
                            Padrinho 
                        </Typography>
                    </Box>

                </Box>

                <Typography variant="body1" sx={{mt:4, color:grey[400]}}>
                    {descricao}
                </Typography>

                {textoParaAcaoUm && <Box sx={{mt:4}}>
                    <Button  variant="outlined" size="large" href={linkParaAcao}  sx={{mr:4, color:"#54AD5B", borderRadius:3, width:"200px", }} endIcon={<ArrowForward />}>{textoParaAcaoUm}</Button>
                </Box>}

        </Box>

        

        </> 
    )
}


export function PequenaDescricaoTextualMenor({titulo, subtitulo,descricao, textoParaAcaoUm, linkParaAcao}){

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
                <Button variant="outlined"  size="large" href={linkParaAcao}  sx={{mr:4, color:"white"}} endIcon={<ArrowForward />}>{textoParaAcaoUm}</Button>
              
            </Box>
            }

        </Box>
    )
}


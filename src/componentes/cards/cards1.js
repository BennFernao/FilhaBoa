import { Grid, Typography, Box, Button } from "@mui/material"
import Image from "next/image"
import { Fade, Slide } from "react-reveal"


export function Card1({srcImagem, textoParaAcao, titulo, linkParaAcao}){

    return(

    <Grid item sx={{position: "relative", p:2}} xs={12} md={4}>
         <Slide right >
            <Typography variant="h6" color="subtitle.main" sx={{fontWeight:"bold"}}>{titulo}</Typography>
        
            <Image width={640} height={490} alt="apple" src={srcImagem} style={{maxWidth:"100%", borderRadius: "10px"}}/>
                        {textoParaAcao &&   <Box sx={{width:400, position:"relative", display:"flex", justifyContent:"center", alignItems:"center"}} >
                        <Button variant="contained" sx={{display:"block", position: "absolute", bottom: "20px",}} href={linkParaAcao}>
                            {textoParaAcao}
                        </Button>
                        </Box>}
        </Slide>
    </Grid>
    )
}
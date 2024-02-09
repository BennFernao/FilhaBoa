import { ContainerParaDoisComponentes } from "@/app/componentesPosteriores/containerParaDoisElementos";
import { Imagem } from "@/app/componentesPosteriores/Imagem";
import { Box, Typography, Button } from "@mui/material";
import { grey } from "@mui/material/colors";
import { ArrowForward } from "@mui/icons-material";
import Image from "next/image";


export default function SegundoComponente(){

    const itemsParaOComponenteDois = {

        titulo : "Felizes por plantar ",
        descricao : "Fazer parte da filha boa tem transmitido uma sensação de satisfação para diversos participantes, promovendo um senso de contribuição e apoio ao universo, Fazer parte da filha boa tem transmitido uma sensação de satisfação para diversos participantes, promovendo um senso de contribuição e apoio ao universo  ",
        subtitulo : "O universo agradece",
        textoParaAcaoUm : "Apadrinhar",
        linkParaAcao :"/apadrinhar",
        aviso : "Ao continuares , você aceita a nossa politica e termos de privacidade",
        linkParaOAviso : "/politicaDePrivacidade"
      }
    
      const Componente1 = ()=>{

        return ( 
            <>  
                <Box px={5} mt={0} display={{xs: "none", md:"block"}} >
    
                    <Box>     
                        <div style={{backgroundColor: "#000", width: "250px", padding:"10px", borderRadius:"10px", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                            <Typography variant="body1" sx={{fontWeight:"bold", color:grey[100], mx:1}}>
                                {itemsParaOComponenteDois.subtitulo}
                            </Typography>
                            <Image width={25} height={25} src="/waitIcon.svg" alt="imagem de espera" />
                        </div>
                        
                        <Box sx={{display:"flex", flexDirection:"row", flexWrap: "wrap", mt:1}}>
                            <Typography variant="h3"  gutterBottom sx={{fontWeight:"bold",my:0, color:grey[300], mx:2}}>
                                Todos ajudando o 
                            </Typography>
                            <Typography variant="h3"  gutterBottom sx={{fontWeight:"bold",my:0, color:"#54AD5B"}}>
                                Mundo
                            </Typography>
    
                        </Box>
    
                    </Box>
    
                    <Typography variant="body1" sx={{mt:4, color:grey[400]}}>
                        {itemsParaOComponenteDois.descricao}
                    </Typography>
    
                    {itemsParaOComponenteDois.textoParaAcaoUm && <Box sx={{mt:4}}>
                        <Button  variant="outlined" size="large" href={itemsParaOComponenteDois.linkParaAcao}  sx={{mr:4, color:"#54AD5B", borderRadius:3, width:"200px", }} endIcon={<ArrowForward />}>{itemsParaOComponenteDois.textoParaAcaoUm}</Button>
                    </Box>}
    
                </Box>
    
                <Box px={5} mt={10} display={{xs: "block", md:"none"}} >
    
                        <Box>     
                            <div style={{backgroundColor: "#000", width: "250px", padding:"10px", borderRadius:"10px", display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                                <Typography variant="body1" sx={{fontWeight:"bold", color:grey[100], mx:1}}>
                                    {itemsParaOComponenteDois.subtitulo}
                                </Typography>
                                <Image width={25} height={25} src="/waitIcon.svg" alt="imagem de espera" />
                            </div>
                            
                            <Box sx={{ mt:1}}>
                                <Typography variant="h3"  gutterBottom sx={{fontWeight:"bold",my:0, color:grey[300]}}>
                                    Todos ajudando o  
                                </Typography>
                                <Typography variant="h3"  gutterBottom sx={{fontWeight:"bold", color:"#54AD5B",my:0}}>
                                    Mundo 
                                </Typography>
    
                            </Box>
    
                        </Box>
    
                        <Typography variant="body1" sx={{mt:4, color:grey[400]}}>
                            {itemsParaOComponenteDois.descricao}
                        </Typography>
    
                        {itemsParaOComponenteDois.textoParaAcaoUm && <Box sx={{mt:4}}>
                            <Button  variant="outlined" size="large" href={itemsParaOComponenteDois.linkParaAcao}  sx={{mr:4, color:"#54AD5B", borderRadius:3, width:"200px", }} endIcon={<ArrowForward />}>{itemsParaOComponenteDois.textoParaAcaoUm}</Button>
                        </Box>}
    
                </Box>
            </> 
        )
    }

      const Componente2 = <Imagem src={"/img21.jpg"} />

      return(
        <ContainerParaDoisComponentes Componente1={Componente2} Componente2={< Componente1 />} opcoes={{bg:"#0D0D0D", py:2, diretion:  "row" }} />
      )
}

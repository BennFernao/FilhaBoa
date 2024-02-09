import { Box, Typography, Button, Grid } from "@mui/material"
import { grey } from "@mui/material/colors"
import Image from "next/image"
import { Fade } from "react-reveal"


export default function PlanoDeApadrinhamento({nomeDoPlano, valorPresente, valorAnterior, mensalidade}){

    return(

        <Grid xs={12} lg={4} p={2}>  
        <Fade>
          <Box sx={{width:"100%",  backgroundColor: grey[900],boxSizing:"border-box", p:5}}>

            <Typography color={grey[500]} sx={{fontWeight:700}} variant="body1">Planos Filha Boa</Typography>
            <Typography color="white.main" variant="h5" sx={{fontWeight:"bold", my:2}}>Plano {nomeDoPlano}</Typography>
            

            <Typography color={grey[500]} variant="body1">
                Conheça alguns dos dados mais importantes a saber sobre o plano de pagamento plano de pagamento {nomeDoPlano}
            </Typography>

            <Box sx={{display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
              <Image src="/check.svg"  width={25} height={25}/>
              <Typography color={grey[200]} variant='body1' my={2} >
                Apartir de {valorPresente}$
              </Typography>

            </Box>


            <Box sx={{display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
                <Image src="/wrong.svg"  width={25} height={25}/>

              <Typography color={grey[200]} variant='body1' my={2} sx={{textDecoration: "line-through"}} >
                Apartir de {valorAnterior}$
              </Typography>

            </Box>
          

            <Box sx={{display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
                <Image src="/check.svg"  width={25} height={25}/>
                <Typography color={grey[200]} variant='body1' my={2}>
                  Por {mensalidade} meses
                </Typography>
            </Box>


            <Box sx={{display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
                <Image src="/check.svg"  width={25} height={25}/>
                <Typography color={grey[200]} variant='body1' my={2}>
                  Cancelamento automático 
                </Typography>
            </Box>



            <Box sx={{width:"100%", display:"flex", flexDirection:"column", mt:8}}>

              <Button variant="contained"   sx={{position:"block"}} href="/apadrinhar">
                Aderir
              </Button>



            </Box>



          </Box>
        </Fade>
      </Grid>
    )
}
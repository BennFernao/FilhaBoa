import { Box, Typography, Button, Grid } from "@mui/material"
import { grey } from "@mui/material/colors"


export default function PlanoDeApadrinhamento(){

    return(

        <Grid xs={12} lg={4} p={2}>  
        <Box sx={{width:"100%", height:600, backgroundColor: grey[900],boxSizing:"border-box", p:5}}>

          <Typography color={grey[500]} sx={{fontWeight:700}} variant="body1">Planos Filha Boa</Typography>
          <Typography color="white.main" variant="h5" sx={{fontWeight:"bold", my:2}}>Plano Básico</Typography>
          

          <Typography color={grey[500]} variant="body1">
          É importante fornecer informações claras e transparentes sobre os detalhes do plano para garantir que o cliente esteja ciente do que está adquirindo. Aqui estão alguns dos dados mais importantes que alguém pode querer saber sobre um plano de pagamento 
          </Typography>

          <Typography color={grey[200]} variant='body1' my={2} >
            Apartir de 1$
          </Typography>
          <Typography color={grey[200]} variant='body1' my={2} sx={{textDecoration: "line-through"}} >
            Apartir de 1$
          </Typography>


          <Typography color={grey[200]} variant='body1' my={2}>
            Por 3 meses
          </Typography>

          <Typography color={grey[200]} variant='body1' my={2}>
            Cancelamento automático 
          </Typography>



          <Box sx={{width:"100%", display:"flex", flexDirection:"column", mt:8}}>

            <Button variant="contained"   sx={{position:"block"}} href="/apadrinhar">
              Aderir
            </Button>



          </Box>



        </Box>
      </Grid>
    )
}
import { Grid } from "@mui/material"



export function ContainerParaDoisComponentes({Componente1, Componente2, opcoes}){

    return(
  
      <Grid container   sx={{ display:"flex", flexDirection: opcoes.diretion, flexWrap: "wrap", justifyContent: "space-between", bgcolor: opcoes.bg ? opcoes.bg : "inherit"}} >
  
              <Grid container item xs={12} md={6} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}  >
                {Componente1}   
              </Grid>
  
              <Grid item xs ={12} md={6} >
                {Componente2}           
              </Grid>      
      </Grid>
    )
  }
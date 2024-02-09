
import { Grid, Typography, Stack, Button , Box} from "@mui/material"
import { Card1 } from "../cards/cards1"
import BlogCard from "../cards/cards2"
import { Slide } from "react-reveal"




export function ScreenTituloMaisCards ({titulo, dadosDosCards}){
    return (
        <Grid container direction="column"  sx={{px:2, backgroundColor: "#ffffff"}}>

            <Typography variant='h3'  sx={{fontWeight:"bold", color: "#226027"}}>
                {titulo}
            </Typography>

            <Grid container item  direction="row" sx={{marginTop:1}} >

                <Grid  container item  direction="row" >   
                    {dadosDosCards.map((dadosDoCard, pos)=>(
                        
                            <Card1 {...dadosDoCard} />
                       
                    ))}
                </Grid>
            </Grid>

        </Grid>
    )
}

export function ScreenTituloMaisCardsDois({titulo, dadosDosCards, textoLerMais, pagina = false}){

    return (

        <Grid container item sx={{flexDirection:"column",   px:6, mt:pagina ? 10 : 0}}>
            {titulo &&  
            <Box sx={{display: "flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", mb:5}}>
                <Typography variant="h3" sx={{fontWeight:"bold", color:"#226027"}}>
                    {titulo}
                </Typography>

                <Button href="/blog">
                    Mais Artigos
                </Button>

            </Box>}

            <Grid  container item sx={{display:"flex", flexDirection : "row"}}>
                {
                    dadosDosCards.map((dado, pos)=>(
                        <Grid item xs={12} md={6} lg={4} p={2}> 
                            <Slide right>
                                <BlogCard {...dado} />
                            </Slide>
                        </Grid>
                    ))
                }
            </Grid>
        </Grid>
    )
}
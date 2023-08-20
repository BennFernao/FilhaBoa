import { MoreHoriz, MoreVert, Person } from "@mui/icons-material"
import { Grid, Typography, Box, Button, Container, Icon, IconButton } from "@mui/material"
import Image from "next/image"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function Home() {
  return (

    <Grid container spacing={2} sx={{padding:6}}>


        {
          // Inicio  primeiro elemento
        }

        <Grid container item xs={12} md={6} sx={{padding:4}}>
          <Container sx={{paddingTop:6}}>
            <Typography variant="h3" gutterBottom sx={{fontWeight:"bold"}}>
              Primeiro teste, eu estou de volta ao jogo bro
            </Typography>

            <Typography variant="body1" sx={{mt:4}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam
            </Typography>

            <Box sx={{mt:4}}>
                <Button  variant="contained" size="large"  sx={{mr:4}}>Apadrinhar</Button>
                <Button variant="outlined" size="large" >Saber mais</Button>
            </Box>

            <Box sx={{mt:2}}>
              <Typography variant="caption" >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quibusdam
              </Typography>
            </Box>

          </Container>
        </Grid>

        <Grid container item xs={12} md={6} sx={{padding:4}}>
          
          <Image src="/imagemPrincipal.png" width={500} height={450} />

        </Grid>


        {
          // Inicio  Segundo elemento
        }

        <Grid container item xs={12} md={12} sx={{padding:4}}  >

          <Box sx={{display: "flex" ,flexDirection:"column" , justifyContent:"center" , alignItems: "center", width: "100%", }}>
            <Typography variant="h5"> O diferencial</Typography>
            <Typography variant="h3" gutterBottom sx={{fontWeight:"bold"}}>O que temos de diferente</Typography>
          </Box>

          
        </Grid>

        <Grid container item xs={12} md={12} sx={{padding:4}} spacing={8} >

          <Grid item xs={4} md={4} >
            <Box sx={{display: "flex" ,flexDirection:"row" , justifyContent:"start" , alignItems: "start", width: "100%", }}s>
              <Icon sx={{mr:1}}>
                <Person />
              </Icon>
              <Box>
                  <Typography variant="h6">   Rapidez </Typography>
                  <Typography variant="body1"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam
                </Typography>

                <Button>Saber mais</Button>
                
              </Box>
            </Box>

          </Grid>

          <Grid item xs={4} md={4} >
            <Box sx={{display: "flex" ,flexDirection:"row" , justifyContent:"start" , alignItems: "start", width: "100%", }}s>
              <Icon sx={{mr:1}}>
                <Person />
              </Icon>
              <Box>
                  <Typography variant="h6">   Rapidez </Typography>
                  <Typography variant="body1"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam
                </Typography>

                <Button>Saber mais</Button>
                
              </Box>
            </Box>

          </Grid>

          <Grid item xs={4} md={4} >
            <Box sx={{display: "flex" ,flexDirection:"row" , justifyContent:"start" , alignItems: "start", width: "100%", }}s>
              <Icon sx={{mr:1}}>
                <Person />
              </Icon>
              <Box>
                  <Typography variant="h6">   Rapidez </Typography>
                  <Typography variant="body1"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam
                </Typography>

                <Button>Saber mais</Button>
                
              </Box>
            </Box>

          </Grid>

        </Grid>


        {
          // Inicio  terceiro elemento
        }

      <Grid container item xs={12} md={12} sx={{padding:4}} justifyContent="space-between"  >

        <Box sx={{display: "flex" ,flexDirection:"column" , justifyContent:"start" , alignItems: "start" }}>
          <Typography variant="h5"> O diferencial</Typography>
          <Typography variant="h3" gutterBottom sx={{fontWeight:"bold"}}>O que temos de diferente</Typography>
        </Box>

        <IconButton>
          <Typography>Ler Mais </Typography>
          <Icon>
            <MoreVert />
          </Icon>
        </IconButton>


      </Grid>

      <Grid container item xs={12} md={12} sx={{padding:4, flexWrap: "wrap"}}  >

        <Box>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/imagemPrincipal.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>


            </CardContent>

            <Button>Ler Sobre</Button>
          </CardActionArea>
        </Card>
       </Box>






      </Grid>
      


        {
          // Inicio  Quarto elemento
        }







    </Grid>

  )
}

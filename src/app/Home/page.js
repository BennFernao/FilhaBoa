"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { DragIndicator, Language, Person, Speed } from '@mui/icons-material';
import { Icon, Stack, ThemeProvider, createTheme } from '@mui/material';
import { green, deepOrange,grey } from '@mui/material/colors';
import {Grid} from '@mui/material'
import Image from 'next/image';





import { ScreenComDoisComponentes, PequenaDescricaoTextual } from '@/componentes/screens/screenComDoisComponentes';

import { Card1 } from '@/componentes/cards/cards1';

import { Footer } from '@/componentes/footers/footer1';
import BlogCard from '@/componentes/cards/cards2';

function ResponsiveAppBar() {

  const theme = createTheme({
    palette:{
        primary :{main: green[900]} ,
        secondary:{main : deepOrange[900]},
        white : {main: "#fff"},
        black : {main : grey[900], contrastText :"#212121"}
    }
  })

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  // screen 1
  const itemsParaOComponenteUm ={
    titulo : "Primeiro teste, eu estou de volta ao jogo bro",
    subtitulo : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam",
    textoParaAcaoUm : "Apadrinhar",
    textoParaAcaoDois : "Saiba mais",
    aviso : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam"
  }
  const componenteUmDoScreenUm = <PequenaDescricaoTextual {...itemsParaOComponenteUm} />
  const ComponenteDoisScreenUm = ()=>( 
    <Box p={0} m={0}>
         <Image width={640} height={450}  src="/imgP.jpg" />
    </Box>
  ) 


  // screen dois

  const dadosDosCards = [{
    srcImagem : "/img3.jpg",
    textoParaAcao : "Saber mais",
    titulo : "Plante com responsabilidade" 
  },{
    srcImagem : "/img3.jpg",
    textoParaAcao : "Saber mais",
    titulo : "Plante com responsabilidade" 
  },{
    srcImagem : "/img3.jpg",
    textoParaAcao : "Saber mais",
    titulo : "Plante com responsabilidade" 
  }

]

// Dados dos posts

    const dadosDosPosts = [
        {
            autor: "Filha boa",
            titulo: "OS encargos que suportamos",
            srcImagem : "/img4.jpg",
            
        },        {
            autor: "Filha boa",
            titulo: "OS encargos que suportamos",
            srcImagem : "/img4.jpg",
            
        },        {
            autor: "Filha boa",
            titulo: "OS encargos que suportamos",
            srcImagem : "/img4.jpg",
            
        }
    ]

//


  return (

    <ThemeProvider theme={theme}>     


        <Grid container direction="column" spacing={2} sx={{padding:6, marginTop: 5}}>
  
       
            <Typography variant='h3' sx={{fontWeight:"bold", marginBottom: 5 }}>
                    10 anos plantando com amor
            </Typography>
           
            <Grid container item>

                <Grid xs={12} md={6} >
                    <Box>
                        <Image src="/img4.jpg" width={650} height={500} />

                        <Box sx={{mt:10}}>
                            <Typography variant='h4' sx= {{fontWeight:"bold"}}>
                                Fazemos isso por todos
                            </Typography>
                            <Typography variant='body1' mt={4}> 
                                Lorem  asantet askas askhajsa asdaoana aahnda dadoihfa afiha aofjada ajioahaf ahafafaas Lorem  asantet askas askhajsa asdaoana aahnda dadoihfa afiha aofjada ajioahaf ahafafaas Lorem  asantet askas askhajsa asdaoana aahnda dadoihfa afiha aofjada ajioahaf ahafafaas Lorem  asantet askas askhajsa asdaoana aahnda dadoihfa afiha aofjada ajioahaf ahafafaas Lorem  asantet askas askhajsa asdaoana aahnda dadoihfa afiha aofjada ajioahaf ahafafaas Lorem  asantet askas askhajsa asdaoana aahnda dadoihfa afiha aofjada ajioahaf ahafafaas
                            </Typography>
                            <Button size='large' sx={{mt:4}}  endIcon={<DragIndicator />}>
                                O que voce pode fazer 
                            </Button>
                        </Box>
                    </Box>

                </Grid>

                <Grid xs={12} md={6} >
                    <Box>
                        <Box sx={{mt:10}}>
                            <Typography variant='h4' sx= {{fontWeight:"bold"}}>
                                Fazemos isso por todos
                            </Typography>
                            <Typography variant='body1' mt={4}> 
                                Lorem  asantet askas askhajsa asdaoana aahnda dadoihfa afiha aofjada ajioahaf ahafafaas Lorem  asantet askas askhajsa asdaoana aahnda dadoihfa afiha aofjada ajioahaf ahafafaas Lorem  asantet askas askhajsa asdaoana aahnda dadoihfa afiha aofjada ajioahaf ahafafaas Lorem  asantet askas askhajsa asdaoana aahnda dadoihfa afiha aofjada ajioahaf ahafafaas Lorem  asantet askas askhajsa asdaoana aahnda dadoihfa afiha aofjada ajioahaf ahafafaas Lorem  asantet askas askhajsa asdaoana aahnda dadoihfa afiha aofjada ajioahaf ahafafaas
                            </Typography>
                            <Button size='large' sx={{mt:4,}}  endIcon={<DragIndicator />}>
                                O que voce pode fazer 
                            </Button>
                        </Box>
                        <Image src="/img4.jpg" width={650} height={500} />


                    </Box>

                </Grid>

            </Grid>
        </Grid>

        <Grid container item xs={12} mt={20} >

<Grid container item xs={12} md={6} sx={{display:"flex",flexDirection:"row", }}>

     

 <Grid container item xs = {12}   md={6}>
     <Container sx={{paddingTop:2}}>
         <Typography variant="h3" gutterBottom sx={{fontWeight:"bold"}}>
         Primeiro teste, eu estou de volta ao jogo bro
         </Typography>

         <Typography variant="body1" sx={{mt:4}}>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam
         </Typography>

         <Box sx={{mt:4}}>
             <Button   size="large"  sx={{mr:4}}>Apadrinhar</Button>
         </Box>

     </Container>
     </Grid>

     <Grid container item xs={12} md={6}  sx={{ justifyContent:"center", alignItems:"center", borderRadius:"10px"}}>  
             <Image width={320} height={650}  src="/imgP.jpg" />
     </Grid>

 </Grid>
 <Grid container item xs={12} md={6} sx={{display:"flex",flexDirection:"row"}}>

     

<Grid container item xs = {12}   md={6}>
<Container sx={{paddingTop:2}}>
<Typography variant="h3" gutterBottom sx={{fontWeight:"bold"}}>
Primeiro teste, eu estou de volta ao jogo bro
</Typography>

<Typography variant="body1" sx={{mt:4}}>
 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam
</Typography>

<Box sx={{mt:4}}>
 <Button   size="large"  sx={{mr:4}}>Apadrinhar</Button>
</Box>

</Container>
</Grid>

<Grid container item xs={12} md={6}  sx={{ justifyContent:"center", alignItems:"center", borderRadius:"10px"}}>  
 <Image width={320} height={650}  src="/imgP.jpg" />
</Grid>

</Grid>

</Grid>




<Grid container item sx={{flexDirection:"column",   mt:10, padding:6,}}>

    <ScreenComDoisComponentes ComponenteUm={componenteUmDoScreenUm} ComponenteDois={<ComponenteDoisScreenUm />}/>

</Grid>

        <Grid sx={{padding:6,marginTop: 5, gap:3}}>
            <Box>
                <Typography variant='h3'>
                    Construa Agora
                </Typography>
            </Box>
        </Grid>
        <Grid container item  spacing={2} sx={{padding:6, marginTop: 5, gap:3}}>
           
            <Box sx={{width:400, height:300, bgcolor: green[200], padding:2}}>
                <Speed sx={{fontSize: 40}} color='primary'/>
                <Typography variant="h4" color="primary">Rapidez</Typography>
                <Typography variant='body1'>
                Lorem  asantet askas askhajsa asdaoana aahnda dadoihfa afiha aofjada ajioahaf ahafafaas Lorem  asantet askas askhajsa asdaoana aahnda dadoihfa afiha aofjada

                </Typography>
            </Box>

            <Box sx={{width:400, height:300, bgcolor: green[200], padding:2}}>
                <Speed sx={{fontSize: 40}} color='primary'/>
                <Typography variant="h4" color="primary">Rapidez</Typography>
                <Typography variant='body1'>
                Lorem  asantet askas askhajsa asdaoana aahnda dadoihfa afiha aofjada ajioahaf ahafafaas Lorem  asantet askas askhajsa asdaoana aahnda dadoihfa afiha aofjada

                </Typography>
            </Box>

            <Box sx={{width:400, height:300, bgcolor: green[200], padding:2}}>
                <Speed sx={{fontSize: 40}} color='primary'/>
                <Typography variant="h4" color="primary">Rapidez</Typography>
                <Typography variant='body1'>
                Lorem  asantet askas askhajsa asdaoana aahnda dadoihfa afiha aofjada ajioahaf ahafafaas Lorem  asantet askas askhajsa asdaoana aahnda dadoihfa afiha aofjada

                </Typography>
            </Box>
            
        </Grid>


        <Footer />

    </ThemeProvider>
  );
}
export default ResponsiveAppBar;

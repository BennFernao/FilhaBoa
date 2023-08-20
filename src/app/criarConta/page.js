"use client"


import React, { useState } from 'react';
import { Container, TextField, Button, Typography, FormGroup, Grid, Box } from '@mui/material';
import Image from 'next/image';
import {ThemeProvider,  createTheme} from '@mui/material';
import { green, deepOrange, grey } from '@mui/material/colors';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    width: '800px',
    maxWidth:"100%"
  },
};


const theme = createTheme({
    palette:{
        primary :{main: green[900]} ,
        secondary:{main : deepOrange[900]},
        white : {main: "#fff"},
        black : {main : "#0D0D0D", contrastText :"#212121"},
        subtitle : {main : grey[700]}
  
        
    }
  })

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login clicked');
  };

  return (



    <ThemeProvider theme={theme}>


    <Grid container >
        <Grid container item md={4} sx={{display:{xs:"none", md:"flex"}, bgcolor:grey[900]}}>

            <Box  mt={20} p={4}>

                <Container sx={{display:"flex",flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                    <Image  src="/logo.png" width={45} height={45}/>
                </Container>
                
                <Typography variant="h4" color={grey[100]} mt={4} sx={{textAlign:"center"}} >
                    Contamos contigo !
                </Typography>

                <Typography sx={{fontWeight:"700"}} mt={4} color={grey[400]}>
                    Contamos contigo meu amigo/a, estamos fazendo as melhores coisas que estao ao nosso alcançe e efetivar o mundo de modo nunca antes visto
                </Typography>


            </Box>


        </Grid>

        <Grid container item xs={12}  md={8}>
            <Container sx={{...styles.container}}>
            <Typography variant="h4" gutterBottom sx={{mb:4}}>
                Criar Conta
            </Typography>

            <FormGroup sx={{...styles.form}} >

                <Box sx={{display:"flex", flexDirection:{md:"row", xs:"column"}, gap:2}}>
                    <Box sx={{display:"flex", flexDirection:"column", gap:2, width:{md:"50%", xs:"100%"}}}>
                        
                        <TextField
                        label="Email"
                        variant="outlined"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        />
                        <TextField
                        label="Password"
                        variant="outlined"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        fullWidth
                        />

                    </Box>
                    <Box sx={{display:"flex", flexDirection:"column", gap:2, width:{md:"50%", xs:"100%"}}}>
                    
                    <TextField
                    label="Email"
                    variant="outlined"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    fullWidth
                    />
                    <TextField
                    label="Password"
                    variant="outlined"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    fullWidth
                    />

                    </Box>

               </Box>
                <Button variant="contained" color="primary" size='large' onClick={handleLogin}>
                Criar Conta
                </Button>
                <Button variant="text" color="primary" href='/login'>
                Já tem uma conta ? Faça o login!
                </Button>
            </FormGroup>
            </Container>
        </Grid>
    </Grid>

    </ThemeProvider>
  );
};

export default LoginPage;

"use client"

import React, { useState } from 'react';
import { Container, TextField, Button, Typography, FormGroup, Grid, Box } from '@mui/material';
import Image from 'next/image';
import {ThemeProvider,  createTheme} from '@mui/material';
import { green, deepOrange, grey } from '@mui/material/colors';
import { buscarDadosJson } from '../../../utils/fecths/post';
import { useRouter } from 'next/navigation';

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
    width: '400px',
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

async function logarOUser({email, senha}){

  const body = {email, senha}
  const[ resultados, _] = await buscarDadosJson({url: "/login/api", dados: body, method:"POST"})
                          .then((res)=> {  
                                                    
                            return res
                          })
                          .catch((erro)=> ["erro", "erro ao fazer o login"])

return resultados

}

function verificarOsDados({email, senha}){


  if(email && senha){

    return ["sucesso"]


  }else{
    return ["erro", "preencha todos os campos"]
  }
}



const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()

  const manipularLogin = async () => {

      const resultadoDaValidacao = verificarOsDados({email, senha:password})   
      if(resultadoDaValidacao[0] == "erro") return resultadoDaValidacao
      
      const resultadoDoLogin = await logarOUser({email, senha: password})
      return resultadoDoLogin
  };



  return (


    <Grid container >

        <Grid container item  md={12}>
            <Container sx={{...styles.container}}>
            
            <Typography variant="h3" gutterBottom sx={{mb:4, fontWeight:"bold", color:"#226027"}}>
                Login
            </Typography>
            <FormGroup sx={{...styles.form}} >
                <TextField
                label="Email"
                variant="outlined"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <Button variant="contained" color="primary" size='large' onClick={async ()=>{
                  const resultado = await manipularLogin()
                
                  if(resultado[0] != "erro"){

                    router.push("/")
                    
                  }

                }
                  }>
                    Entrar
                </Button>
                <Button variant="text" color="primary" href='/criarConta'>
                Não tem uma conta ? Crie uma!
                </Button>
            </FormGroup>
            </Container>
        </Grid>
    </Grid>


  );
};

export default LoginPage;

"use client"


import React, { useState } from 'react';
import { Container, TextField, Button, Typography, FormGroup, Grid, Box } from '@mui/material';
import Image from 'next/image';
import {ThemeProvider,  createTheme} from '@mui/material';
import { green, deepOrange, grey } from '@mui/material/colors';
import { buscarDadosJson } from '../../../utils/fecths/post';


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

  async function criarConta({email, senha,  nome, sobrenome}){

    const body = {email, senha, nome, sobrenome}
    const[ resultados, _] = await buscarDadosJson({url: "/criarConta/api", dados: body, method:"POST"})
                            .then((res)=> {  
                                                      
                              return res
                            })
                            .catch((erro)=> ["erro", "erro ao fazer o login"])
  
  return resultados
  
  }
  
  function verificarOsDados({email, senha, nome, sobrenome}){
  
  
    if(email && senha && nome && sobrenome){
  
      return ["sucesso"]
  
  
    }else{
      return ["erro", "preencha todos os campos"]
    }
  }

const CriarContaPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');

  const manipularCriacaoDaConta = async () => {

    const resultadoDaValidacao = verificarOsDados({email, senha:password, nome, sobrenome})   
    if(resultadoDaValidacao[0] == "erro") return resultadoDaValidacao
    
    const resultadoDaCriacaoDeConta = await criarConta({email, senha: password, nome, sobrenome})
    return resultadoDaCriacaoDeConta
};



  return (



    <ThemeProvider theme={theme}>


    <Grid container >

        <Grid container item xs={12}  md={12}>
            <Container sx={{...styles.container}}>
            <Typography variant="h4" gutterBottom sx={{mb:4}}>
                Criar Conta
            </Typography>

            <FormGroup sx={{...styles.form}} >

                <Box sx={{display:"flex", flexDirection:{md:"row", xs:"column"}, gap:2}}>
                    <Box sx={{display:"flex", flexDirection:"column", gap:2, width:{md:"50%", xs:"100%"}}}>
                        
                        <TextField
                        label="Nome"
                        variant="outlined"
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        fullWidth
                        />

                        <TextField
                        label="Sobrenome"
                        variant="outlined"
                        type="text"
                        value={sobrenome}
                        onChange={(e) => setSobrenome(e.target.value)}
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
                <Button variant="contained" color="primary" size='large' onClick={async ()=>{

                    
                    const resultado = await  manipularCriacaoDaConta()
                    if(resultado[0] != "erro"){

                      router.push("/")
                      
                    }

                }
                  
                 }>
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

export default CriarContaPage;

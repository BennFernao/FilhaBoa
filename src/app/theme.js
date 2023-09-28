"use client"
import {  ThemeProvider, createTheme } from '@mui/material';
import { green, deepOrange, grey } from '@mui/material/colors';


const theme = createTheme({
    palette:{
        primary :{main: green[900]} ,
        secondary:{main : deepOrange[900]},
        white : {main: "#fff"},
        black : {main : "#0D0D0D", contrastText :"#212121"},
        subtitle : {main : grey[700]}
        
    }
  })



  export default function Theme({children}){

    return (  
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
      )
  }
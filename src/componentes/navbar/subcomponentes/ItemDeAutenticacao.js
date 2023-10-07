"use client"
import EntradaParaAuntenticacao from "./EntradasAutenticacao"
import AvatarDoCliente from "./avatarDoCliente"
import { buscarDadosJson } from "../../../../utils/fecths/post"
import { Typography } from "@mui/material"
import { useState, useEffect } from "react"


export   function ItensDeAutenticacao(){

  const [resultados, setResultados] = useState([null, []])



  useEffect(()=>{

    (async ()=>{

       await buscarDadosJson({url:"https://filhaboa1-5fnu.vercel.app/testeAutorizacao", dados:{}, method:"GET" })
      .then((resultados)=> {

        const [dados, options]  = resultados
        setResultados(resultados)
        
      })
  
     .catch((erro)=>["erro", "erro ao buscar dados", erro])

    })()


  }, [])

     
                                                          
      if(!resultados[1].nome){
  
          return(

          
              <EntradaParaAuntenticacao />
          
          )
      }else{
  
          return(   
            
          
              <Avatar nome={resultados[1].nome}/>
         
                  
          )
      }
  }
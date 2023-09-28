const { EntradaParaAuntenticacao, AvatarDoCliente } = require("./EntradasAutenticacao")
import { buscarDadosJson } from "../../../../utils/fecths/post"


export async  function ItensDeAutenticacao(){

   
    const buscarDadosDoTesteDeNavegacao = { funcao : buscarDadosJson, argumentos: {url: "http://localhost:3005/testeAutorizacao", method:"GET",  dados: {}} }
  
    const [resultados, _] = await buscarDadosDoTesteDeNavegacao.funcao(buscarDadosDoTesteDeNavegacao.argumentos)
                                                                        .then((resultados)=> resultados)
                                                                        .catch((erro)=>["erro", "erro ao buscar dados", erro])
  
   

      if(!resultados[1].nome){
  
          return(
            <EntradaParaAuntenticacao />
          )
      }else{
  
          return(   
            <AvatarDoCliente nome={resultados[1].nome} />       
          )
      }
  }
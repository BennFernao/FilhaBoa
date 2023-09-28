import { buscarDadosJson } from "../../../../utils/fecths/post";
import HistoricoDaVideira from "./auxiliar";



export default async  function Historico({params}){

    const [secao, posicao, ...outros] = params.dados
   
    const [resultados, _] = await buscarDadosJson({url:"http://localhost:3005/historico/verHistoricoDaVideira", dados:{secao, posicao}, method:"POST"})
   

    return(
        <>
            <HistoricoDaVideira dadosDosHistoricos={resultados} dadosDaVideira={{posicao, secao}} />
        </>
    )
}
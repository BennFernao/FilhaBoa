import { NextResponse } from "next/server";
import { buscarDadosJson } from "../../../../utils/fecths/post";

export async  function POST(request){

    const {secao, posicao} = await request.json()
    
 
    const [resposta, options] = await buscarDadosJson({url: process.env.apiurl+""+"/historico/verHistoricoDaVideira", method: "POST", dados :{secao, posicao }})

    console.log(resposta, "er")
    return new Response(JSON.stringify(resposta), {})

}
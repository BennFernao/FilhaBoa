import { NextResponse } from "next/server";
import { buscarDadosJson } from "../../../../../../utils/fecths/post";


export async  function POST(request){

    const dados = await request.json()
    
    const [resposta, options] = await buscarDadosJson({url: "http://localhost:3005/vinha/obterInformacoesAdicionaisDaVideiraPatrocinada", method: "POST", dados })
    
    return new Response(JSON.stringify(resposta), {})

}
import { NextResponse } from "next/server";
import { buscarDadosJson } from "../../../../../utils/fecths/post";

export async  function POST(request){

    const {secao} = await request.json()
 
    const [resposta, options] = await buscarDadosJson({url: "http://localhost:3005/vinha/lerEstadoDasVinhasPorSecao", method: "POST", dados :{secao }})
    
    return new Response(JSON.stringify(resposta), {})

}
import { NextResponse } from "next/server";
import { buscarDadosJson } from "../../../../../utils/fecths/post";

export async  function POST(request){

    const {secao} = await request.json()
 
    const [resposta, options] = await buscarDadosJson({url:process.env.apiurl+""+"/vinha/lerEstadoDasVinhasPorSecao", method: "POST", dados :{secao }})
    console.log(resposta)
    return new Response(JSON.stringify(resposta), {})
}
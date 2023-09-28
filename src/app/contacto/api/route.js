import { NextResponse } from "next/server";
import { buscarDadosJson } from "../../../../utils/fecths/post";


export async  function POST(request){

    const {nome, email, assunto, mensagem} = await request.json()
 
    const [resposta, options] = await buscarDadosJson({url: "http://localhost:3005/contacto/criarContacto", method: "POST", dados :{nome, email, assunto, mensagem}})
    
    return new Response(JSON.stringify(resposta), {})

}
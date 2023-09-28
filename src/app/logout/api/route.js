import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { buscarDadosJson } from "../../../../utils/fecths/post";

export  async function GET(request){

    const req = await  request.json()
 
    const [resultados, options] = await buscarDadosJson({url :"http://localhost:3005/user/logout", dados: req, method:"GET", cookie: cookies().getAll()})
 

    return new Response(JSON.stringify(resultados), {
        status: 200,
        headers:{
            "Set-Cookie": options.setCookie
        }
    })
}
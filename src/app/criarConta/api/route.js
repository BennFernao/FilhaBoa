import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { buscarDadosJson } from "../../../../utils/fecths/post";

export  async function POST(request){

    const req = await  request.json()

            
    const [resultados, options] = await buscarDadosJson({url :"http://localhost:3005/user/addUser", dados: req, method:"POST"})


    return new Response(JSON.stringify(resultados), {
        status: 200,
        headers:{
            "Set-Cookie": options.setCookie
        }
    })
}
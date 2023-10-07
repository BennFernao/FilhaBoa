import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { buscarDadosJson } from "../../../../utils/fecths/post";

export  async function POST(request){

    const req = await  request.json()

    console.log(cookies().getAll())
    const [resultados, options] = await buscarDadosJson({url :process.env.apiurl+""+"/user/login", dados: req, method:"POST", cookie: cookies().getAll()})
    console.log(options)

    return new Response(JSON.stringify(resultados), {
        status: 200,
        headers:{
            "Set-Cookie": options.setCookie
        }
    })
}
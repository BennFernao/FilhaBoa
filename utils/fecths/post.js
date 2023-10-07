

export  async  function buscarDadosJson({url, method, dados = {}, cookie = null}){

    
    
    const options =  {
        method,
        headers : cookie ? 
        {
        "content-type": "application/json",
        "Cookie" : cookie
        }:

        {
            "content-type": "application/json",
        }

        ,
        body : method.toUpperCase() == "GET" || method.toUpperCase() == "HEAD"  ? undefined :   JSON.stringify(dados),
        cache: "no-cache"
        

    }
    

    const resposta = await fetch(url, options)
                                    .then(async (res)=>{

                                                       
                                        if(!res.ok) throw new Error("Erro ao buscar dados")
                                        else{
                                            const cookie = res.headers.get("set-cookie")
                                            const result = await  res.json()

                                            
                                            return [result , {setCookie : cookie }]
                                        }
                                               

                                    })
                                    .catch((error)=>{

                                        return ["erro", error]
                                    })
    return resposta
}
import { grey } from "@mui/material/colors"

const { Typography, Box, Grid, Divider, Button } = require("@mui/material")
const { default: Link } = require("next/link")


export function Footer(){

    const dadosDoFooter = [

        {
            item: "Links ",
            elementos: [
                {
                    titulo : "Home",
                    link: "/"
                },{
                    titulo : "Contacto-nos",
                    link: "/contacto"
                },{
                    titulo : "Apadrinhar",
                    link: "/apadrinhar"
                },{
                    titulo : "Como funciona",
                    link: "/comoFunciona"
                },{
                    titulo : "Sobre Nós",
                    link: "/sobreNos"
                },{
                    titulo : "Blog",
                    link: "/blog"
                },{
                    titulo : "Login",
                    link: "/Login"
                },{
                    titulo : "Criar Conta",
                    link: "/criarConta"
                }
            ]
        },
        {
            item: "Redes Sociais",
            elementos: [
                {
                    titulo : "Facebook",
                    link: "/"
                },{
                    titulo : "twitter",
                    link: "/"
                },{
                    titulo : "Instagram",
                    link: "/"
                },{
                    titulo : "Threads",
                    link: "/"
                },{
                    titulo : "Linkedin",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },
            ]
        },
        {
            item: "FAQs",
            elementos: [
                {
                    titulo : "Mercadoria",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },
            ]
        },
        {
            item: "Regiões",
            elementos: [
                {
                    titulo : "Mercadoria",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },
            ]
        },
        {
            item: "Fontes",
            elementos: [
                {
                    titulo : "Mercadoria",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },{
                    titulo : "Mercadoria",
                    link: "/"
                },
            ]
        }
    ]

    return(

        <Grid container item xs={12}>
            <Grid container item xs={12} sx={{display: "flex", flexDirection:"row", justifyContent:"space-between", backgroundColor:"#000000"}}>
            {dadosDoFooter.map((dado, pos)=>(
                <Box>
                <Typography variant="h6" sx={{mb:4, color: grey[500], my:2, fontWeight:"bold" }}>{dado.item}</Typography> 
                <Divider sx={{color: grey[100], backgroundColor: grey[500]}} />
                    <Box>
                        {dado.elementos.map((elemento, pos)=>(
                            <Link href={elemento.link} style={{textDecoration: "none"}}>
                                    <Typography sx={{color: grey[100], my:1}}>{elemento.titulo}</Typography>   
                            </Link>
                        ))}
                    </Box>

                    

                </Box>
                
            ))}





            </Grid>

            <Grid container item xs={12} mt={10} sx={{display: "flex", flexDirection: "column", justifyContent:"flex-end", alignItems:"flex-end"}}>
                <Button sx={{color: grey[100], my:1}} href="/termos">Termos de privacidade</Button>
                <Button sx={{color: grey[100], my:1}} href="/politicaDePrivacidade">Políticas e Cookies</Button>
                <Typography sx={{color: grey[400], my:1, fontWeight:"bold"}}>Todos direitos reservados para o Filha boa</Typography>
            </Grid>

            
        </Grid>

    )
}
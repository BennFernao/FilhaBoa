import { Card1 } from "@/componentes/cards/cards1";
import { Grid } from "@mui/material";
import ImgMediaCard from "./outros/um";
import OutlinedCard from "./outros/tres";



export default function App(){

    const item1 = {
        titulo : "O Melhor",
        srcImagem : "/img3.jpg",
        textoParaAcao : "Saber mais"
    }

    return(

        <Grid container  sx={{gap:4}}>
            <Card1  srcImagem= {item1.srcImagem} textoParaAcao ={item1.textoParaAcao} titulo={item1.titulo}/>
            <ImgMediaCard />
            <OutlinedCard />
        </Grid>
        

    )
}
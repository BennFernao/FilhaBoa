import { ContainerParaDoisComponentes } from "@/app/componentesPosteriores/containerParaDoisElementos";
import { PequenaDescricaoTextual } from "@/componentes/screens/screenComDoisComponentes";
import { Imagem } from "@/app/componentesPosteriores/Imagem";
import { Carousel } from "react-responsive-carousel";




export default function PrimeiroComponente(){

    const itemsParaOComponenteUm = {

        titulo : "Torne se um Guardião ",
        descricao : "A importância do apadrinhamento vai além do vinho,  ao apadrinhar uma videira, você se torna um guardião  de uma parte significativa da nossa história e cultura  você está escrevendo seu próprio capítulo nesta história,  contribuindo para o futuro do vinho e para a celebração do legado que ele carrega consigo. ",
        subtitulo : "Ansiosos para ter você",
        textoParaAcaoUm : "Apadrinhar",
        linkParaAcao :"/apadrinhar",
        aviso : "Ao continuares , você aceita a nossa politica e termos de privacidade",
        linkParaOAviso : "/politicaDePrivacidade"
      }

    const Componente1DoGrid1 = <PequenaDescricaoTextual {...itemsParaOComponenteUm} /> 
    const Componente2DoGrid1 = <Imagem src={"/img8.jpg"} />



    return (
        <ContainerParaDoisComponentes Componente1={Componente1DoGrid1} Componente2={Componente2DoGrid1} opcoes={{bg:"#0D0D0D",  diretion:  "row" }} />
    )


}
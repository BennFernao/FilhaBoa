import { ScreenTituloMaisCards} from '@/componentes/screens/screenTituloMaisCards';



export default function TerceiroComponente(){

    const itensDoScreenTituloMaisCards = {

        titulo : "10 anos plantando com amor",
        dadosDosCards : [{
              srcImagem : "/img3.jpg",
              textoParaAcao : "Saber mais",
              linkParaAcao : "/comoFunciona",
              titulo : "Plante com responsabilidade" 
            },{
              srcImagem : "/img14.jpg",
              textoParaAcao : "Saber mais",
              linkParaAcao : "/comoFunciona",
              titulo : "Seja um participante" 
            },{
              srcImagem : "/img13.jpg",
              textoParaAcao : "Saber mais",
              linkParaAcao : "/contacto",
              titulo : "Fale connosco" 
            }
          ]
        }

    return(

        <ScreenTituloMaisCards titulo={itensDoScreenTituloMaisCards.titulo} dadosDosCards={itensDoScreenTituloMaisCards.dadosDosCards}/>
    )
}
import { createSlice } from "@reduxjs/toolkit";


const fatiaDeSessoes = createSlice({

    name:"sessoes",
    initialState:{
        sessaoAtivada : 1,
        estadosDasVideirasDasSessoes :[[],[],[],[],[],[],[],[], [],[]],
        videirasSelecionadas : [],
        planosExistentes: []
    
    }, 
    reducers: {

        mapearUmaSessao : (state, action)=>{

            const {dadosDaSessao, id} = action
            state.estadosDasVideirasDasSessoes[id] = dadosDaSessao
        },

        alterarSessaoAtiva : (state, action)=>{

            state.sessaoAtivada = action.payload.sessaoAtivada
            
        },

        inserirPlanos :(state, action)=>{

            action.planos.forEach(element => {
                state.planosExistentes.push(element)
            });
        },

        inserirVideiraSelecionada : (state, action)=>{

            const videiraSelecionada = action.payload.videiraSelecionada
            state.videirasSelecionadas.push(videiraSelecionada)
        },

        deletarVideiraSelecionada : (state, action)=>{

            const videiraAExcluir = action.payload.videiraAExcluir
            let posicaoDaVideiraNoArray = null

            for (let i = 0; i < state.videirasSelecionadas.length; i++) {
                             
                const item = state.videirasSelecionadas[i]
                if(item.pos == videiraAExcluir.pos && item.secao == videiraAExcluir.secao ){       
                    posicaoDaVideiraNoArray = i
                    break;
                }       
            }
          
            if(posicaoDaVideiraNoArray !== null){  
                state.videirasSelecionadas.splice(posicaoDaVideiraNoArray, 1)
            }
        } ,

        inserirEstadosDeVideirasDeUmaSecao: (state, action)=>{

            state.estadosDasVideirasDasSessoes[state.sessaoAtivada - 1] = action.payload.estadosDasVideiras
            
        }
    }
})


export default fatiaDeSessoes.reducer
export const {deletarVideiraSelecionada, inserirPlanos, inserirVideiraSelecionada,inserirEstadosDeVideirasDeUmaSecao, alterarSessaoAtiva, mapearUmaSessao} = fatiaDeSessoes.actions
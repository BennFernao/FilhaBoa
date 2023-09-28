import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Theme from './theme';
import { BarraDeNavegacao } from '@/componentes/navbar/BarraDeNavegacao';
import { ItensDeAutenticacao } from '@/componentes/navbar/subcomponentes/ItemDeAutenticacao';


export const metadata = {
  title: 'Filha Boa',
  description: 'Encontre as melhores vinhas da cidade',
  
}



export default function RootLayout({ children }) {
  return (
   
    <html lang="pt-br">
      {// className={inter.className} para o body
      }
      <body  >
        <Theme>
         
          {children}
        </Theme>
      </body>
    </html>
 
  )
}

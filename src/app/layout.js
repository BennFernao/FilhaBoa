// import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



export const metadata = {
  title: 'Filha Boa',
  description: 'Encontre as melhores vinhas da cidade',
  
}



export default function RootLayout({ children }) {
  return (
   
    <html lang="pt-br">
      {// className={inter.className} para o body
      }
      <body >{children}</body>
    </html>
 
  )
}

import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles:{
    global:{
      body:{
        bg: '#F0F2F5',
        color: '#585666',
        fontFamily: 'Balsamiq Sans',
      },
      
    }
  },
  textStyles:{
    h1:{
      fontFamily: 'Creepster',
      letterSpacing: '2px',
      color: '#000000',
      fontSize: '48px',
      textShadow: ' 0.1rem 0.1rem #FFF3B0'
    },
    h2:{
      fontFamily:'Slackey',
      color: '#F5FEFF',
      fontSize: '38px',
      textAlign: 'center',
    },
    h3:{
      fontFamily: 'Balsamiq Sans',
      fontSize: '16px',
      color: '#000000',
    },
    h4:{
      fontFamily: 'Balsamiq Sans',
      fontSize: '20px',
      color: '#585666',
    }
  }
})
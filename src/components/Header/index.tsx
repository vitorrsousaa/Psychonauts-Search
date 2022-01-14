import { Flex, Text, Icon, Box } from "@chakra-ui/react";
import { BsStarFill } from 'react-icons/bs';
import { Link, useLocation } from "react-router-dom";
import { Search } from "./Search";



export const Header = () => {

  const { pathname } = useLocation()

  return(
    <Box
      h='245px'
      bgGradient='linear(to-t, #00B4DB, #0083B0)'
      mb='90px'
    >

      <Flex 
        w='70vw' 
        justify='space-between' 
        align='center' 
        m='auto'
      >
        <Link to='/'>
          <Text 
            textStyle='h1' 
            mt='20px'
          >
            psychonauts
          </Text>
        </Link>
        
        <Link to='/favorites'>
          <Flex 
            align='center' 
            mt='32px' 
            mb='7px'
          >
            <Icon  
              as={BsStarFill} 
              w='15px' 
              h='15px' 
              textShadow='1px solid #FFF3B0' 
              color='#000000'
              mb='3px'
            />
            <Text 
              textStyle='h3' 
              textShadow='1px 1px #FFF3B0' 
              ml='10px'
              
            >
              Favoritos
            </Text>
          </Flex>
        </Link>
      </Flex>

      <Flex justify='center'>
        <Text 
          textStyle='h2' 
          position='absolute' 
          top='150'
        >
          { pathname === '/' ? 'Selecione seu personagem' : 'Personagens Favoritos' }
        </Text>
        { pathname !== '/favorites' && <Search />}
      </Flex>

    </Box>
  )
}
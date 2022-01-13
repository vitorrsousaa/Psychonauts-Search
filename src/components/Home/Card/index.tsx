import { Avatar, VStack, Text, HStack, Button } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { BsStarFill } from "react-icons/bs"
import { useFavorites } from "../../../context/FavoritesContext"
import { useSearch } from "../../../context/SearchContext"

import { api } from "../../../services/api"

interface CharacterProps {
  gender: string;
  img: string;
  name: string;
  psiPowers: PowerProps[]
  _id: string;
}

interface PowerProps {
  description: string;
  img: string;
  _id: string;
  name: string;
}

interface CardProps{
  data: CharacterProps[]
}


export function Card( {data}: CardProps ) {

  

  const { addUserFavorites } = useFavorites()

  return(
    <>
      {data.map((character: CharacterProps)=> (
        <VStack 
          bg='#ffffff' 
          align='center' 
          w='270px' 
          h='350px' 
          justify='center' 
          spacing='20px'
          key={character._id} 
        >

        <Avatar 
          src={character.img}
          size='xl' 
        />

        <Text 
          textStyle='h4'
        >
          {character.name}
        </Text>

        <HStack>
          {character.psiPowers.slice(0,3).map(power => 
            <Avatar 
              src={power.img}
              bg='#ffffff' 
              key={power._id}
            />
            )}
        </HStack>

        <Button 
          colorScheme='red'
          onClick={() => addUserFavorites(character)}
        >
          <BsStarFill />
        </Button>

      </VStack>
      ))}
    
    </>
    
  )
}
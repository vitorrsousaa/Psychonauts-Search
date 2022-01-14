import { Avatar, VStack, Text, HStack, Button, GridItem } from "@chakra-ui/react"
import { BsStarFill } from "react-icons/bs"
import { useFavorites } from "../../context/FavoritesContext"


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
        <GridItem m='0 auto' key={character._id} >
          <VStack 
          bg='#ffffff' 
          align='center' 
          w='270px' 
          h='350px' 
          justify='center' 
          spacing='20px'
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
        </GridItem>
      ))}
    
    </>
    
  )
}
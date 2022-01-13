import { Input, InputGroup, InputRightAddon } from "@chakra-ui/react"
import { ReactChild, ReactElement, ReactNode } from "react"
import { Link } from "react-router-dom"
import { useSearch } from "../../context/SearchContext"

export const Search = () => {

  const { searchInput, setSearchInput } = useSearch()

  return(
    <InputGroup position='absolute' top='217'  size='lg' justifyContent='center'>        
          <Input
            placeholder='Digite o nome do seu personagem' 
            w='600px' 
            focusBorderColor="gray.500" 
            color='#706E7A' 
            bg='#ffffff'
            value={searchInput}
            onChange={(element) => setSearchInput(element.target.value)}
          />
        </InputGroup>
  )
}
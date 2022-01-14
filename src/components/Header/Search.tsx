import { Input, InputGroup, useBreakpointValue } from "@chakra-ui/react"
import { useSearch } from "../../context/SearchContext"

export const Search = () => {

  const { searchInput, setSearchInput } = useSearch()

  const wideVersion = useBreakpointValue({
    base: true,
    lg: false
  })

  return(
    <InputGroup position='absolute' top='217'  size={wideVersion ? 'sm' : 'lg'} justifyContent='center' p='0 2rem'>        
          <Input
            placeholder="Digite o nome do seu personagem"
            focusBorderColor="gray.500" 
            maxWidth='600px'
            color='#706E7A' 
            bg='#ffffff'
            value={searchInput}
            onChange={(element) => setSearchInput(element.target.value)}
          />
        </InputGroup>
  )
}
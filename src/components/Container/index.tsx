import { Alert, AlertIcon, AlertTitle, Box, Grid, GridItem, Spinner, Text, useBreakpointValue } from "@chakra-ui/react"
import { useLocation } from "react-router-dom"
import { useFavorites } from "../../context/FavoritesContext"
import { useSearch } from "../../context/SearchContext"


import { Card } from "../Card"

export const Container = () => {

  const { dataBase } = useSearch()

  console.log(dataBase)

  const { favorites } = useFavorites()

  const {pathname} = useLocation()

  const templateColumnsBreakPoints = useBreakpointValue({
    base: 'repeat(1, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
    xl: 'repeat(4, 1fr)',
  })

  const templateColSpanBreakpoints = useBreakpointValue({
    base: '1',
    md: '2',
    lg: '3',
    xl: '4',
  })

  return(
      <Box>
        {
          !dataBase.length ? 
          <Box m='0 auto' align='center'>
            <Spinner size="xl" />
          </Box>
        : 
        (
          dataBase[0] == null ? 
            <Box m='0 auto' align='center'>
              <Text> 
                Personagem não encontrado
              </Text>
            </Box>
          : 
          <Grid 
            maxWidth = '85vw'
            m='0 auto' 
            gap={6} 
            templateColumns={templateColumnsBreakPoints} 
          >
            <Card 
              data={ pathname === '/' && dataBase != null ? dataBase : favorites }
            /> 
          </Grid>
        )
        }
      </Box>
      
  )
}
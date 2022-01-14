import { Flex, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react"
import { useLocation } from "react-router-dom"
import { useFavorites } from "../../context/FavoritesContext"
import { useSearch } from "../../context/SearchContext"


import { Card } from "../Card"

export const Container = () => {

  const { dataBase } = useSearch()

  const { favorites } = useFavorites()

  const {pathname} = useLocation()

  const wideVersion = useBreakpointValue({
    base: 'repeat(1, 1fr)',
    md: 'repeat(2, 1fr)',
    lg: 'repeat(3, 1fr)',
    xl: 'repeat(4, 1fr)',
  })

  return(
      <Grid 
        maxWidth = '85vw'
        m='0 auto' 
        gap={6} 
        templateColumns={wideVersion} 
      >

        <Card 
          data={ pathname === '/' ? dataBase : favorites } 
        />
        

      </Grid>
  )
}
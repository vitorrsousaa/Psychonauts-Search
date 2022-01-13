import { Flex, VStack, Grid, Avatar, Text, HStack, Button } from "@chakra-ui/react"
import axios from "axios"
import { useLocation, useRoutes } from "react-router-dom"
import { useFavorites } from "../../../context/FavoritesContext"
import { useSearch } from "../../../context/SearchContext"


import { Card } from "../Card"

export const Container = () => {

  const { dataBase } = useSearch()

  const { favorites } = useFavorites()

  const {pathname} = useLocation()

  console.log(pathname)

  

  return(
    <Flex>

      <Grid w='70vw' m='auto' gap={6} templateColumns='repeat(3, 1fr)' >

        <Card data={ pathname === '/' ? dataBase : favorites } />

      </Grid>
    </Flex>
  )
}
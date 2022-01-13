import { Header } from "../components/Header"
import { Card } from "../components/Home/Card"
import { Container } from "../components/Home/Container"
import { useSearch } from "../context/SearchContext"

export const FavoritesPage = () => {
  

  const { } = useSearch()


  return(
    <>
      <Header />
      
      <Container />
    </>
  )
}

import React, { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts'
import { NoFavorites } from '../../components/ui'
import { localFavorites } from '../../utils'
import { FavoritePokemonsComponent } from './FavoritePokemonsComponent'

const FavoritesPage = () => {

   const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

   useEffect(() => {
    setFavoritePokemons( localFavorites.pokemons );
   }, [])

  return (
    <Layout title='Pokemons - Favoritos'>
      {
        favoritePokemons.length === 0 
        ? (<NoFavorites />)
        : (
          <FavoritePokemonsComponent favorite = { favoritePokemons } />
        )
      }
    </Layout>
  )
}

export default FavoritesPage
import type { NextPage, GetStaticProps } from 'next'
import { Card, Grid, Row, Text } from '@nextui-org/react';

import { Layout } from '../components/layouts'
import { pokeApi } from '../api'
import { PokemonListResponse, SmallPokemon } from '../interfaces'
import { PokemonCard } from '../components/pokemon';

interface Props {
  pokemons: SmallPokemon[];

}

const Home: NextPage<Props> = ({ pokemons }) => {

  console.log(pokemons)


  return (
    <Layout title='Pokemon App por Props'>
  
      <Grid.Container gap={ 2 } justify='flex-start'>
        {
          pokemons.map( (pokemon) => (
            <PokemonCard key= { pokemon.id } pokemon = { pokemon } />
          ))
        }
      </Grid.Container>
    </Layout>
  )
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=200');
  console.log(data)
  const pokemons: SmallPokemon[] = data.results.map( (pokemon, index) => ({
    name: pokemon.name,
    url: pokemon.url,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`
   }) )
  //https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg


  return {
    props: {
      pokemons: pokemons
    }
  }
}

export default Home

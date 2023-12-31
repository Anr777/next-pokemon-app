
import React, { useEffect, useState } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'


import { Layout } from '../../components/layouts'
import { NextPage } from 'next';
import { pokeApi } from '../../api';
import { Pokemon} from '../../interfaces';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { localFavorites } from '../../utils';
import confetti from 'canvas-confetti'

interface Props {
  pokemon: any;
}

const PokemonPage: NextPage<Props> = ({ pokemon }) => {

  const [isInFavorite, setIsInFavorite] = useState(localFavorites.existPokemonInFavorites(pokemon.id))
  const onTottleFavorite = () => {
    localFavorites.toggleFavorite( pokemon.id );
    setIsInFavorite( !isInFavorite )

    if( isInFavorite ) return
      
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      }
    })
  }

  


  return (
    <Layout title={ pokemon.name }>
      <Grid.Container css={{ marginTop: '5px'}} gap={ 2 }>
        <Grid xs={ 12 } sm={ 4 }>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image src={ pokemon.sprites.other?.dream_world.front_default || 'no-image.png'} 
                alt={ pokemon.name }
                width='100%'
                height={ 200 }
              />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={ 12 } sm={ 8 }>
          <Card>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between'}}>
              <Text h1 transform='capitalize'> { pokemon.name } </Text>
              <Button color='success' ghost={ !isInFavorite }
                onClick={ onTottleFavorite }
              >
                {
                  isInFavorite ? 'En Favoritos' : 'Guardar en favoritos'
                }
              </Button>
            </Card.Header>

            <Card.Body>
              <Text size={ 30 }>
                Sprites:
              </Text>
              <Container direction='row' display='flex' gap={ 0 }>
                <Image src={ pokemon.sprites.front_default } 
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />

                <Image src={ pokemon.sprites.back_default } 
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />

                <Image src={ pokemon.sprites.front_shiny } 
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />

                <Image src={ pokemon.sprites.back_shiny } 
                  alt={ pokemon.name }
                  width={ 100 }
                  height={ 100 }
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </Layout>
  )
}



export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const array = new Array(200)
  const pokemons200 = [...array].map(( arr, index) => `${ index + 1}`)
  console.log({pokemons200})
  return {
    paths: pokemons200.map( id => ({
      params: { id }
    })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params as { id: string};
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);
  

  return {
    props: {
      pokemon: data,
    }
  }
}

export default PokemonPage;

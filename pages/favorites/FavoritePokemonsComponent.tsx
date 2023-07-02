
import { Grid, Card, Link } from '@nextui-org/react';
import { useRouter } from 'next/router'
import React from 'react'
import { FC } from 'react'

interface Props {
  favorite: number[]
}

export const FavoritePokemonsComponent: FC<Props> = ({ favorite }) => {

  const router = useRouter()
  const onFavoriteClicked = ( id : number ) => {
    // router
    router.push(`/pokemon/${ id }`);
  }

  return (
    <Grid.Container gap={ 2 } direction='row' justify='flex-start'
    
    >
      {
      favorite.map( id => (
        <Grid key={ id } xs={ 6 } sm={ 3 } md={ 2 } xl={ 1 } 
        onClick={ () => onFavoriteClicked(id) }
        >
          <Card hoverable clickable css={{ padding: 10 }}>
            <Card.Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${ id }.svg`}
              width={'100%'}
              height={ 140 }
            />
          </Card>
        </Grid>
      ))
    }
  </Grid.Container>
  )
}

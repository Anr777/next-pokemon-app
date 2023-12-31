import { useTheme, Text, Spacer, Link } from "@nextui-org/react"
import Image from "next/image"
import NextLink from "next/link"


export const Navbar = () => {

  const { theme } = useTheme()

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0px 0px',
      backgroundColor: theme?.colors.gray900.value,
    }}>
      <Image 
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        alt='inoco de la app'
        width={ 70 }
        height={ 70 }
      />
      
        {/* <NextLink href="/"> */}
          <Link href="/">
            <Text color='white' h2>P</Text>
            <Text color='white' h3>okémon</Text>
          </Link>
        {/* </NextLink> */}
      

      <Spacer css={{
        flex: 1
      }} />
      
        {/* <NextLink href='/'> */}
          <Link href='/favorites' css={{ marginRight: '10px' }}>
            <Text color='white'>Favoritos</Text>
          </Link>
        {/* </NextLink> */}
      
    </div>
  )
}

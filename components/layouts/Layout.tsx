
import Head from 'next/head'
import { title } from 'process'
import React, { FC, PropsWithChildren, ReactNode } from 'react'
import { Navbar } from '../ui';

interface Props  {
  children: ReactNode;
  title?: string
}

export const Layout: FC<Props> = ({ children, title }) => {


  return (
    <>
      <Head>
        <title>{ title || 'Pokemon' }</title>
        <meta name='author' content='Anibal Mancilla' />
        <meta name='description' content='Informacion sobre el pokemon XXXXX'/>
        <meta name='keywords' content={ `${ title }, pokemon, pokedex`} />
      </Head>

      {
        /**Navbar */
      }

      <Navbar />

      <main style={{
        padding: '0px 20px'
      }}>
        { children }
      </main>
    </>
  )
}

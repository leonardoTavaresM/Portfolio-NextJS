import Head from 'next/head'
import Navbar from '../navbar.js'
import NoSsr from '../no-ssr.js'
import { Box, Container } from '@chakra-ui/react'
import VoxelDog from '../voxel-samoyed.js'
import Footer from '../footer.js'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Leonardo's homepage" />
        <link
          rel="shortcut icon"
          href="/favicon-16x16.png"
          type="image/x-icon"
        />
        <meta name="author" content="Leonardo Tavares" />
        <title>Leonardo Tavares - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <VoxelDog />
        </NoSsr>
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main

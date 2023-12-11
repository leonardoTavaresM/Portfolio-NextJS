import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
  List,
  ListItem,
  Icon,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'

import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          md={6}
          align="center"
        >
          Hellow, i&apos;m a front-end developer based in Brazil!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Leonardo Tavares
            </Heading>
            <p>Front-end Developer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/Leonardo.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Leonardo is a front-end developer based in São Paulo and passionate
            about technology and programming. He has skills to develop products,
            from participating in projects and solving problems. When he&apos;s
            not online, he loves playing with friends, going out drinking or
            walking his Samoyed. Currently works at Apto.vc
          </Paragraph>
          <Box align="center" my={4}>
            <Link as={NextLink} href="/projects">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </Link>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1998</BioYear>
            Born in São Paulo, Brazil.
          </BioSection>
          <BioSection>
            <BioYear>2015</BioYear>
            Completed the machining mechanics course at SENAI.
          </BioSection>
          <BioSection>
            <BioYear>2015</BioYear>
            Sponsored by Mercedes-Benz Brasil with SENAI.
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Completed the Mechanical Technician at SENAI.
          </BioSection>
          <BioSection>
            <BioYear>2017 to 2021</BioYear>
            Worked at Falcare equipment.
          </BioSection>
          <BioSection>
            <BioYear>2021 to present</BioYear>
            Working at{' '}
            <Link target="_blank" href="https://apto.vc">
              {' '}
              Apto.vc
            </Link>
          </BioSection>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>Art, Music, Drawing, Game and Ozzy (My Dog)</Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/leonardoTavaresM" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @leonardoTavaresM
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/leonardotavaresm/"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoLinkedin} />}
                >
                  @Leonardo Tavares
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="https://www.twitter.com/leoTdevelopper"
                target="_blank"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @LeoTdevelopper
                </Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page

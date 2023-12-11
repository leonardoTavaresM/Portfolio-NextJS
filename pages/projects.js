import { Container, Heading, SimpleGrid, Divider } from '@chakra-ui/react'

import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbSocialDogs from '../public/images/works/thumbSocialDogs.JPG'
import thumbAptovc from '../public/images/works/thumbAptovc.JPG'
import thumbAptoVcCheckout from '../public/images/works/thumbAptoVcCheckout.JPG'
import Layout from '../components/layouts/article'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Projects
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="dogs"
              title="Social Network Dogs"
              thumbnail={thumbSocialDogs}
            >
              A social network for dogs made as an origamid course project
            </WorkGridItem>
          </Section>
        </SimpleGrid>
        <Section delay={0.2}>
          <Divider my={6} />
          <Heading as="h3" fontSize={20} mb={4}>
            Collaborations
          </Heading>
        </Section>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.3}>
            <WorkGridItem id="aptovc" thumbnail={thumbAptovc} title="Apto.vc">
              A portal for real estate launches based in Brazil
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="Aptovc-checkout"
              thumbnail={thumbAptoVcCheckout}
              title="Apto.vc checkout"
            >
              APTO.VC payment system using vindi
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works

import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Social Dogs">
      <Container>
        <Title>
          Apto.vc <Badge>2022</Badge>
        </Title>
        <P>
          Apto is a real estate launch platform throughout Brazil. Wherever
          there is new construction going up, the Apartment will be there.
        </P>
        <P>
          He works on the development team, creating new features, applying SEO
          and performance improvements and solving problems and bugs
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://www.apto.vc/">
              https://www.apto.vc/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>NextJS, Styled Components, TypeScript </span>
          </ListItem>
        </List>
        <WorkImage src="/images/works/thumbAptoVc.jpg" alt="social Dog" />
        <WorkImage src="/images/works/aptoVcRealty.jpg" alt="social Dog" />
      </Container>
    </Layout>
  )
}

export default Work

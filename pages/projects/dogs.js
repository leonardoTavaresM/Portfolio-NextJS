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
          Social Dogs <Badge>2022</Badge>
        </Title>
        <P>
          A social network for dogs made as an origamid course project. A simple
          social network in single page application with posts, feed, login and
          authentication
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://social-network-dogs.vercel.app/">
              https://social-network-dogs.vercel.app/
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>ReactJS, Css Modules </span>
          </ListItem>
        </List>
        <WorkImage
          src="/images/projects/thumbSocialDogs.jpg"
          alt="social Dog"
        />
        <WorkImage src="/images/projects/socialDogs_02.jpg" alt="social Dog" />
      </Container>
    </Layout>
  )
}

export default Work

import Link from 'next/link'
import { Image, Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
// import FootprintIcon from './icons/footprint'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 40px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`

const OzzyImage = styled(Image)`
  width: 25px;
  height: 26px;
  border: 1px solid #fff;
  border-radius: 50%;
`

const Ozzy = () => {
  return <OzzyImage src="./images/ozzy-32bits.jpg" alt="ozzy image" />
}

const Logo = () => {
  return (
    <Link href="/">
      <LogoBox>
        <Ozzy />
        {/* <FootprintIcon /> */}
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily="M PLUS Rounded 1c"
          fontWeight="bold"
          ml={3}
        >
          Leonardo Tavares
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo

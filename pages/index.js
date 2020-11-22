import { NextSeo } from 'next-seo'
import styled from '@emotion/styled'
import Image from 'next/image'
import { device, H2, space, H1, color, Text } from '@ticketswap/solar'
import { themeColor } from '~/theme'
import NextLink from 'next/link'
import Particles from '~/components/Particles'

const Header = styled.header`
  background-color: ${color.nova};
  flex-direction: column;
  position: relative;
  padding: 48px;

  @media ${device.tablet} {
    padding: 64px;
  }

  @media ${device.laptop} {
    padding: 128px;
    min-height: 100vh;
  }
`

const Profile = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  text-align: left;
  margin-bottom: 16px;
  gap: ${space[8]};

  @media ${device.tablet} {
    gap: ${space[16]};
    align-items: center;
    flex-direction: row;
    text-align: left;
  }
`

const ProfileText = styled(H1)`
  @media ${device.tablet} {
    font-size: 36px;
  }

  @media ${device.laptop} {
    font-size: 48px;
  }
`

const ProfilePicture = styled(Image)`
  border-radius: 50%;
`

const JobTag = styled.span`
  color: ${themeColor.primary};
  display: block;

  @media ${device.tablet} {
    margin-top: -8px;
  }
`

const Title = styled(H2)`
  word-break: keep-all;
  hyphens: none;

  @media ${device.tablet} {
    font-size: 56px;
    font-weight: 900;
  }

  @media ${device.laptop} {
    margin-top: 24px;
    font-size: 84px;
  }
`

const Link = styled.a`
  color: ${themeColor.primary};
`

const Links = styled.div`
  margin-top: ${space[24]};
`

const WorkSection = styled.div`
  position: relative;
`

const Case = styled.div`
  background-color: ${props => props.bg};
  padding: 48px;

  @media ${device.tablet} {
    padding: 64px;
  }

  @media ${device.laptop} {
    padding: 128px;
    min-height: 100vh;
  }
`

const CaseTitle = styled(H2)`
  color: ${color.nova};
  margin-bottom: ${space[8]};

  @media ${device.tablet} {
    font-size: 56px;
    font-weight: 900;
  }
`

const CaseText = styled(Text)`
  color: white;
  margin-bottom: ${space[24]};

  a {
    color: white;
  }

  @media ${device.laptop} {
    max-width: 768px;
  }

  @media ${device.laptopM} {
    max-width: 1024px;
  }
`

const CaseImage = styled(Image)`
  border-radius: 12px;
`

const CaseDLFImage = styled(CaseImage)`
  border: 2px solid ${color.nova} !important;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`

const Work = () => {
  return (
    <WorkSection>
      <Case bg={'#55b4fa'}>
        <CaseTitle>MyBucky</CaseTitle>
        <CaseText as="p">
          Interaction Design / Front-end development / Next.js / Tailwind CSS / React Native
        </CaseText>
        <CaseDLFImage
          style="border: 2px solid white;"
          width={3840}
          height={1844}
          src="/img/cases/mybucky.png"
          alt="Interaction Design for MyBucky"
        />
      </Case>
      <Case bg={'#f9503b'}>
        <CaseTitle>Dutch Laravel Foundation</CaseTitle>
        <CaseText as="p">Front-end development / Laravel / Blade / SCSS</CaseText>
        <CaseDLFImage
          style="border: 2px solid white;"
          width={3840}
          height={1844}
          src="/img/cases/dutch-laravel-foundation.png"
          alt="Dutch Laravel Foundation Homepage"
        />
      </Case>
      <Case bg={color.earth}>
        <CaseTitle>TicketSwap</CaseTitle>
        <CaseText as="p">Front-end development / Next.js / Emotion / GraphQL</CaseText>
        <CaseImage
          width={3840}
          height={1844}
          src="/img/cases/ticketswap.png"
          alt="TicketSwap Homepage"
        />
      </Case>
    </WorkSection>
  )
}

export default function Home() {
  return (
    <>
      <NextSeo
        title="Glenn Gijsberts | Front-end developer"
        openGraph={{
          title: 'Glenn Gijsberts | Front-end developer',
          site_name: 'Glenn Gijsberts Portfolio',
        }}
      />

      <Particles />

      <Header>
        <Profile>
          <ProfilePicture
            src="/glenngijsberts.jpg"
            alt="Picture of Glenn Gijsberts"
            width={120}
            height={120}
          />
          <ProfileText>
            {/* Glenn Gijsberts <JobTag>Front-end developer</JobTag> */}
            Glenn Gijsberts
          </ProfileText>
        </Profile>

        <Title>
          Hey! I am a front-end developer from The Hague. Currently working for{' '}
          <Link href="https://www.ticketswap.com" target="_blank">
            TicketSwap
          </Link>{' '}
          in Amsterdam.
        </Title>

        {/* <Links>
          <NextLink href="">
            <Link>About me &rarr;</Link>
          </NextLink>
        </Links> */}
      </Header>

      {/* <Work /> */}
    </>
  )
}

import styled, { css } from "styled-components";
import media from "styled-media-query";

type ImageURL = {
  image_url: string;
}

type Dark = {
  dark?: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`

export const SectionTitleContainer = styled.div`
  display: flex;
  justify-content: left;
  margin-top: 2rem;
  margin-bottom: 4rem;
`

export const SectionTitle = styled.h2<Dark>`
  font-size: 2rem;
  ${props => props.dark ? css`
    color: ${({theme}) => theme.colors.dark};
  ` : css`
    color: ${({theme}) => theme.colors.light};
  `};
  text-transform: uppercase;
  font-weight: 300;

  ${media.greaterThan("medium")`
    font-size: 2.5rem;
  `}

  ${media.greaterThan("medium")`
    font-size: 2.8rem;
  `}
`

// WELCOME SECTION

export const WelcomeSection = styled.section<ImageURL>`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: url(${({ image_url }) => image_url});
  background-size: cover;
  background-position-x: 50%;

  ${media.greaterThan("medium")`
    padding: 2rem;
  `}
`

export const NavBar = styled.nav`
  display: flex;
  justify-content: left;
  align-items: center;
`

export const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12rem;
  height: 4.5rem;
  border: 1px solid ${({theme}) => theme.colors.gray};
  border-radius: 3rem;
  background-color: ${({theme}) => theme.colors.light};
`

export const Logo = styled.img`
  width: 8rem;
`

// TEAM SECTION

export const TeamsSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.gray_light};
  padding: 1.5rem;
`

export const TeamsContainerGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(2, 1fr);
  transition: all 500ms;

  ${media.greaterThan("small")`
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  `}

  ${media.greaterThan("medium")`
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 3rem;
  `}

  ${media.greaterThan("large")`
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 3rem;
  `}
`

// GROUPS SECTION

export const GroupsSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background-color: ${({theme}) => theme.colors.catar};

  ${media.greaterThan("medium")`
    padding: 2rem;
  `}
`

export const GroupsContainerGrid = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(1, 1fr);
  transition: all 500ms;

  ${media.greaterThan("small")`
    grid-template-columns: repeat(2, 1fr);
  `}

  ${media.greaterThan("medium")`
    grid-template-columns: repeat(3, 1fr);
  `}

  ${media.greaterThan("large")`
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1.5rem;
  `}
`

// LAST CUP PLAYERS SECTION

export const LastCupPlayersSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
  background-color: ${({theme}) => theme.colors.gray_light};

  ${media.greaterThan("medium")`
    padding: 2rem;
  `}
`

export const LastCupPlayersGrid = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;

  ${media.greaterThan("medium")`
    grid-template-columns: repeat(3, 1fr);
  `}

  ${media.greaterThan("large")`
    grid-template-columns: repeat(5, 1fr);
  `}
`

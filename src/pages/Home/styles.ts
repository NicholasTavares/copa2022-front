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
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background: url(${(props) => props.image_url});

  ${media.lessThan("large")`
    background: ${({theme}) => theme.colors.dark};
    padding: 2rem;
  `}

  ${media.greaterThan("large")`
    justify-content: flex-start;
  `}
  

  background-size: cover;
  background-position-y: 48%;
`

export const WelcomeContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  ${media.greaterThan("medium")`
    margin-top: auto;
    flex-direction: row;
    justify-content: space-between;
  `}

  ${media.greaterThan("large")`
    flex-direction: column;
    justify-content: start;
    margin-top: 0;
  `}
`

export const LogoContainer = styled.a`
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

export const Logo = styled.img`
  width: 25rem;
  filter: contrast(0%) brightness(200%) saturate(30%);

  ${media.greaterThan("small")`
    width: 30rem;
  `}

  ${media.greaterThan("large")`
    width: 34rem;
  `}
`

export const ParagraphContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 2rem;
  backdrop-filter: blur(10px);
  margin-top: 10rem;
  width: 30rem;
  height: 25rem;
  padding: 2rem;

  ${media.greaterThan("small")`
    width: 32rem;
    height: 28rem;
  `}
`

export const ParagraphTitle = styled.h2`
  color: ${({theme}) => theme.colors.light};
  font-size: 2rem;
  margin-bottom: 2rem;

  ${media.greaterThan("small")`
    font-size: 2.1rem;
  `}
`

export const Paragraph = styled.p`
  color: ${({theme}) => theme.colors.light};
  font-size: 1.8rem;

  ${media.greaterThan("small")`
    font-size: 1.9rem;
  `}
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

// MAP SECTION

export const MapSection = styled.section`
  position: relative;
  width: 100%;
  height: 50rem;
  background-color: ${({theme}) => theme.colors.gray_light};
  padding: 1.5rem;
`

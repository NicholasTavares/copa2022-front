import styled from "styled-components";
import media from "styled-media-query";

type Image = {
  image_url: string;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({theme}) => theme.colors.gray_light};
  padding: 2rem;
`

export const Header = styled.header`
  display: flex;
  margin-bottom: 2rem;
`

export const FlagImage = styled.div<Image>`
  overflow: hidden;
  height: 12.5rem;
  width: 18rem;
  border-radius: 1rem;
  border: 1px solid ${({theme}) => theme.colors.gray};
  background: url(${(props) => props.image_url});
  background-size: cover;
  background-position: center;
  margin-bottom: 0.5rem;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.24);

  ${media.greaterThan("medium")`
    height: 15rem;
    width: 19rem;
  `}

  ${media.greaterThan("large")`
    height: 16rem;
    width: 21rem;
  `}
`
export const HeaderInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`

export const HeaderInformation = styled.span`
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
`

export const GroupTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  padding: 0.4rem 0.8rem;
  border: 1px solid ${({theme}) => theme.colors.dark_light};
  background-color: ${({theme}) => theme.colors.catar};
  color: ${({theme}) => theme.colors.light};
  font-weight: bold;
  border-radius: 2rem;
  font-size: 1.2rem;
`

export const MoreInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const ScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
`

export const Score = styled.span`
  font-size: 1.6rem;

  &:not(:last-child) {
    margin-bottom: 0.5rem;
  }
`

export const PlayersGamesContainer = styled.div`
  display: flex;
`

export const PlayersGamesTitleContiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  margin-bottom: 1rem;
`

export const PlayersGamesTitle = styled.h2`
  font-size: 1.6rem;
  color: ${({theme}) => theme.colors.dark};
`

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  border-right: 1px solid ${({theme}) => theme.colors.dark};
  padding: 1rem;
`

export const GamesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  padding: 1rem;
`
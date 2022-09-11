import styled, { css } from "styled-components"
import media from "styled-media-query"

type PositionTeam = {
  position: number
}

export const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  border: 1px solid ${({theme}) => theme.colors.gray};
  padding: 1rem;

  ${media.greaterThan("medium")`
    padding: 1.2rem;
  `}

  ${media.greaterThan("large")`
    padding: 1.4rem;
  `}
`

export const GroupTitle = styled.div`
  display: flex;
  justify-content: left;
  font-size: 1.5rem;
  color: ${({theme}) => theme.colors.dark};
  margin-bottom: 0.5rem;
  font-weight: bold;

  ${media.greaterThan("medium")`
    font-size: 1.6rem;
    margin-bottom: 0.8rem;
  `}

  ${media.greaterThan("large")`
    font-size: 1.8rem;
    margin-bottom: 0.8rem;
  `}
`

export const GroupTeamContainer = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 0.5rem;

  ${media.greaterThan("medium")`
    margin-bottom: 0.8rem;
  `}
  }
`

export const GroupTeamPosition = styled.span<PositionTeam>`
  font-size: 1.5rem;
  margin-right: 1rem;

  ${media.greaterThan("medium")`
    font-size: 1.8rem;
    margin-right: 1.2rem;
  `}

  ${props => (props.position === 1 || props.position === 2) ? css`
    color: ${({theme}) => theme.colors.green};
  ` : css`
    color: ${({theme}) => theme.colors.red};
  `};
`

export const GroupTeamCountry = styled.span`
  font-size: 1.5rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  ${media.greaterThan("medium")`
    font-size: 1.6rem;
  `}

  ${media.greaterThan("large")`
    font-size: 1.8rem;
  `}
`

export const GroupTeamScore = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background-color: ${({theme}) => theme.colors.dark};
  color: ${({theme}) => theme.colors.light};
  font-weight: bold;
  font-size: 1.5rem;
  margin-left: auto;

  ${media.greaterThan("medium")`
    font-size: 1.6rem;
    width: 2.8rem;
    height: 2.8rem;
  `}

  ${media.greaterThan("large")`
    font-size: 1.8rem;
    width: 3rem;
    height: 3rem;
  `}
`
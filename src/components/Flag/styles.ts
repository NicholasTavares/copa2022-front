import styled from "styled-components";
import media from "styled-media-query";

type Image = {
  image_url: string
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
`

export const FlagImage = styled.div<Image>`
  overflow: hidden;
  height: 12.5rem;
  border-radius: 1rem;
  border: 1px solid ${({theme}) => theme.colors.gray};
  background: url(${(props) => props.image_url});
  background-size: cover;
  margin-bottom: 0.5rem;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.24);

  ${media.greaterThan("medium")`
    height: 15rem;
  `}

  ${media.greaterThan("large")`
    height: 16rem;
  `}
`

export const CountryName = styled.span`
  font-size: 1.2rem;
  color: ${({theme}) => theme.colors.dark};

  ${media.greaterThan("medium")`
    font-size: 1.4rem;
  `}
`
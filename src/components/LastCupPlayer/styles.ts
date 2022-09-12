import styled from "styled-components";
import media from "styled-media-query";

type Image = {
  image_url: string
}

export const Container = styled.div<Image>`
  position: relative;
  overflow: hidden;
  border-radius: 2rem;
  border: 1px solid ${({theme}) => theme.colors.gray};
  width: 18rem;
  height: 28rem;
  background: url(${(props) => props.image_url});
  background-size: cover;
  background-position: center;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.24);

  ${media.greaterThan("small")`
    width: 20rem;
    height: 30rem;
  `}

  ${media.greaterThan("medium")`
    width: 22rem;
    height: 34rem;
  `}

  ${media.greaterThan("large")`
    height: 35rem;
  `}
`

export const NameContainer = styled.div`
  position: absolute;
  top: 85%;
  left: 8%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem 0.5rem;
  border-radius: 0.2rem;
  background-color: ${({theme}) => theme.colors.dark_light};
`

export const NameText = styled.span`
  font-size: 1.3rem;
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.light};

  ${media.greaterThan("medium")`
    font-size: 1.5rem;
  `}
`
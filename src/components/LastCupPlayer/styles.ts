import styled from "styled-components";
import media from "styled-media-query";

type Image = {
  image_url: string
}

type Darker = {
  darker?: boolean;
}

export const Container = styled.div`
  perspective: 150rem;
  position: relative;
  width: 18rem;
  height: 28rem;

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

export const CardFront = styled.div<Image>`
  position: relative;
  border-radius: 2rem;
  border: 1px solid ${({theme}) => theme.colors.gray};
  height: 100%;
  width: 100%;
  background: url(${(props) => props.image_url});
  background-size: cover;
  background-position: center;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.24);

  transition: all .8s ease;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  overflow: hidden;

  ${Container}:hover & {
    transform: rotateY(-180deg);
  }
`

export const CardBack = styled.div<Image>`
  position: relative;
  border-radius: 2rem;
  border: 1px solid ${({theme}) => theme.colors.gray};
  background: url(${(props) => props.image_url});
  background-size: cover;
  background-position: center;
  box-shadow: 2px 4px 10px 1px rgba(0, 0, 0, 0.24);
  filter: grayscale(100%);
  background-blend-mode: saturation;

  height: 100%;
  width: 100%;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: all .8s ease;
  position: absolute;
  top: 0;
  left: 0;
  backface-visibility: hidden;
  overflow: hidden;

  ${Container}:hover & {
    transform: rotateY(0);
  }
`


export const NameContainer = styled.div`
  position: absolute;
  top: 82%;
  left: 8%;
  display: flex;
  flex-direction: column;
`

export const DetailText = styled.span<Darker>`
  font-size: 1.3rem;
  text-transform: uppercase;
  color: ${({theme}) => theme.colors.light};
  background-color: ${(props) => props.darker ? props.theme.colors.catar : props.theme.colors.dark_light};
  padding: 0.2rem 0.5rem;
  border-radius: 0.2rem;
  
  &:not(:last-child){
    margin-bottom: 0.2rem;
  }

  ${media.greaterThan("medium")`
    font-size: 1.5rem;
  `}
`
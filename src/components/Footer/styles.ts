import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: ${({theme}) => theme.colors.dark_light};
  padding: 2rem;
`

export const FooterCopyright = styled.span`
  font-size: 1.5rem;
  color: ${({theme}) => theme.colors.light};
  font-weight: 300;
`
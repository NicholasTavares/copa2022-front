import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem;
  background-color: ${({theme}) => theme.colors.light};
  border: 1px solid ${({theme}) => theme.colors.dark_light};
  border-radius: 1rem;
  width: 100%;
  max-width: 15rem;

  &:not(:last-child){
    margin-bottom: 0.5rem;
  }
`

export const Text = styled.span`
  font-size: 1.4rem;
`
import styled from "styled-components";

export const Container = styled.div`
  padding: 1rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 130%;
  right: 0;
  width: 16rem;
  border-radius: 1rem;
  border: 1px solid ${({theme}) => theme.colors.gray};
  background-color: ${({theme}) => theme.colors.light};
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: left;
`

export const Title = styled.h3`
  font-size: 1.4rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;
`

export const InputField = styled.input`
  padding: 0.5rem 0.5rem;
  width: 100%;
  border-radius: 1rem;
  border: 1px solid ${({theme}) => theme.colors.gray};
  background-color: ${({theme}) => theme.colors.light};
  outline: none;
  font-size: 1.2rem;
`

export const InputButton = styled.input`
  cursor: pointer;
  padding: 0.5rem 0.5rem;
  border-radius: 1rem;
  border: 1px solid ${({theme}) => theme.colors.gray};
  background-color: ${({theme}) => theme.colors.light};
  outline: none;
  font-size: 1.2rem;
  margin-top: 2rem;
`

export const ErrorMessage = styled.p`
  font-size: 1.2rem;
`
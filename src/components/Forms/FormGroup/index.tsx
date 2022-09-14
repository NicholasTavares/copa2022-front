import React from "react";
import * as S from "./styles";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AppDispatch } from "../../../redux/store";
import { useDispatch } from "react-redux";
import { group } from "../../../redux/groupSlice";

type Input = {
  group_name: string;
};

const schema = yup.object().shape({
  group_name: yup
    .string()
    .max(1, "Nome grupo é apenas uma letra do alfabeto")
    .required("Nome do grupo é obrigatório"),
});

const FormGroup: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Input>({ resolver: yupResolver(schema) });
  const onSubmit: SubmitHandler<Input> = async ({ group_name }) => {
    dispatch(group({ name: group_name }));
    reset();
  };
  return (
    <S.Container>
      <S.TitleContainer>
        <S.Title>Adicionar Grupo</S.Title>
      </S.TitleContainer>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.InputField
          type="text"
          {...register("group_name", { required: true, maxLength: 1 })}
          placeholder="A"
        />
        {errors.group_name && (
          <S.ErrorMessage>
            Insira uma letra válida para o nome do grupo.
          </S.ErrorMessage>
        )}
        <S.InputButton type="submit" value="Cadastrar grupo" />
      </S.Form>
    </S.Container>
  );
};

export default FormGroup;

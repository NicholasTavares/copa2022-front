import React from "react";
import * as S from "./styles";

type LastCupPlayerProps = {
  image_url: string;
  name: string;
  team: string;
  age: string;
};

const LastCupPlayer: React.FC<LastCupPlayerProps> = ({
  image_url,
  name,
  team,
  age,
}) => {
  return (
    <S.Container>
      <S.CardFront image_url={image_url}>
        <S.NameContainer>
          <S.DetailText>{name}</S.DetailText>
        </S.NameContainer>
      </S.CardFront>
      <S.CardBack image_url={image_url}>
        <S.NameContainer>
          <S.DetailText darker>{team}</S.DetailText>
          <S.DetailText darker>{age} anos</S.DetailText>
        </S.NameContainer>
      </S.CardBack>
    </S.Container>
  );
};

export default LastCupPlayer;

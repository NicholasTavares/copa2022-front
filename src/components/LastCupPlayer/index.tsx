import React from "react";
import * as S from "./styles";

type LastCupPlayerProps = {
  image_url: string;
  name: string;
};

const LastCupPlayer: React.FC<LastCupPlayerProps> = ({ image_url, name }) => {
  return (
    <S.Container image_url={image_url}>
      <S.NameContainer>
        <S.NameText>{name}</S.NameText>
      </S.NameContainer>
    </S.Container>
  );
};

export default LastCupPlayer;

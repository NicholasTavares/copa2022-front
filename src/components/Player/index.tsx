import React from "react";
import * as S from "./styles";

type PlayerProps = {
  name: string;
  shirt: number;
};

const Player: React.FC<PlayerProps> = ({ name, shirt }) => {
  return (
    <S.Container>
      <S.Text>
        {name} | {shirt}
      </S.Text>
    </S.Container>
  );
};

export default Player;

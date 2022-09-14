import React from "react";
import * as S from "./styles";

type FlagProps = {
  image_url: string;
  country_name?: string;
};

const Flag: React.FC<FlagProps> = ({ image_url, country_name }) => {
  return (
    <S.Container>
      <S.FlagImage
        image_url={"http://localhost:3002/teams/images/" + image_url}
      />
      <S.CountryName>{country_name}</S.CountryName>
    </S.Container>
  );
};

export default Flag;

import React from "react";
import * as S from "./styles";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <S.Container>
      <S.FooterCopyright>World Cup Catar © {year}</S.FooterCopyright>
    </S.Container>
  );
};

export default Footer;

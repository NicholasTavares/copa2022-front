import React from "react";
import * as S from "./styles";
import logo from "../../assets/logo.svg";
import backgroundWelcome from "../../assets/catar_sea.jpg";
import Group from "../../components/Group";
import test from "./test.json";
import LastCupPlayer from "../../components/LastCupPlayer";
import Flag from "../../components/Flag";
import CatarFlag from "../../assets/Estados_Unidos.svg";

const Home: React.FC = () => {
  return (
    <S.Container>
      <S.WelcomeSection image_url={backgroundWelcome}>
        <S.NavBar>
          <S.LogoContainer href="https://www.qatar2022.qa/">
            <S.Logo
              src={logo}
              alt="Imagem de barco no mar com bandeira do Catar e prédios ao fundo."
            />
          </S.LogoContainer>
        </S.NavBar>
      </S.WelcomeSection>

      <S.TeamsSection>
        <S.SectionTitleContainer>
          <S.SectionTitle dark>Seleções participantes</S.SectionTitle>
        </S.SectionTitleContainer>
        <S.TeamsContainerGrid>
          <Flag image_url={CatarFlag} country_name="Catar" />
          <Flag image_url={CatarFlag} country_name="Catar" />
          <Flag image_url={CatarFlag} country_name="Catar" />
          <Flag image_url={CatarFlag} country_name="Catar" />
          <Flag image_url={CatarFlag} country_name="Catar" />
          <Flag image_url={CatarFlag} country_name="Catar" />
          <Flag image_url={CatarFlag} country_name="Catar" />
          <Flag image_url={CatarFlag} country_name="Catar" />
          <Flag image_url={CatarFlag} country_name="Catar" />
        </S.TeamsContainerGrid>
      </S.TeamsSection>

      <S.GroupsSection>
        <S.SectionTitleContainer>
          <S.SectionTitle>Grupos</S.SectionTitle>
        </S.SectionTitleContainer>
        <S.GroupsContainerGrid>
          {test.map((group) => (
            <Group group_name={group.name} teams={group.teams} key={group.id} />
          ))}
        </S.GroupsContainerGrid>
      </S.GroupsSection>

      <S.LastCupPlayersSection>
        <S.SectionTitleContainer>
          <S.SectionTitle dark>Última Copa</S.SectionTitle>
        </S.SectionTitleContainer>
        <S.LastCupPlayersGrid>
          <LastCupPlayer
            name="Thiago Silva"
            image_url="https://i.pinimg.com/564x/49/0a/27/490a27a752ff1b1f70189bacbabb83d8.jpg"
          />
          <LastCupPlayer
            name="Edinson Cavani"
            image_url="https://i.pinimg.com/564x/47/13/75/4713759b70a5c3989d2d8b5c89d2b45d.jpg"
          />
          <LastCupPlayer
            name="Ángel Di Maria"
            image_url="https://i.pinimg.com/564x/21/7c/ba/217cba954741d3c8254a7bb17398e84d.jpg"
          />
          <LastCupPlayer
            name="Sérgio Ramos"
            image_url="https://i.pinimg.com/564x/9d/ab/f5/9dabf58bc37e3317f2157c1bdcc95e39.jpg"
          />
          <LastCupPlayer
            name="Manuel Neuer"
            image_url="https://i.pinimg.com/236x/de/66/6b/de666ba79f30c03fefe9d8a44eac2efe.jpg"
          />

          <LastCupPlayer
            name="Luís Suares"
            image_url="https://i.pinimg.com/236x/25/b1/06/25b1061f24b52b38a585f2560f6c69f9.jpg"
          />

          <LastCupPlayer
            name="Karim Benzema"
            image_url="https://i.pinimg.com/236x/93/ad/29/93ad29ac94ca9cd6adfef6303161dc36.jpg"
          />

          <LastCupPlayer
            name="Thomas Müller"
            image_url="https://i.pinimg.com/236x/1b/31/6e/1b316ee0bb5851e43f6951c50136de96.jpg"
          />

          <LastCupPlayer
            name="Thiago Alcântara"
            image_url="https://i.pinimg.com/236x/b0/48/a4/b048a41310ac318439f1a991065f201c.jpg"
          />

          <LastCupPlayer
            name="Lorenzo Insigne"
            image_url="https://i.pinimg.com/236x/7e/ac/6c/7eac6cb25c0f402ff1ff6b3ca4ca5d3a.jpg"
          />
        </S.LastCupPlayersGrid>
      </S.LastCupPlayersSection>
    </S.Container>
  );
};

export default Home;

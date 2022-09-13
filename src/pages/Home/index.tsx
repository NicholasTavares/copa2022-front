import React from "react";
import * as S from "./styles";
import logo from "../../assets/logo.svg";
import Group from "../../components/Group";
import test from "./test.json";
import LastCupPlayer from "../../components/LastCupPlayer";
import qatar_stadium from "../../assets/background/qatar_stadium.jpg";
import Flag from "../../components/Flag";
import CatarFlag from "../../assets/Estados_Unidos.svg";
import Map from "../../components/Map/index";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { getTeam } from "../../redux/teamSlice";

const Home: React.FC = () => {
  const teams = useSelector((state: RootState) => state.team.getTeam);
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(getTeam({ id: "abb31d5a-4041-407f-9b58-b5c3cb79a923" }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(teams);

  return (
    <S.Container>
      <S.WelcomeSection image_url={qatar_stadium}>
        <S.WelcomeContainer>
          <S.LogoContainer href="https://www.qatar2022.qa/">
            <S.Logo src={logo} />
          </S.LogoContainer>
          <S.ParagraphContainer>
            <S.ParagraphTitle>
              Está chegando a Copa do Mundo 2022!
            </S.ParagraphTitle>
            <S.Paragraph>
              Confira os principais detalhes da copa do Catar. Seleções, fase
              grupos, curiosidades e explore a localidade!
            </S.Paragraph>
          </S.ParagraphContainer>
        </S.WelcomeContainer>
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
            team="Brasil"
            age="38"
            image_url="https://i.pinimg.com/564x/49/0a/27/490a27a752ff1b1f70189bacbabb83d8.jpg"
          />
          <LastCupPlayer
            name="Edinson Cavani"
            team="Uruguai"
            age="35"
            image_url="https://i.pinimg.com/564x/47/13/75/4713759b70a5c3989d2d8b5c89d2b45d.jpg"
          />
          <LastCupPlayer
            name="Ángel Di Maria"
            team="Argentina"
            age="34"
            image_url="https://i.pinimg.com/564x/21/7c/ba/217cba954741d3c8254a7bb17398e84d.jpg"
          />
          <LastCupPlayer
            name="Sérgio Ramos"
            team="Espanha"
            age="36"
            image_url="https://i.pinimg.com/564x/9d/ab/f5/9dabf58bc37e3317f2157c1bdcc95e39.jpg"
          />
          <LastCupPlayer
            name="Manuel Neuer"
            team="Alemanha"
            age="36"
            image_url="https://i.pinimg.com/236x/de/66/6b/de666ba79f30c03fefe9d8a44eac2efe.jpg"
          />

          <LastCupPlayer
            name="Luís Suares"
            team="Uruguai"
            age="35"
            image_url="https://i.pinimg.com/236x/25/b1/06/25b1061f24b52b38a585f2560f6c69f9.jpg"
          />

          <LastCupPlayer
            name="Karim Benzema"
            team="França"
            age="34"
            image_url="https://i.pinimg.com/236x/93/ad/29/93ad29ac94ca9cd6adfef6303161dc36.jpg"
          />

          <LastCupPlayer
            name="Thomas Müller"
            team="Alemanha"
            age="33"
            image_url="https://i.pinimg.com/236x/1b/31/6e/1b316ee0bb5851e43f6951c50136de96.jpg"
          />

          <LastCupPlayer
            name="Thiago Alcântara"
            team="Espanha"
            age="31"
            image_url="https://i.pinimg.com/236x/b0/48/a4/b048a41310ac318439f1a991065f201c.jpg"
          />

          <LastCupPlayer
            name="Lorenzo Insigne"
            team="Itália"
            age="31"
            image_url="https://i.pinimg.com/236x/7e/ac/6c/7eac6cb25c0f402ff1ff6b3ca4ca5d3a.jpg"
          />
        </S.LastCupPlayersGrid>
      </S.LastCupPlayersSection>

      <S.MapSection>
        <S.SectionTitleContainer>
          <S.SectionTitle dark>Explore a área</S.SectionTitle>
        </S.SectionTitleContainer>
        <Map />
      </S.MapSection>

      <Footer />
    </S.Container>
  );
};

export default Home;

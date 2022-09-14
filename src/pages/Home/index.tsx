import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import * as S from "./styles";
import logo from "../../assets/logo.svg";
import Group from "../../components/Group";
import LastCupPlayer from "../../components/LastCupPlayer";
import qatar_stadium from "../../assets/background/qatar_stadium.jpg";
import Flag from "../../components/Flag";
import Map from "../../components/Map/index";
import Footer from "../../components/Footer";
import data_players from "../../components/LastCupPlayer/data.json";
import { AppDispatch, RootState } from "../../redux/store";
import { getAllGroups } from "../../redux/groupSlice";
import { AiOutlinePlus } from "react-icons/ai";
import FormGroup from "../../components/Forms/FormGroup";
import { AddGroupButton } from "./styles";

const Home: React.FC = () => {
  const groups = useSelector((state: RootState) => state.group.getAllGroups);
  const dispatch = useDispatch<AppDispatch>();
  const [showGroupForm, setShowGroupForm] = React.useState(false);
  const [showTeamForm, setTeamGroupForm] = React.useState(false);

  React.useEffect(() => {
    dispatch(getAllGroups());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <AddGroupButton onClick={() => setTeamGroupForm(!showTeamForm)}>
            <AiOutlinePlus />
          </AddGroupButton>
        </S.SectionTitleContainer>
        <S.TeamsContainerGrid>
          {groups.length > 1 &&
            groups.map((group) =>
              group.teams.map((team) => (
                <S.TeamLink to={`teams/${team.id}`}>
                  <Flag
                    key={team.id}
                    image_url={team.image}
                    country_name={team.country}
                  />
                </S.TeamLink>
              ))
            )}
        </S.TeamsContainerGrid>
      </S.TeamsSection>

      <S.GroupsSection>
        <S.SectionTitleContainer>
          <S.SectionTitle>Grupos</S.SectionTitle>
          <AddGroupButton onClick={() => setShowGroupForm(!showGroupForm)}>
            <AiOutlinePlus />
          </AddGroupButton>
          {showGroupForm && <FormGroup />}
        </S.SectionTitleContainer>
        <S.GroupsContainerGrid>
          {groups.length > 1 &&
            groups.map((group) => (
              <Group
                group_name={group.name}
                teams={group.teams}
                key={group.id}
              />
            ))}
        </S.GroupsContainerGrid>
      </S.GroupsSection>

      <S.LastCupPlayersSection>
        <S.SectionTitleContainer>
          <S.SectionTitle dark>Última Copa</S.SectionTitle>
        </S.SectionTitleContainer>
        <S.LastCupPlayersGrid>
          {data_players.map((player) => (
            <LastCupPlayer
              key={player.name}
              name={player.name}
              team={player.team}
              age={player.age}
              image_url={player.image_url}
            />
          ))}
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

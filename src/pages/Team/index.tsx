import React from "react";
import * as S from "./styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch } from "react-redux";
import { getTeam } from "../../redux/teamSlice";
import Player from "../../components/Player";

const Team: React.FC = () => {
  const { teamId } = useParams();
  const team = useSelector((state: RootState) => state.team.getTeam);
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(getTeam({ id: teamId }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(team);
  return (
    <S.Container>
      <S.Header>
        <S.FlagImage
          image_url={`http://localhost:3002/teams/images/` + team.image}
        />
        <S.HeaderInformationContainer>
          <S.HeaderInformation>Seleção: {team.country}</S.HeaderInformation>
          <S.HeaderInformation>Técnico: {team.coach}</S.HeaderInformation>
          <S.GroupTag>Grupo {team.group_id.name}</S.GroupTag>
        </S.HeaderInformationContainer>
      </S.Header>

      <S.MoreInformationContainer>
        <S.ScoreContainer>
          <S.Score>Vitórias: {team.wins}</S.Score>
          <S.Score>Empates: {team.draws}</S.Score>
          <S.Score>Derrotas: {team.losses}</S.Score>
        </S.ScoreContainer>

        <S.PlayersGamesContainer>
          <S.PlayerContainer>
            <S.PlayersGamesTitleContiner>
              <S.PlayersGamesTitle>Jogadores</S.PlayersGamesTitle>
            </S.PlayersGamesTitleContiner>
            {team.players.map((player) => (
              <Player name={player.name} shirt={player.shirt} key={player.id} />
            ))}
          </S.PlayerContainer>

          <S.GamesContainer>
            <S.PlayersGamesTitleContiner>
              <S.PlayersGamesTitle>Jogos</S.PlayersGamesTitle>
            </S.PlayersGamesTitleContiner>
          </S.GamesContainer>
        </S.PlayersGamesContainer>
      </S.MoreInformationContainer>
    </S.Container>
  );
};

export default Team;

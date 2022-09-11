import React from "react";
import * as S from "./styles";

type ITeam = {
  id: string;
  country: string;
  coach: string;
  image: string;
  score: number;
  wins: number;
  draws: number;
  losses: number;
};

type IGroup = {
  group_name: string;
  teams: ITeam[];
};

const Group: React.FC<IGroup> = ({ group_name, teams }) => {
  return (
    <S.GroupContainer>
      <S.GroupTitle>Grupo {group_name}</S.GroupTitle>
      {teams.map((team, i) => (
        <S.GroupTeamContainer key={team.id}>
          <S.GroupTeamPosition position={i + 1}>{i + 1}</S.GroupTeamPosition>
          <S.GroupTeamCountry>{team.country}</S.GroupTeamCountry>
          <S.GroupTeamScore>{team.score}</S.GroupTeamScore>
        </S.GroupTeamContainer>
      ))}
    </S.GroupContainer>
  );
};

export default Group;

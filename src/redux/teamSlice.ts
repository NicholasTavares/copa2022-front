import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from "../services/base";

type CreateTeam = {
  country: string
  coach: string
  group_id: string
  image: any
  status?: string
}

type Player = {
  id: string,
  name: string
  shirt: number,
  created_at: string
  updated_at: string
  deleted_at: null
}

type Group = {
  id: string
  name: string
  created_at: string
  updated_at: string
  deleted_at: null
}

type Game = {
  id: string,
  description: string,
  judge: string,
  game_date: string,
  created_at: string,
  updated_at: string,
  deleted_at: null
}

type GetTeam = {
  id?: string;
}

type TeamResponse = {
  id: string
  country: string
  coach: string
  image: string
  score: number,
  wins: number,
  draws: number,
  losses: number,
  created_at: string,
  updated_at: string
  deleted_at: null,
  players: Player[]
  group_id: Group
  games_as_team_one: Game[]
  games_as_team_two: Game[]
}

interface IStateTeam {
  createTeam: CreateTeam;
  getTeam: TeamResponse;
}

const initialState: IStateTeam = {
  createTeam: {
    country: '',
    coach: '',
    group_id: '',
    image: null,
    status: '',
  },
  getTeam: {
    id: '',
    country: '',
    coach: '',
    image: '',
    score: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    created_at: '',
    updated_at: '',
    deleted_at: null,
    players: [
      {
        id: '',
        name: '',
        shirt: 0,
        created_at: '',
        updated_at: '',
        deleted_at: null
      },
    ],
    group_id: {
      id: '',
      name: '',
      created_at: '',
      updated_at: '',
      deleted_at: null
    },
    games_as_team_one: [
      {
        id: '',
        description: '',
        judge: '',
        game_date: '',
        created_at: '',
        updated_at: '',
        deleted_at: null
      }
    ],
    games_as_team_two: [
      {
        id: '',
        description: '',
        judge: '',
        game_date: '',
        created_at: '',
        updated_at: '',
        deleted_at: null
      }
    ]
  }
}

export const team = createAsyncThunk('teams/',
  async ({coach, country, group_id, image}: CreateTeam, {rejectWithValue}) => {
    const formData = new FormData()
    formData.append('coach', coach)
    formData.append('country', country)
    formData.append('group_id', group_id)
    formData.append('image', image)
    try{
      const response = await api.post('teams/', formData)
      return response.data
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

export const getTeam = createAsyncThunk('getTeam/id', async ({id}: GetTeam, {rejectWithValue}) => {
  try{
    const response = await api.get(`/teams/${id}`)
    return response.data
  } catch (err) {
    return rejectWithValue(err)
  }
})


export const slice = createSlice({
  name: 'team',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(team.pending, (state, action) => {
      state.createTeam.status = 'loading'
    })
    .addCase(team.fulfilled, (state, action) => {
      state.createTeam.status = 'succeeded'
    })
    .addCase(team.rejected, (state, action) => {
      state.createTeam.status = 'failed'
    })
    .addCase(getTeam.fulfilled, (state, action) => {
      state.getTeam = action.payload
    })
  },
})

export const selectTeam = (state: IStateTeam) => state
export default slice.reducer
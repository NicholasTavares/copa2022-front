import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from "../services/base";

type CreateGrop = {
  name: string,
  status: string
}

type Player = {
  id: string,
  name: string
  shirt: number,
  created_at: string
  updated_at: string
  deleted_at: null
}

type Team = {
  id: string,
  country: string,
  coach: string,
  image: string,
  score: number,
  wins: number,
  draws: number,
  losses: number,
  created_at: string,
  updated_at: string,
  deleted_at: null,
}

type GetGroup = {
  id: string;
}

type GroupResponse = {
  id: string
  name: string
  created_at: string
  updated_at: string
  deleted_at: null
  players: Player[]
  teams: Team[]
}

type AllGroupsResponse = {
  id: string
  name: string
  created_at: string
  updated_at: string
  deleted_at: null
  teams: Team[]
}

type IStateGroup = {
  createGroup: CreateGrop;
  getGroup: GroupResponse;
  getAllGroups: AllGroupsResponse[]
}

const initialState: IStateGroup = {
  createGroup: {
    name: '',
    status: '',
  },
  getGroup: {
    id: '',
    name: '',
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
    teams: [
      {
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
      }
    ],
  },
  getAllGroups: [
    {
      id: '',
      name: '',
      created_at: '',
      updated_at: '',
      deleted_at: null,
      teams: [
        {
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
        }
      ],
    }
  ]
}

export const group = createAsyncThunk('groups/',
  async ({name}: CreateGrop, {rejectWithValue}) => {
    try{
      const response = await api.post('groups/', name)
      return response.data
    } catch (err) {
      return rejectWithValue(err)
    }
  }
)

export const getGroup = createAsyncThunk('getGroup/id', async ({id}: GetGroup, {rejectWithValue}) => {
  try{
    const response = await api.get(`/groups/${id}`)
    return response.data
  } catch (err) {
    return rejectWithValue(err)
  }
})

export const getAllGroups = createAsyncThunk('getAllgroups/', async (_, {rejectWithValue}) => {
  try{
    const response = await api.get(`/groups`)
    return response.data
  } catch (err) {
    return rejectWithValue(err)
  }
})


export const slice = createSlice({
  name: 'group',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(group.pending, (state, action) => {
      state.createGroup.status = 'loading'
    })
    .addCase(group.fulfilled, (state, action) => {
      state.createGroup.status = 'succeeded'
    })
    .addCase(group.rejected, (state, action) => {
      state.createGroup.status = 'failed'
    })
    .addCase(getGroup.fulfilled, (state, action) => {
      state.getGroup = action.payload
    })
    .addCase(getAllGroups.fulfilled, (state, action) => {
      state.getAllGroups = action.payload
    })
  },
})

export const selectGroup = (state: IStateGroup) => state
export default slice.reducer
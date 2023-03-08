import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const MISSIONS_URL = 'https://api.spacexdata.com/v3/missions';

const initialState = [];

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const { data } = await (axios.get(MISSIONS_URL));
  return data;
});

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const newState = state.map((mission) => {
        if (mission.missionId !== action.payload) return mission;
        return { ...mission, booked: true };
      });
      return newState;
    },
    // leaveMission: (state, action) => {

    // },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchMissions.fulfilled, (state, action) => {
        const missions = action.payload.map(({
          mission_id: missionId,
          mission_name: missionName,
          description,
        }) => ({
          missionId,
          missionName,
          description,
          booked: false,
        }));
        return [...state, ...missions];
      });
  },
});

export default missionsSlice.reducer;
export const { joinMission, leaveMission } = missionsSlice.actions;

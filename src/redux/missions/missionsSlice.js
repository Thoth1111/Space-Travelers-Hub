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
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(fetchMissions.fulfilled, (state, action) => {
            const missions = action.payload.map((mission) => {
                action.payload.joined = false;
                return missions;
            });
            state = [...missions];
        })
    }
})
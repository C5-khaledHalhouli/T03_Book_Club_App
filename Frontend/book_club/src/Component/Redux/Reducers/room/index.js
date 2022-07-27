import { createSlice } from "@reduxjs/toolkit";

const room = createSlice({
  name: "room",
  initialState: {
    rooms: [],
    
  },
  reducers: {
    getAllRooms(state,action){
state.rooms=action.payload
    },
    deleteRoom(state,action){
        state.rooms=state.rooms.filter((element)=>{
            return element._id!==action.payload
        })
    }
   
  },
});

export const {getAllRooms,deleteRoom  } = room.actions;
export default room.reducer;

import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name:'user',
    initialState:[],
    reducers:{
        userdata:(state,action)=>{
            state.push(action.payload)
        },
        adduserdata:(state,action)=>{
            fetch(`http://localhost:5100/users/`,{
                method:'post',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(action.payload)
            })
        },
        Edituserdata:(state,action)=>{
            fetch(`http://localhost:5100/users/`+action.payload.id,{
                method:'put',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(action.payload)
            })
        },
        deletedata:(state,action)=>{
            fetch(`http://localhost:5100/users/`+action.payload.id,{
                method:'delete',
                headers:{'content-type':'application/json'},
                body:JSON.stringify(action.payload)
            })
        },
        
    }
})
export const {userdata,adduserdata,Edituserdata,deletedata} = userSlice.actions;
export default userSlice.reducer;
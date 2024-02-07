
import { Posts } from '@/lib/interfaces/Posts.model';
import {createSlice} from '@reduxjs/toolkit'

const initialState:Posts[]=[]

 const taskSlice=createSlice({
    name:'posts',
    initialState:initialState,
    reducers:{
        addTask:(state,action)=>{
            return [
                action.payload,
                ...state
            ]
        },
        addAllTasks:(state,action)=>{
            console.log(state,action)
            return action.payload.map((us:any)=>{
               return {
                ...us,
                edit:false,
               }
            })
            
        },
        editTask:(state,action)=>{
            state.push(
                action.payload
            )
        },
        deleteTask:(state,action)=>{
                 console.log(state,action)
            return state.filter(person => person.id != action.payload.id);
        },
    }
})

export const {addTask,addAllTasks,deleteTask}=  taskSlice.actions
export default taskSlice.reducer
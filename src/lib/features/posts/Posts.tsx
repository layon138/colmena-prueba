
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
                image:undefined,
               }
            })
            
        },
        editTask:(state,action)=>{
            return state.map((us:any)=>{
                if(us.id===action.payload.id){
                    return action.payload
                }else{
                    return us
                }
               
             })
        },
        deleteTask:(state,action)=>{
                 console.log(state,action)
            return state.filter(person => person.id != action.payload.id);
        },
    }
})

export const {addTask,addAllTasks,deleteTask,editTask}=  taskSlice.actions
export default taskSlice.reducer
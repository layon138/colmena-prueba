'use client'

import { deleteTask } from "@/lib/features/posts/Posts"
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from "react-redux"

export interface Routt{
  params:{
    slug:any
  }
}

export default function DetailPostLayout(params: Routt) {
    console.log()
    const id=params.params.slug
    const router = useRouter();
    const tasks=useSelector((state:any)=>state.tasks.filter(
     (task:any)=>{
      console.log(params.params.slug)
      if(task.id===+id){
        return task
      }
      }
    ))
    const dispath = useDispatch();

      const deletePost=()=>{
        dispath(deleteTask(post));
        router.back();
      }


    const post=tasks[0] ||  undefined
    console.log(tasks)
    return (
      <div className='flex flex-col justify-center items-center ' > 
      
      {post
        ?  <div className="flex pb-2 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.body}</p>
        </div>
        <div className="flex justify-around">
        <button
        onClick={deletePost}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Eliminar
              </button>
              <button
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Ver detalles
              </button>
        </div>
       
    </div>
        : <p>No existe entrada</p>
      }
   
    
 
    </div>
    )
  }
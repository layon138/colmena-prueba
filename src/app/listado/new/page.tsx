"use client";

import { addTask, deleteTask, editTask } from "@/lib/features/posts/Posts";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";



export default function NewPostLayout() {

  const dispath = useDispatch();
  const router = useRouter();

  const changeInput = ($event: any) => {
    setCount((shopCart:any) => ({
      ...shopCart,
      [$event.target.name]:$event.target.value
    }));
  };

  const addWorkForm = ($event: any) => {
    dispath(addTask(count));
    $event.preventDefault();
    router.back();
  };

  const [count, setCount] = useState({
    title:'',
    body:'',
    image:'',
    id:Math.random()
  });
  return (
      <form className="max-w-sm mx-auto" onSubmit={addWorkForm}>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Titulo
          </label>
          <textarea
            value={count.title}
            onChange={changeInput}
            name="title"
            className="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Descripcion
          </label>
          <textarea
            value={count.body}
            name="body"
            onChange={changeInput}
            className="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Imagen
          </label>
          <textarea
            value={count.image}
            name="body"
            onChange={changeInput}
            className="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Guardar
        </button>
      </form>
  );
}

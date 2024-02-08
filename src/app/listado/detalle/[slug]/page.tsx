"use client";

import { deleteTask, editTask } from "@/lib/features/posts/Posts";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export interface Routt {
  params: {
    slug: any;
  };
}

export default function DetailPostLayout(params: Routt) {
  console.log();
  const id = params.params.slug;
  const router = useRouter();
  const tasks = useSelector((state: any) =>
    state.tasks.filter((task: any) => {
      console.log(params.params.slug);
      if (task.id === +id) {
        return task;
      }
    })
  );
  const dispath = useDispatch();

  const deletePost = () => {
    dispath(deleteTask(post));
    router.back();
  };

  const changeInput = ($event: any) => {
    setCount((shopCart:any) => ({
      ...shopCart,
      [$event.target.name]:$event.target.value
    }));
  };

  const addWorkForm = ($event: any) => {
    console.log(count)
    dispath(editTask(count));
    $event.preventDefault();
  };

  const post = tasks[0] || undefined;
  const [count, setCount] = useState(post);
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        {post ? (
          <div className="flex pb-2 mt-2 mb-2 flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {post.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {post.body}
              </p>
              <div className="flex justify-evenly">
              <button
                onClick={deletePost}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Eliminar
              </button>
            </div>
            </div>
    
          </div>
        ) : (
          <p>No existe entrada</p>
        )}
      </div>
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
            name="image"
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
          Editar
        </button>
      </form>
    </>
  );
}

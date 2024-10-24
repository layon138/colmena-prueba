"use client";
import { toBase64 } from "../utils/utils";
import { useRouter } from "next/router";
import { useState } from "react";
import { addTask } from "@/lib/features/posts/Posts";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
type MyformData={
  childParent:any
}

export default function FormPost ({childParent}:MyformData){

  const changeInput = ($event: any) => {
    setCount((post: any) => ({
      ...post,
      [$event.target.name]: $event.target.value,
    }));
  };

  const onFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) {
      return;
    }
    const base64 = await toBase64(e.target.files[0]);
    console.log(base64);
    setCount((post: any) => ({
      ...post,
      image: base64,
    }));
  };

  const [count, setCount] = useState({
    title: "",
    body: "",
    image: "",
    id: Date.now(),
  });

  const addWorkForm = ($event: any) => {
    $event.preventDefault();
    childParent(count)
  };

  return (
    <>
      <div className="max-w-sm mx-auto mt-20 bg-white rounded-md shadow-md overflow-hidden">
        <div className="px-6 py-4 bg-gray-900 text-white">
          <h1 className="text-lg font-bold">Añadir </h1>
        </div>
        <form onSubmit={addWorkForm}>
          <div className="px-6 py-4">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Titulo
              </label>
              <textarea
                value={count.title}
                onChange={changeInput}
                name="title"
                className="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="title"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Descripcion
              </label>
              <textarea
                value={count.body}
                name="body"
                onChange={changeInput}
                className="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                id="body"
                aria-describedby="emailHelp"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Imagen
              </label>
              <div className="w-full mb-2">
                {count.image ? (
                  <img
                    src={count.image}
                    alt=""
                    className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:mb-0 xl:mb-6"
                    height="640"
                  ></img>
                ) : (
                  <img
                    src="https://bitsofco.de/img/Qo5mfYDE5v-350.png"
                    alt=""
                    className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:mb-0 xl:mb-6"
                    height="640"
                  ></img>
                )}
              </div>
              <input
                type="file"
                name="file"
                onChange={onFileChange}
                className="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
                id="file"
                aria-describedby="emailHelp"
              />
            </div>

            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
              Agregar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

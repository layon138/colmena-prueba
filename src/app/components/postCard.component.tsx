"use client";

import React from "react";
import Link from "next/link";
type MyformData = {
  childParent?: any;
  item?: any;
  edit?: boolean;
};

export default function CardPost({ childParent, item, edit }: MyformData) {
  const deletePost = () => {
    childParent()
  };

  return (
    <>
      <div
        key={item.id}
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-2 mt-5"
      >
      
        <div className="px-6 py-4 rounded-t-lg bg-gray-900 text-lg font-bold text-white">
          #  {item.id} 
          </div>
        <div className="p-5">
        <a href="#" className="border-b-cyan-500">
          <img className="rounded-t-lg " src={item?.image} alt="" />
        </a>
          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.title}
            </h5>
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {item.body}
          </p>
          <div>
            {edit ? (
              <button
                onClick={deletePost}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Eliminar
              </button>
            ) : (
              <Link
                href={`listado/detalle/${item.id}`}
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
              >
                Ver detalles
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

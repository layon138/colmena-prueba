"use client";

import React from "react";
import Link from "next/link";
type MyformData = {
  childParent?: any;
  item?: any;
};

export default function CardPost({ childParent, item }: MyformData) {


  return (
    <>
      <div
        key={item.id}
        className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-2"
      >
        <a href="#">
          <img className="rounded-t-lg" src={item?.image} alt="" />
        </a>
        <div className="p-5">
          <div className="mb-1 block text-sm leading-6 text-cyan-500">
            {item.id}
          </div>

          <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {item.title}
            </h5>
          </div>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {item.body}
          </p>
          <Link
            href={`listado/detalle/${item.id}`}
            className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
          >
            Ver detalles
          </Link>
        </div>
      </div>
    </>
  );
}

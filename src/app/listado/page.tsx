'use client'

import Link from 'next/link';
import {getPostsList} from '../services/post.service'
import { useState, useEffect, Suspense } from 'react';


export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    const [data, setData] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const data = await getPostsList();
        setData(data);
      }
      fetchData();
    }, []);

    return (
      <div className='flex flex-col justify-center items-center'>
    {data.map((item:any) => {
          return    <div key={item.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-2">
          <a href="#">
              <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
          </a>
          <div className="p-5">
            <div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>
         
            </div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.body}</p>
              <Link       href={'/detalle'} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Ver detalles
              </Link>
          </div>
      </div>;
        })}
    </div>
    )
  }
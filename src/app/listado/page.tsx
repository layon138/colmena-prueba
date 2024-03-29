"use client";

import Link from "next/link";
import { getPostsList } from "../services/post.service";
import { useState, useEffect, Suspense, useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Router, { withRouter } from "next/router";
import { Posts } from "@/lib/interfaces/Posts.model";
import { addAllTasks, addTask } from "@/lib/features/posts/Posts";
import { useDispatch, useSelector } from "react-redux";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const [dataAuxiliar, setDataAuxiliar] = useState(useSelector((state:any)=>state.tasks));
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(10);
  const [wordToSearch, setWord] = useState("");
  const dispath = useDispatch();
  const filterInput = ($event: any) => {
    setWord($event.target.value);
    const filter = dataAuxiliar.filter((post: Posts) => {
      if (post.title.includes($event.target.value)) {
        return post;
      }
    });
    setData(filter);
  };


  

  const pruebita = () => {
    setTimeout(() => {
      const newIndex = index + 10;
      const newArray = dataAuxiliar.slice(0, newIndex).filter((post: Posts) => {
        if (post.title.includes(wordToSearch)) {
          return post;
        }
      });
      console.log(newArray, newIndex);
      setIndex(newIndex);
      setData(newArray);
    }, 2000);
  };

  useEffect(() => {
    async function fetchData() {
      if(dataAuxiliar.length===0){
        let    data = await getPostsList();
        setDataAuxiliar(data);
        dispath(addAllTasks(data));
        data = data.slice(0, 10);
        setData(data);
      }else{
        const data=dataAuxiliar.slice(0, 10);
        setData(data);
      }

    }
    fetchData();
  }, []);

  return (
    <>
   <div className="flex flex-col justify-center items-center mb-3 mt-3">
        <form>
          <div className="flex justify-between">
            <input
              onChange={filterInput}
              type="text"
              id="first_name"
              className="m-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Palabra a filtrar"
              required
            ></input>
              <Link
          type="submit"
          href={'listado/new'}
          className="m-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
           Nuevo Post
        </Link>
          </div>
        </form>
      </div>
      <div className="flex flex-col justify-center items-center">
        <InfiniteScroll
          dataLength={data ? data.length : 0}
          next={() => pruebita()}
          hasMore={true}
          loader={<div role="status" className="overflow-hidden">
          <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span className="sr-only">Loading...</span>
      </div>}
        >
          {data.map((item: any) => {
            return (
              <div
                key={item.id}
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-2"
              >
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    
                    src={item.image}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <div>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                      {item.id}
                    </h5>
                  </div>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.body}
                  </p>
                  <Link
                    href={`listado/detalle/${item.id}`}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Ver detalles
                  </Link>
                </div>
              </div>
            );
          })}
        </InfiniteScroll>
      </div>
    </>
  );
}

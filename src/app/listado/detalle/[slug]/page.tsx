"use client";

import CardPost from "@/app/components/postCard.component";
import FormPost from "@/app/components/postForm.component";
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
  const id = params.params.slug;
  const router = useRouter();
  const dispath = useDispatch();
  const tasks = useSelector((state: any) =>
    state.tasks.filter((task: any) => {
      if (id && task.id === +id) {
        return task;
      }
    })
  );

  const post = tasks[0] || {
    title: "",
    body: "",
    image: "",
    id: Date.now(),
  };

  const deletePost = () => {
    dispath(deleteTask(post));
    router.back();
  };


  const addWorkForm = ($event: any) => {
    dispath(editTask($event));
    router.back();
  };

  return (
    <>

      <div className="flex flex-col justify-center items-center ">
      <CardPost edit={true} childParent={deletePost}  item={post} />
      </div>
      <FormPost id={post} childParent={addWorkForm} />
    </>
  );
}

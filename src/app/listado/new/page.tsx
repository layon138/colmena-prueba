"use client";


import FormPost from "@/app/components/postForm.component";
import { toBase64 } from "@/app/utils/utils";
import { addTask, deleteTask, editTask } from "@/lib/features/posts/Posts";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function NewPostLayout() {
  const dispath = useDispatch();
  const router = useRouter();

  const addWorkForm = ($event: any) => {
    dispath(addTask($event));
    router.back();
  };

  return (
    <>
      <FormPost childParent={addWorkForm} />
    </>
  );
}

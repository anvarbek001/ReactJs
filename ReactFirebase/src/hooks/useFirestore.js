/** @format */

import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useState } from "react";
import { toast } from "sonner";

export const useFirestore = () => {
  const addDocument = (data) => {
    addDoc(collection(db, "transactions"), data)
      .then(() => {
        toast.success("Post muvaffaqiyatli qo'shildi");
      })
      .catch((error) => toast.error("Post qo'shishda xatolik yuz berdi"));
  };

  const deleteDocument = (id) => {
    deleteDoc(doc(db, "transactions", id))
      .then(() => {
        toast.success("Post muvaffaqiyatli o'chirildi");
      })
      .catch((error) => toast.error("Post o'chirishda xatolik yuz berdi"));
  };

  return { addDocument, deleteDocument };
};

import React from "react";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Components/Loader/Loader";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const UseClasses = () => {
  const {
    data: classes = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const res = await fetch("https://assignment-12-server-sepia.vercel.app/classes");
      return res.json();
    },
  });

  return [classes, loading, refetch];
};

export default UseClasses;

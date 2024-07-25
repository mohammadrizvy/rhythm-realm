import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const UserSelectedclasses = () => {
    const {user , loading } = useContext(AuthContext);
     const { refetch, data: selectedClass = [] } = useQuery({
       queryKey: ["selectedclasses", user?.email],
       queryFn: async () => {
         const res = await fetch(`https://assignment-12-server-sepia.vercel.app/selectedclasses?email=${user.email}`);
         return res.json();
       },
     });
    return [selectedClass , refetch]
};

export default UserSelectedclasses;
import React from "react";

import { Triangle , Bars } from "react-loader-spinner";
const Loader = () => {
  return (
    <div className="pt-40 flex h-screen items-center justify-center">
      <Bars
        height="80"
        width="80"
        color="#7a6efc"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;

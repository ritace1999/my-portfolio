"use client";

const HomeLayout = ({ children, className }) => {
  return (
    <div
      className={`flex w-[96vw]  bg-white  mx-auto  rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-30 ${className} `}
    >
      {children}
    </div>
  );
};

export default HomeLayout;

"use client";

const HomeLayout = ({ children }) => {
  return (
    <div className="flex w-[96vw] h-[80vh] bg-white  mx-auto  rounded-lg backdrop-filter backdrop-blur-lg bg-opacity-30">
      {children}
    </div>
  );
};

export default HomeLayout;

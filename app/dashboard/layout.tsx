import React from "react";
import Header from "./_components/Header";
import SideNav from "./_components/SideNav";

function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
  return (
    <>
    <div className="md:block hidden w-64 fixed "><SideNav/></div>
    <div className="ml-64">
      <Header/>
      {children}
    </div>
    </>
  );
}

export default layout;

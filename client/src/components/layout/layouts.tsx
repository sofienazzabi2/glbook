import React, { PropsWithChildren } from "react";
import Header from "./Header";

export const AuthenticatedLayout: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

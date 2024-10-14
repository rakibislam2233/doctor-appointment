import React from "react";
interface IChildren {
  children: React.ReactNode;
}
const AuthLayout = ({ children }: IChildren) => {
  return <main>{children}</main>;
};

export default AuthLayout;

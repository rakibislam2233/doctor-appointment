import React from "react";

interface IProps {
  children: React.ReactNode;
  className?: string;
}

const MainContainer = ({ children, className }: IProps) => {
  return (
    <section className={`w-full container mx-auto ${className}`}>
      {children}
    </section>
  );
};

export default MainContainer;

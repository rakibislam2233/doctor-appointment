"use client";
import React from "react";
import { Breadcrumb } from "antd";
import Link from "next/link";

interface BreadcrumbItem {
  href?: string;
  title: React.ReactNode;
}

interface CustomBreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

const CustomBreadcrumb: React.FC<CustomBreadcrumbProps> = ({
  items,
  className,
}) => {
  return (
    <Breadcrumb className={className}>
      {items.map((item, index) => (
        <Breadcrumb.Item key={index} className="text-lg">
          {item.href ? <Link href={item.href}>{item.title}</Link> : item.title}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default CustomBreadcrumb;

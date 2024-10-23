"use client";
import React from "react";
import { Breadcrumb } from "antd";
import Link from "next/link";

interface BreadcrumbItem {
  href?: string;
  title: React.ReactNode;
}

interface CustomBreadcrumbProps {
  items: BreadcrumbItem[]; // Items array for the breadcrumb
}

const CustomBreadcrumb: React.FC<CustomBreadcrumbProps> = ({ items }) => {
  // Map through the items and format them for the Ant Design `items` prop
  const breadcrumbItems = items.map((item) => ({
    title: item.href ? <Link  href={item.href}>{item.title}</Link> : item.title,
  }));

  return (
    <Breadcrumb className="text-lg" items={breadcrumbItems} />
  );
};

export default CustomBreadcrumb;

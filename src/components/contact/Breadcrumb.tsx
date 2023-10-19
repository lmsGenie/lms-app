"use client";

import React from "react";

interface IProps {
  title: string;
}

function Breadcrumb({ title }: IProps) {
  return (
    <div className="space-y-2 bg-gray-50 py-10 text-center">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <p className="text-sm">
        <span className="text-gray-600">Home / </span>
        {title}
      </p>
    </div>
  );
}

export default Breadcrumb;

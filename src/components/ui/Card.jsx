import React from "react";

export const Card = ({ children, className = "" }) => (
  <div className={`bg-white rounded-tr-4xl rounded-bl-4xl rounded-tl-lg rounded-br-lg p-6 shadow-md border border-gray-200 ${className}`}>
    {children}
  </div>
);

export const CardHeader = ({ children, className = "" }) => (
  <div className={`flex items-center mb-2 ${className}`}>{children}</div>
);

export const CardTitle = ({ children, className = "" }) => (
  <h3 style={{ fontWeight: 600 }} className={`text-xl font-semibold ${className}`}>{children}</h3>
);

export const CardContent = ({ children, className = "" }) => (
  <div className={`text-gray-600 ${className}`}>{children}</div>
);

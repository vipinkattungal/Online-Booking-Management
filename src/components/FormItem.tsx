import React, { FC, ReactNode } from "react";

interface FormItemProps {
  label: string;
  desc?: string;
  children: ReactNode;
}

const FormItem: FC<FormItemProps> = ({ label, desc, children }) => {
  return (
    <div className="form-item">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      {desc && <p className="text-sm text-gray-500">{desc}</p>}
      <div className="mt-1">{children}</div>
    </div>
  );
};

export default FormItem;
"use client";

import React, { FC, useState } from "react";
import Input from "@/shared/Input";
import FormItem from "../FormItem";
import Button from "@/shared/Button";

export interface PageAddListing1Props {}

const PageAddListing1: FC<PageAddListing1Props> = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <>
      <h2 className="text-2xl font-semibold">College/Agent Signup</h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* FORM */}
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* ITEM */}
        <FormItem
          label="Name"
          desc="Enter the name of the college or agent."
        >
          <Input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormItem>
        <FormItem
          label="Email"
          desc="Enter the email address for the college or agent."
        >
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </FormItem>
        <FormItem
          label="Password"
          desc="Create a password for the account."
        >
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </FormItem>
        <FormItem
          label="Phone Number"
          desc="Enter the phone number with country code."
        >
          <Input
            name="phoneNumber"
            placeholder="+1 234 567 890"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </FormItem>
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
};

export default PageAddListing1;
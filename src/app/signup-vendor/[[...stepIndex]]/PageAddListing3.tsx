"use client";

import React, { FC, useState } from "react";
import Select from "@/shared/Select";
import FormItem from "../FormItem";
import NcInputNumber from "@/components/NcInputNumber";
import Input from "@/shared/Input";
import Button from "@/shared/Button";

export interface PageAddListing3Props {}

const courses = [
  "Engineering",
  "Medical",
  "Arts",
  "Science",
  "Commerce",
  "Law",
  "Management",
  "Education",
  "Pharmacy",
  "Nursing",
];

const PageAddListing3: FC<PageAddListing3Props> = () => {
  const [selectedCourses, setSelectedCourses] = useState<{ [key: string]: number }>({});
  const [courseDetails, setCourseDetails] = useState<{ [key: string]: { years: number, [year: number]: number, seats: number, donation: number } }>({});

  const handleCourseChange = (e: React.ChangeEvent<HTMLSelectElement>, index: number) => {
    const course = e.target.value;
    if (course && !selectedCourses[course]) {
      setSelectedCourses({ ...selectedCourses, [course]: 1 });
      setCourseDetails({ ...courseDetails, [course]: { years: 1, 1: 0, seats: 0, donation: 0 } });
    }
  };

  const handleCourseNumberChange = (course: string, value: number) => {
    setSelectedCourses({ ...selectedCourses, [course]: value });
  };

  const handleYearsChange = (course: string, value: number) => {
    const updatedCourseDetails = { ...courseDetails[course], years: value };
    for (let i = 1; i <= value; i++) {
      if (!updatedCourseDetails[i]) {
        updatedCourseDetails[i] = 0;
      }
    }
    setCourseDetails({ ...courseDetails, [course]: updatedCourseDetails });
  };

  const handleFeeChange = (course: string, year: number, value: number) => {
    setCourseDetails({
      ...courseDetails,
      [course]: {
        ...courseDetails[course],
        [year]: value,
      },
    });
  };

  const handleSeatsChange = (course: string, value: number) => {
    setCourseDetails({
      ...courseDetails,
      [course]: {
        ...courseDetails[course],
        seats: value,
      },
    });
  };

  const handleDonationChange = (course: string, value: number) => {
    setCourseDetails({
      ...courseDetails,
      [course]: {
        ...courseDetails[course],
        donation: value,
      },
    });
  };

  const addNewCourse = () => {
    setSelectedCourses({ ...selectedCourses, [`course-${Object.keys(selectedCourses).length + 1}`]: 1 });
  };

  return (
    <>
      <h2 className="text-2xl font-semibold">Add Courses</h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* FORM */}
      <div className="space-y-8">
        {Object.keys(selectedCourses).map((course, index) => (
          <div key={course}>
            <FormItem label={`Select Course ${index + 1}`}>
              <Select onChange={(e) => handleCourseChange(e, index)}>
                <option value="">Select a course</option>
                {courses.map((courseOption) => (
                  <option key={courseOption} value={courseOption}>
                    {courseOption}
                  </option>
                ))}
              </Select>
            </FormItem>
            <FormItem label="Number of Years">
              <NcInputNumber
                defaultValue={courseDetails[course]?.years || 1}
                onChange={(value) => handleYearsChange(course, value)}
              />
            </FormItem>
            {Array.from({ length: courseDetails[course]?.years || 1 }, (_, year) => (
              <FormItem key={`${course}-year-${year + 1}`} label={`Year ${year + 1} Fees`}>
                <Input
                  type="number"
                  placeholder={`Year ${year + 1} Fees`}
                  value={courseDetails[course]?.[year + 1] || 0}
                  onChange={(e) => handleFeeChange(course, year + 1, parseFloat(e.target.value))}
                />
              </FormItem>
            ))}
            <FormItem label="Number of Seats Available">
              <Input
                type="number"
                placeholder="Number of Seats Available"
                value={courseDetails[course]?.seats || 0}
                onChange={(e) => handleSeatsChange(course, parseFloat(e.target.value))}
              />
            </FormItem>
            <FormItem label="Donation and Other Expenses">
              <Input
                type="number"
                placeholder="Donation and Other Expenses"
                value={courseDetails[course]?.donation || 0}
                onChange={(e) => handleDonationChange(course, parseFloat(e.target.value))}
              />
            </FormItem>
          </div>
        ))}
        <Button onClick={addNewCourse}>Add Another Course</Button>
      </div>
    </>
  );
};

export default PageAddListing3;
import { StaticImageData } from "next/image";

import { IdType } from "../icon";

export interface ICategory {
  name: string;
  path: string;
  iconId: IdType;
  totalCourses: number;
}

export interface ICourseData {
  id: string;
  title: string;
  subTitle: string;
  category: string[];
  subCategory: string[];
  slug: string;
  language: string;
  topic: string;
  thumbnail: string | StaticImageData;
  trailer: string;
  description: string;
  courseOutline: string[];
  targetAudience: string[];
  preRequisites: string[];
  welcomeMessage: string;
  completionMessage: string;
  completionRate: number;
  averageRating: number;
  sections: string[];
  tools: string[];
  courseLevel: string;
  listPrice: {
    price: number;
    currencyName: string;
    currencyCode: string;
    currencySymbol: string;
  };
  discountedPrice: {
    price: number;
    currencyName: string;
    currencyCode: string;
    currencySymbol: string;
  };
  discountPercentage: number;
  instructors: string[];
  totalEnrollments: number;
  reviews: string[];
}
export type CourseDataPartial = Partial<ICourseData>;

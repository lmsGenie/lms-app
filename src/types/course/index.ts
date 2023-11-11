import { IdType } from "../icon/index.ts";
import { IUserPartial } from "../user/index.ts";

export interface ICategory {
  id: string;
  name: string;
  path: string;
  iconId: IdType;
  totalCourses: number;
}

export interface ICourse {
  id: string;
  title: string;
  subTitle: string;
  category: string[];
  subCategory: string[];
  slug: string;
  language: string;
  topic: string;
  thumbnail: string;
  trailer?: string;
  description: string;
  courseOutline: string[];
  targetAudience: string[];
  preRequisites: string[];
  welcomeMessage?: string;
  completionMessage?: string;
  completionRate?: number;
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
  discountedPrice?: {
    price: number;
    currencyName: string;
    currencyCode: string;
    currencySymbol: string;
  };
  discountPercentage: number;
  instructors: IUserPartial[];
  totalEnrollments?: number;
  reviews?: string[];
}

export type ICoursePartial = Partial<ICourse>;

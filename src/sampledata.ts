import { ICategory, ICourseCard } from "./types/course";

export const categories: ICategory[] = [
  {
    name: "Label",
    path: "courses/label",
    iconId: "Cpu",
    totalCourses: 63476,
  },
  {
    name: "Business",
    path: "courses/business",
    iconId: "Handshake",
    totalCourses: 52822,
  },
  {
    name: "Finance & Accounting",
    path: "courses/finance-accounting",
    iconId: "CreditCard",
    totalCourses: 33841,
  },
  {
    name: "IT & Software",
    path: "courses/it-software",
    iconId: "ChartBarHorizontal",
    totalCourses: 33841,
  },
  {
    name: "Personal Development",
    path: "courses/personal-development",
    iconId: "BugDroid",
    totalCourses: 20126,
  },
  {
    name: "Office Productivity",
    path: "courses/office-productivity",
    iconId: "Receipt",
    totalCourses: 13932,
  },
  {
    name: "Marketing",
    path: "courses/marketing",
    iconId: "MegaphoneSimple",
    totalCourses: 12068,
  },
  {
    name: "Photography & Video",
    path: "courses/photography-video",
    iconId: "Camera",
    totalCourses: 6196,
  },
  {
    name: "Lifestyle",
    path: "courses/lifestyle",
    iconId: "Package",
    totalCourses: 2736,
  },
  {
    name: "Design",
    path: "courses/design",
    iconId: "PenNib",
    totalCourses: 2600,
  },
  {
    name: "Health & Fitness",
    path: "courses/data-analytics",
    iconId: "FirstAidKit",
    totalCourses: 1678,
  },
  {
    name: "Music",
    path: "courses/music",
    iconId: "Headphones",
    totalCourses: 959,
  },
];

export const courseCardData: ICourseCard[] = [
  {
    id: "1",
    category: ["FINANCE AND ACCOUNTING"],
    thumbnail:
      "https://res.cloudinary.com/doda2e5oe/image/upload/v1694862207/lmsGenie%20assets/course/course6_tclpvl.jpg",
    totalEnrollments: 500,
    listPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 500,
    },
    discountedPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 400,
    },
    discountPercentage: 10,
    averageRating: 5,
    title: "The Complete Personal Finance Course: Save, Protect, Make More",
  },
  {
    id: "2",
    category: ["LIFE STYLE"],
    thumbnail:
      "https://res.cloudinary.com/doda2e5oe/image/upload/v1694862205/lmsGenie%20assets/course/course1_p9jghe.jpg",
    totalEnrollments: 500,
    listPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 500,
    },
    discountedPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 400,
    },
    discountPercentage: 10,
    averageRating: 5,
    title: "Transformation Life Coach Certification (Accredited)",
  },
  {
    id: "3",
    category: ["BUSINESS"],
    thumbnail:
      "https://res.cloudinary.com/doda2e5oe/image/upload/v1694862198/lmsGenie%20assets/course/course4_zzetiz.jpg",
    totalEnrollments: 500,
    listPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 500,
    },
    discountedPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 400,
    },
    discountPercentage: 10,
    averageRating: 5,
    title:
      "Learn Python Programming Masterclass dehudheudheuhdeudhdddddddddddddddddddddddd dehudheudheuhdeudhdddddddddddddddddddddddd dehudheudheuhdeudhdddddddddddddddddddddddd",
  },
  {
    id: "4",
    category: ["BUSINESS"],
    thumbnail:
      "https://res.cloudinary.com/doda2e5oe/image/upload/v1694862197/lmsGenie%20assets/course/course2_zh4bxx.jpg",
    totalEnrollments: 500,
    listPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 500,
    },
    discountedPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 400,
    },
    discountPercentage: 10,
    averageRating: 5,
    title: "Business Model Innovation: Differentiate & Grow Your Company",
  },
  {
    id: "5",
    category: ["MUSIC"],
    thumbnail:
      "https://res.cloudinary.com/doda2e5oe/image/upload/v1694862197/lmsGenie%20assets/course/course10_dwwbdy.jpg",
    totalEnrollments: 500,
    listPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 500,
    },
    discountedPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 400,
    },
    discountPercentage: 10,
    averageRating: 5,
    title: "Pianoforall - Incredible New Way To Learn Piano & Keyboard",
  },
  {
    id: "6",
    category: ["BUSINESS"],
    thumbnail:
      "https://res.cloudinary.com/doda2e5oe/image/upload/v1694862197/lmsGenie%20assets/course/course8_usweyy.jpg",
    totalEnrollments: 500,
    listPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 500,
    },
    discountedPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 400,
    },
    discountPercentage: 10,
    averageRating: 5,
    title: "Business Model Innovation: Differentiate & Grow Your Company",
  },
  {
    id: "7",
    category: ["MUSIC"],
    thumbnail:
      "https://res.cloudinary.com/doda2e5oe/image/upload/v1694862194/lmsGenie%20assets/course/course9_o73qqh.jpg",
    totalEnrollments: 500,
    listPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 500,
    },
    discountedPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 400,
    },
    discountPercentage: 10,
    averageRating: 5,
    title: "Pianoforall - Incredible New Way To Learn Piano & Keyboard",
  },
  {
    id: "8",
    category: ["IT & SOFTWARE"],
    thumbnail:
      "https://res.cloudinary.com/doda2e5oe/image/upload/v1694862193/lmsGenie%20assets/course/course3_ywumwu.jpg",
    totalEnrollments: 500,
    listPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 500,
    },
    discountedPrice: {
      currencyCode: "USD",
      currencyName: "us",
      currencySymbol: "$",
      price: 400,
    },
    discountPercentage: 10,
    averageRating: 5,
    title:
      "Learn Python Programming Masterclass dehudheudheuhdeudhdddddddddddddddddddddddd dehudheudheuhdeudhdddddddddddddddddddddddd dehudheudheuhdeudhdddddddddddddddddddddddd",
  },
];

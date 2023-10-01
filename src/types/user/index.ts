export interface IWishlist {
  courses: string[];
}

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  passwordChangedAt?: number | undefined;
  role: string;
  biography?: string;
  socialProfiles?: string[];
  profilePicture?: string;
  slug: string;
  rating?: number;
  totalStudents?: number;
  enrolledCourses?: string[];
  wishlist: IWishlist;
  isActive: boolean;
  isEmailVerified: boolean;
  loginCount: number;
  refreshToken: string[];
}

export type IUserPartial = Partial<IUser>;

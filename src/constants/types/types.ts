import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TextInputProps} from 'react-native';
import {SharedValue} from 'react-native-reanimated';
import {TicketTypeEnums} from '../../screens/listings/event/create/EventListingCreationTicketInfoScreen';

export interface apiNotifications {
  status: number | 1 | 2 | 3;
  message: string;
}

export type SvgProps = {
  icon: any;
  color?: string;
  width?: string;
  fill?: string;
};

export interface dotInterface {
  index: number;
  currentIndex: SharedValue<number>;
}

export interface AuthState {
  alreadyAuth: boolean;
}
export type AuthStackParamList = {
  registerStack: NavigatorScreenParams<RegisterStackParamList>;
  loginStack: NavigatorScreenParams<LoginStackParamList>;
  forgotPassword: NavigatorScreenParams<ForgotStackParamList>;
  updateStack: NavigatorScreenParams<UpdateStackParamsList>;
  tandc: undefined;
  privacy: undefined;
};

export type RegisterStackParamList = {
  // onboardingStack?: undefined;
  signUpOptions: undefined;
  enterEmail: undefined;
  enterKyc: undefined;
  verifyEmail: {
    email: string;
  };
  // verifyPhone: undefined;
};

export type LoginStackParamList = {
  loginScreen: undefined;
};

export type OnboardingStackParamList = {
  onboarding: undefined;
};

export type ForgotStackParamList = {
  inputEmail: undefined;
  resetPassword: {
    email: string;
    code: string;
  };
  verifyEmailPassword: {
    email: string;
  };
};

export type RegisterNavigationProps = NativeStackNavigationProp<
  RegisterStackParamList,
  'signUpOptions'
>;

export type LoginNavigationProps = NativeStackNavigationProp<
  LoginStackParamList,
  'loginScreen'
>;

export type AuthNavigationProps = NativeStackNavigationProp<
  AuthStackParamList,
  'registerStack'
>;

export type ForgotNavigationProps = NativeStackNavigationProp<
  ForgotStackParamList,
  'inputEmail'
>;

export type OnboardingNavigationProps = NativeStackNavigationProp<
  OnboardingStackParamList,
  'onboarding'
>;

export type HolderBottomTabParamList = {
  home: undefined;
  explore: undefined;
  create: undefined;
  community: undefined;
  profile: undefined;
};

export type UpdateStackParamsList = {
  updateApp: {
    updatetype: string;
  };
};

export type HolderBottomNavigationProps = NativeStackNavigationProp<
  HolderBottomTabParamList,
  'home'
>;

export type MainBottomTabParamList = {
  holderBottomTab: NavigatorScreenParams<HolderBottomTabParamList>;
  nestedProfileNav: NavigatorScreenParams<NestedProfileNavigationScreensParamList>;

  brand: NavigatorScreenParams<BrandNavigationStackParamList>;
  listings: NavigatorScreenParams<NestedListingNavigationStackParamList>;
  comingSoon: undefined;
};

export type MainBottomTabNavigationProps = NativeStackNavigationProp<
  MainBottomTabParamList,
  'holderBottomTab'
>;

export interface textInputProps extends TextInputProps {
  errorText?: string;
  title?: string;
  showBalance?: boolean;
  secondaryText?: string;
  whiteBg?: boolean;
  showContactIcon?: boolean;
  setValue?: (val: string) => void;
}

export type forgotPasswordRouteProp = RouteProp<
  ForgotStackParamList,
  'resetPassword'
>;

export type updateAppRouteProp = RouteProp<UpdateStackParamsList, 'updateApp'>;

export type NestedUserWalletStackParamList = {
  userWalletDetails: undefined;
  fundAccount: undefined;
  withdraw: undefined;
  send: undefined;
};

export type NestedUserWalletProps = NativeStackNavigationProp<
  NestedUserWalletStackParamList,
  'userWalletDetails'
>;

export enum ListingFilterEnums {
  ALL = 'ALL',
  EVENTS = 'EVENTS',
  EXPERIENCES = 'EXPERIENCES',
  PLACES = 'PLACES',
}

export type NestedProfileNavigationScreensParamList = {
  settings: undefined;
  listingsByYou: {
    filter: ListingFilterEnums;
  };
  recentlyViewed: undefined;
  bookmarked: undefined;
  switchAccount: undefined;
  invitations: undefined;
  userWallet: NavigatorScreenParams<NestedUserWalletStackParamList>;
};

export type NestedProfileStackNavigationProp =
  NativeStackNavigationProp<NestedProfileNavigationScreensParamList>;

export type ListingsByYouScreenRouteProp = RouteProp<
  NestedProfileNavigationScreensParamList,
  'listingsByYou'
>;

export type NestedBrandCreationNavigationScreenParamList = {
  brandCreationTypeSelection: undefined;
  brandCreationMetaData: undefined;
  brandCreationDescription: undefined;
  brandCreationLogoUpload: undefined;
  brandCreationSuccessConfirmation: undefined;
};

export type NestedBrandCreationStackNavigationProp = NativeStackNavigationProp<
  NestedBrandCreationNavigationScreenParamList,
  'brandCreationTypeSelection'
>;

export type NestedBrandBookingsStackParamList = {
  bookings: undefined;
  bookingDetails: undefined;
};

export type NestedBrandBookingsProps = NativeStackNavigationProp<
  NestedBrandBookingsStackParamList,
  'bookings'
>;

export type NestedBrandListingsStackParamList = {
  listings: {
    filter: string;
  };
  listingDetails: {
    id: string;
  };
};

export type NestedBrandListingsProps = NativeStackNavigationProp<
  NestedBrandListingsStackParamList,
  'listings'
>;

export type NestedBrandListingsRouteProp = RouteProp<
  NestedBrandListingsStackParamList,
  'listings'
>;

export type NestedBrandListingDetailsRouteProp = RouteProp<
  NestedBrandListingsStackParamList,
  'listingDetails'
>;

export type NestedBrandEarningsStackParamList = {
  earnings: undefined;
  earningsHistory: undefined;
};

export type NestedBrandEarningsProps = NativeStackNavigationProp<
  NestedBrandEarningsStackParamList,
  'earnings'
>;

export type BrandNavigationStackParamList = {
  brandCreation: NavigatorScreenParams<NestedBrandCreationNavigationScreenParamList>;
  brandHome: undefined;
  brandSettings: undefined;
  brandMore: undefined;
  brandReviews: undefined;
  brandBookings: NavigatorScreenParams<NestedBrandBookingsStackParamList>;
  brandListings: NavigatorScreenParams<NestedBrandListingsStackParamList>;
  brandEarnings: NavigatorScreenParams<NestedBrandEarningsStackParamList>;
};

export type BrandNavigationProps = NativeStackNavigationProp<
  BrandNavigationStackParamList,
  'brandHome'
>;

export type NestedCreateExperienceListingNavigationStackParamList = {
  experienceInfo: undefined;
  experienceTicketInfo: undefined;
  uploadExperienceImage: undefined;
  experienceMoreInfo: undefined;
};

export type NestedCreateExperienceListingNavigationProps =
  NativeStackNavigationProp<
    NestedCreateExperienceListingNavigationStackParamList,
    'experienceInfo'
  >;

export type NestedManageExperienceListingNavigationStackParamList = {
  overview: {
    experienceId: string;
  };
  bookings: {
    experienceId: string;
  };
  access: {
    experienceId: string;
  };
  emails: {
    experienceId: string;
  };
};

export type NestedManageExperienceListingNavigationProps =
  NativeStackNavigationProp<
    NestedManageExperienceListingNavigationStackParamList,
    'overview'
  >;

export type NestedMangeExperienceListingRouteProp = RouteProp<
  NestedManageExperienceListingNavigationStackParamList,
  'overview'
>;

export type NestedExperienceListingNavigationStackParamList = {
  createExperience: NavigatorScreenParams<NestedCreateExperienceListingNavigationStackParamList>;
  manageExperience: NavigatorScreenParams<NestedManageExperienceListingNavigationStackParamList>;
};

export type NestedExperienceListingNavigationProps =
  NativeStackNavigationProp<NestedExperienceListingNavigationStackParamList>;

export type NestedEventListingCreationNavigationStackParamList = {
  eventListingCreationEventInfo: undefined;
  eventListingCreationTicketInfo: undefined;
  eventListingCreationImagesUpload: undefined;
  eventListingCreationMoreInfo: undefined;
  eventListingCreationPreview: undefined;
  eventListingCreationSuccessConfirmation: undefined;
};

export type NestedEventListingCreationNavigationProps =
  NativeStackNavigationProp<
    NestedEventListingCreationNavigationStackParamList,
    'eventListingCreationEventInfo'
  >;

export type NestedManageEventListingNavigationStackParamList = {
  overview: {
    id: string;
  };
  guests: {
    id: string;
  };
  access: {
    id: string;
  };
  emails: {
    id: string;
  };
};

export type NestedManageEventListingNavigationProps = NativeStackNavigationProp<
  NestedManageEventListingNavigationStackParamList,
  'overview'
>;

export type NestedMangeEventListingRouteProp = RouteProp<
  NestedManageEventListingNavigationStackParamList,
  'overview'
>;

export type NestedEventListingNavigationStackParamList = {
  create: NavigatorScreenParams<NestedEventListingCreationNavigationStackParamList>;
  manage: NavigatorScreenParams<NestedManageEventListingNavigationStackParamList>;
};

export type NestedEventListingNavigationProps =
  NativeStackNavigationProp<NestedEventListingNavigationStackParamList>;

export type NestedListingNavigationStackParamList = {
  event: NavigatorScreenParams<NestedEventListingNavigationStackParamList>;
  experience: NavigatorScreenParams<NestedExperienceListingNavigationStackParamList>;
};

export type NestedListingNavigationProps =
  NativeStackNavigationProp<NestedListingNavigationStackParamList>;

export type ResponseData<T> = {
  success: boolean;
  message: string;
  data?: T;
};

export enum UserTypeEnum {
  USER = 'user',
}

export enum UserGenderEnum {
  MALE = 'male',
  FEMALE = 'female',
}

export type UserResponseData = {
  id: string;
  uuid: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  emailVerified: boolean;
  countryCode: string;
  callingCode: string;
  phone: string;
  referralCode: string | null;
  phoneVerified: boolean;
  isActive: boolean;
  dob: string;
  password: string;
  note: string;
  type: UserTypeEnum;
  createdAt: string | null;
  updatedAt: string | null;
  lastLoggedInAt: string | null;
  isDeleted: boolean;
  deletedAt: string | null;
};

export type UserResponse = ResponseData<{
  user: UserResponseData;
}>;

export type RegisterRequestDto = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  countryCode: string;
  callingCode: string;
  password: string;
  gender?: UserGenderEnum | null;
  dob: Date;
  phone: string;
  referralCode?: string;
};

export type RegisterResponseData = UserResponseData & {
  accessToken: string;
};

export type RegisterResponse = ResponseData<RegisterResponseData>;

export type VerifyEmailOtpRequestDto = {
  email: string;
  code: string;
};
export type VerifyEmailOtpResponse = ResponseData<undefined>;

export type ResendEmailOtpRequestDto = {
  email: string;
};

export type LoginRequestDto = {
  email: string;
  password: string;
};
export type LoginResponseData = UserResponseData & {
  accessToken: string;
};

export type ForgotPasswordRequestDto = Pick<LoginRequestDto, 'email'>;
export type ForgotPasswordResponse = ResponseData<undefined>;

export type ResetPasswordRequestDto = LoginRequestDto & {
  code: string;
};
export type ResetPasswordResponse = ResponseData<undefined>;

export type ChangeEmailDto = Pick<LoginRequestDto, 'email'>;
export type ChangePhoneDto = Pick<RegisterRequestDto, 'phone'>;

export type LoginResponse = ResponseData<LoginResponseData>;

export type EventTicketRequestDto = {
  ticketType: TicketTypeEnums | null;
  price: number;
  ticket_name: string;
  perks: string[] | null;
  quantity: number;
};

export type EventCreationRequestDto = {
  event_name: string;
  description: string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  location: string;
  latitude: number;
  longitude: number;
  images: string[] | null;
  tickets: EventTicketRequestDto[];
  hosts: string[] | null;
  contactPhoneNumber: string;
  brandId?: string;
};

export type EventDetails = EventCreationRequestDto & {
  id: string;
  ratings: number;
  totalReviews: number;
  createdById: string;
};

export type EventDetailsResponse = ResponseData<EventDetails & {}>;

export type GetEventsResponse = ResponseData<EventDetails[]>;

export enum BrandTypeEnums {
  EXPERIENCE_CURATOR = 'EXPERIENCE_CURATOR',
  LEISURE_LOCATION = 'LEISURE_LOCATION',
}

export type BrandCreationRequestDto = {
  name: string;
  type: BrandTypeEnums | null;
  description: string;
  email: string;
  address: string;
  latitude: number;
  longitude: number;
  logoUrl: string;
};

export type BrandDetailsResponseData = BrandCreationRequestDto & {
  id: string;
  brandId: string;
  createdAt: Date | null;
  interests: string[] | null;
  ownerId: string;
  slug: string;
  teamMembers: string[] | null;
  updatedAt: Date | null;
};

export type GetBrandsResponse = ResponseData<BrandDetailsResponseData[]>;

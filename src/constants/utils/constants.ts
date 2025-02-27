import {Platform} from 'react-native';
import {Options} from 'react-native-image-crop-picker';
import {ImageLibraryOptions} from 'react-native-image-picker';

export const imagePickerOptions: ImageLibraryOptions = {
  mediaType: 'photo',
  presentationStyle: 'fullScreen',
  includeBase64: true,
  selectionLimit: 1,
};

export const mutipleImagesCropPickerOptions: Options = {
  multiple: true,
  width: 430,
  height: 458,
  maxFiles: 5,
  cropping: true,
  forceJpg: true,
  includeBase64: true,
  compressImageQuality: 0.6,
};

export const singleImageCropPickerOptions: Options = {
  width: 430,
  height: 458,
  // cropping: true,
  forceJpg: true,
  includeBase64: true,
  compressImageQuality: 0.6,
};

export const appName = () => 'Culr';

export const emailPattern =
  /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com|icloud\.com|aol\.com|protonmail\.com|zoho\.com|mail\.com|gmx\.com|tutanota\.com|fastmail\.com|startmail\.com|posteo\.de|hey\.com|secureemail\.com|tiscali\.com|rediffmail\.com|cox\.net|excite\.com|bluemail\.me)$/;

export const usernamePattern = /^[a-zA-Z0-9._-]{3,30}$/;
export const usernameText =
  'Username must be 3-30 characters long and can only contain letters, numbers, underscores (_), hyphens (-), and periods (.)';

export const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+=-])[A-Za-z0-9!@#$%^&*()_+=-]{8,64}$/;
export const passwordText =
  'Password must be 8-64 characters long, with at least one uppercase letter, one lowercase letter, one number, and one special character';

export const CashPinText = 'Cashpin';

export const bankName = 'Kuda Bank';

export const appLink = Platform.OS === 'ios' ? '' : '';

export const otpLength = 4;

export enum MODAL_NAMES {
  CHANGE_EMAIL_MODAL = 'CHANGE_EMAIL_MODAL',
  VERIFY_EMAIL_MODAL = 'VERIFY_EMAIL_MODAL',
  CHANGE_PHONE_MODAL = 'CHANGE_PHONE_MODAL',
  VERIFY_PHONE_MODAL = 'VERIFY_PHONE_MODAL',
  VERIFY_OLD_PASSWORD_MODAL = 'VERIFY_OLD_PASSWORD_MODAL',
  RESET_PASSWORD_MODAL = 'RESET_PASSWORD_MODAL',
  CHANGE_GENDER_MODAL = 'CHANGE_GENDER_MODAL',
  CHANGE_BANK_DETAILS_MODAL = 'CHANGE_BANK_DETAILS_MODAL',
  LOGOUT_CONFIRMATION_MODAL = 'LOGOUT_CONFIRMATION_MODAL',
  PHONE_PICKER_COUNTRY_CODE_MODAL = 'PHONE_PICKER_COUNTRY_CODE_MODAL',
  CREATE_LISTING_TYPE_SELECTION_MODAL = 'CREATE_LISTING_TYPE_SELECTION_MODAL',
  SWITCH_ACCOUNT_PROFILE_MODAL = 'SWITCH_ACCOUNT_PROFILE_MODAL',
  IMAGE_PICKER_MODAL = 'IMAGE_PICKER_MODAL',
  IMAGE_UPLOAD_PROGRESS_MODAL = 'IMAGE_UPLOAD_PROGRESS_MODAL',

  // Add other modal names here
}

export const googleLocationAutocompleteData = [
  {
    name: 'places/ChIJVWDfHNqQOxARy9Gfx6ifw5s',
    id: 'ChIJVWDfHNqQOxARy9Gfx6ifw5s',
    types: ['premise'],
    formattedAddress:
      '6 Bola Buraimoh St, Abule Egba, Lagos 102213, Lagos, Nigeria',
    addressComponents: [
      {
        longText: '6',
        shortText: '6',
        types: ['street_number'],
        languageCode: 'en-US',
      },
      {
        longText: 'Bola Buraimoh Street',
        shortText: 'Bola Buraimoh St',
        types: ['route'],
        languageCode: 'en',
      },
      {
        longText: 'Abule Egba',
        shortText: 'Abule Egba',
        types: ['neighborhood', 'political'],
        languageCode: 'en',
      },
      {
        longText: 'Lagos',
        shortText: 'Lagos',
        types: ['locality', 'political'],
        languageCode: 'en',
      },
      {
        longText: 'Abule-Egba/Aboru/Meiran/Alagbado',
        shortText: 'Abule-Egba/Aboru/Meiran/Alagbado',
        types: ['administrative_area_level_3', 'political'],
        languageCode: 'en',
      },
      {
        longText: 'Alimosho',
        shortText: 'Alimosho',
        types: ['administrative_area_level_2', 'political'],
        languageCode: 'en',
      },
      {
        longText: 'Lagos',
        shortText: 'LA',
        types: ['administrative_area_level_1', 'political'],
        languageCode: 'en',
      },
      {
        longText: 'Nigeria',
        shortText: 'NG',
        types: ['country', 'political'],
        languageCode: 'en',
      },
      {
        longText: '102213',
        shortText: '102213',
        types: ['postal_code'],
        languageCode: 'en-US',
      },
    ],
    location: {
      latitude: 6.6414963000000009,
      longitude: 3.29342,
    },
    viewport: {
      low: {
        latitude: 6.6400934005659495,
        longitude: 3.2920710225433996,
      },
      high: {
        latitude: 6.6427913611489542,
        longitude: 3.2947689831264033,
      },
    },
    googleMapsUri: 'https://maps.google.com/?cid=11223990243589870027',
    utcOffsetMinutes: 60,
    adrFormatAddress:
      '\u003cspan class="street-address"\u003e6 Bola Buraimoh St\u003c/span\u003e, \u003cspan class="extended-address"\u003eAbule Egba\u003c/span\u003e, \u003cspan class="locality"\u003eLagos\u003c/span\u003e \u003cspan class="postal-code"\u003e102213\u003c/span\u003e, \u003cspan class="region"\u003eLagos\u003c/span\u003e, \u003cspan class="country-name"\u003eNigeria\u003c/span\u003e',
    iconMaskBaseUri:
      'https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet',
    iconBackgroundColor: '#7B9EB0',
    displayName: {
      text: '6 Bola Buraimoh St',
    },
    primaryTypeDisplayName: {
      text: 'Building',
      languageCode: 'en-US',
    },
    primaryType: 'premise',
    shortFormattedAddress: '6 Bola Buraimoh St, Lagos',
    pureServiceAreaBusiness: false,
    addressDescriptor: {
      landmarks: [
        {
          name: 'places/ChIJv2enHdGQOxARYGLieDzHWqM',
          placeId: 'ChIJv2enHdGQOxARYGLieDzHWqM',
          displayName: {
            text: 'Rovers Tower Suites and Bar',
            languageCode: 'en',
          },
          types: ['establishment', 'lodging', 'point_of_interest'],
          straightLineDistanceMeters: 447.9397,
          travelDistanceMeters: 765.85974,
        },
        {
          name: 'places/ChIJ3ZSaV9iQOxAROCFDhhRdS3A',
          placeId: 'ChIJ3ZSaV9iQOxAROCFDhhRdS3A',
          displayName: {
            text: 'Nigeria Postal Service',
            languageCode: 'en',
          },
          types: [
            'establishment',
            'finance',
            'point_of_interest',
            'post_office',
          ],
          straightLineDistanceMeters: 406.193,
          travelDistanceMeters: 806.2566,
        },
        {
          name: 'places/ChIJvYDbMtqQOxAR_8azd6F03fQ',
          placeId: 'ChIJvYDbMtqQOxAR_8azd6F03fQ',
          displayName: {
            text: 'Royfaith Platinun College',
            languageCode: 'en',
          },
          types: ['establishment', 'point_of_interest', 'school'],
          straightLineDistanceMeters: 220.54056,
          travelDistanceMeters: 607.73456,
        },
        {
          name: 'places/ChIJd7kdhteQOxARHoKJPNs7zy0',
          placeId: 'ChIJd7kdhteQOxARHoKJPNs7zy0',
          displayName: {
            text: 'CAC Ago Adura Hqt Abule Egba',
            languageCode: 'en',
          },
          types: [
            'church',
            'establishment',
            'place_of_worship',
            'point_of_interest',
          ],
          straightLineDistanceMeters: 376.19763,
          travelDistanceMeters: 518.1188,
        },
        {
          name: 'places/ChIJO0S-W9qQOxARhxNEQLohtGQ',
          placeId: 'ChIJO0S-W9qQOxARhxNEQLohtGQ',
          displayName: {
            text: 'Angels College Abule Egba Lagos',
            languageCode: 'en',
          },
          types: ['establishment', 'point_of_interest', 'school'],
          straightLineDistanceMeters: 283.26273,
          travelDistanceMeters: 805.0265,
        },
      ],
      areas: [
        {
          name: 'places/ChIJk1OtA82QOxARktK6fLTNHp0',
          placeId: 'ChIJk1OtA82QOxARktK6fLTNHp0',
          displayName: {
            text: 'Abule Egba',
            languageCode: 'en',
          },
          containment: 'OUTSKIRTS',
        },
      ],
    },
    googleMapsLinks: {
      directionsUri:
        "https://www.google.com/maps/dir//''/data=!4m7!4m6!1m1!4e2!1m2!1m1!1s0x103b90da1cdf6055:0x9bc39fa8c79fd1cb!3e0",
      placeUri: 'https://maps.google.com/?cid=11223990243589870027',
      photosUri:
        'https://www.google.com/maps/place//data=!4m3!3m2!1s0x103b90da1cdf6055:0x9bc39fa8c79fd1cb!10e5',
    },
  },
  {
    name: 'places/EkMzMiBBdGxhbnRpYyBCbHZkLCBMZWtraSBQZW5uaW5zdWxhIElJLCBMYWdvcyAxMDYxMDQsIExhZ29zLCBOaWdlcmlhIjASLgoUChIJlb8VsKX3OxARtIAFvQXhSmIQICoUChIJ2VVSG6_3OxARBJ8Yx0h19aI',
    id: 'EkMzMiBBdGxhbnRpYyBCbHZkLCBMZWtraSBQZW5uaW5zdWxhIElJLCBMYWdvcyAxMDYxMDQsIExhZ29zLCBOaWdlcmlhIjASLgoUChIJlb8VsKX3OxARtIAFvQXhSmIQICoUChIJ2VVSG6_3OxARBJ8Yx0h19aI',
    types: ['street_address'],
    formattedAddress:
      '32 Atlantic Blvd, Lekki Penninsula II, Lagos 106104, Lagos, Nigeria',
    addressComponents: [
      {
        longText: '32',
        shortText: '32',
        types: ['street_number'],
        languageCode: 'en-US',
      },
      {
        longText: 'Atlantic Boulevard',
        shortText: 'Atlantic Blvd',
        types: ['route'],
        languageCode: 'en',
      },
      {
        longText: 'Lekki Penninsula II',
        shortText: 'Lekki Penninsula II',
        types: ['neighborhood', 'political'],
        languageCode: 'en',
      },
      {
        longText: 'Lagos',
        shortText: 'Lagos',
        types: ['locality', 'political'],
        languageCode: 'en',
      },
      {
        longText: 'Lekki/Ikate And Environs',
        shortText: 'Lekki/Ikate And Environs',
        types: ['administrative_area_level_3', 'political'],
        languageCode: 'en',
      },
      {
        longText: 'Eti Osa',
        shortText: 'Eti Osa',
        types: ['administrative_area_level_2', 'political'],
        languageCode: 'en',
      },
      {
        longText: 'Lagos',
        shortText: 'LA',
        types: ['administrative_area_level_1', 'political'],
        languageCode: 'en',
      },
      {
        longText: 'Nigeria',
        shortText: 'NG',
        types: ['country', 'political'],
        languageCode: 'en',
      },
      {
        longText: '106104',
        shortText: '106104',
        types: ['postal_code'],
        languageCode: 'en-US',
      },
    ],
    location: {
      latitude: 6.4308067,
      longitude: 3.5529351,
    },
    viewport: {
      low: {
        latitude: 6.4294577197084974,
        longitude: 3.5515861197084977,
      },
      high: {
        latitude: 6.4321556802915021,
        longitude: 3.5542840802915014,
      },
    },
    googleMapsUri:
      'https://maps.google.com/?q=32+Atlantic+Blvd,+Lekki+Penninsula+II,+Lagos+106104,+Lagos,+Nigeria&ftid=0x103bf7a5b015bf95:0xbbf9d6b6f3e7145c',
    utcOffsetMinutes: 60,
    adrFormatAddress:
      '\u003cspan class="street-address"\u003e32 Atlantic Blvd\u003c/span\u003e, \u003cspan class="extended-address"\u003eLekki Penninsula II\u003c/span\u003e, \u003cspan class="locality"\u003eLagos\u003c/span\u003e \u003cspan class="postal-code"\u003e106104\u003c/span\u003e, \u003cspan class="region"\u003eLagos\u003c/span\u003e, \u003cspan class="country-name"\u003eNigeria\u003c/span\u003e',
    iconMaskBaseUri:
      'https://maps.gstatic.com/mapfiles/place_api/icons/v2/generic_pinlet',
    iconBackgroundColor: '#7B9EB0',
    displayName: {
      text: '32 Atlantic Blvd',
    },
    shortFormattedAddress: '32 Atlantic Blvd, Lagos',
    pureServiceAreaBusiness: false,
    googleMapsLinks: {
      directionsUri:
        'https://www.google.com/maps/dir//6.4308067,3.5529351/data=!4m5!4m4!1m1!4e2!1m0!3e0',
      placeUri:
        'https://maps.google.com/?q=32+Atlantic+Blvd,+Lekki+Penninsula+II,+Lagos+106104,+Lagos,+Nigeria&ftid=0x103bf7a5b015bf95:0xbbf9d6b6f3e7145c',
    },
  },
];

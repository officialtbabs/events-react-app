// let timer: any;
// let lent = 180;

import AsyncStorage from '@react-native-async-storage/async-storage';
import {MotiTransitionProp} from 'moti';
import {Easing} from 'react-native-reanimated';
import Geolocation from 'react-native-geolocation-service';
import {Keyboard, PermissionsAndroid, Platform} from 'react-native';
import dayjs from 'dayjs';
import {emailPattern, passwordPattern} from './constants';
import {Linking} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';

import pallete from '../colors/pallete';
import {getUniqueId, getDeviceId} from 'react-native-device-info';
import {useGetCountry} from './hooks';
import moment from 'moment-timezone';
export const getCurrentLocation = () => {
  let position: {lat: number | undefined; long: number | undefined} = {
    lat: undefined,
    long: undefined,
  };
  Geolocation.getCurrentPosition(
    location => {
      // console.log({locunfjd: location});

      position = {
        lat: location.coords.latitude,
        long: location.coords.longitude,
      };
    },
    () => {},
    {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 5,
      showLocationDialog: true,
    },
  );

  return position;
};

export const getContactAuthorizationAndroid = () => {
  return PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
    {
      title: 'Papayr contact Permission',
      message: 'Papayr wants to access your location',
      buttonPositive: 'OK',
      buttonNegative: 'Cancel',
    },
  );
};

export const getAuthorizationIos = () => {
  return Geolocation.requestAuthorization('always');
};
export const getAuthorizationAndroid = () => {
  return PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title: 'Dot Location Permission',
      message: 'Dot wants to access your location',
      buttonPositive: 'OK',
      buttonNegative: 'Cancel',
    },
  );
};

export const secondsToTime = (secs: number) => {
  let minutes = Math.floor(secs / 60);

  let seconds = Math.ceil(secs % 60);

  let obj = {
    m: minutes > 9 ? minutes : `0${minutes}`,
    s: seconds > 9 ? seconds : `0${seconds}`,
  };
  return obj;
};

export const transition: MotiTransitionProp = {
  type: 'timing',
  duration: 300,
  easing: Easing.inOut(Easing.ease),
};
export const saveDataToStorage = async (name: string, value: any) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(name, jsonValue);
  } catch (e) {
    return e;
  }
  return null;
};
export const loadDataFromStorage = async (val: string) => {
  try {
    const data = await AsyncStorage.getItem(val);
    const parsedData = data != null ? JSON.parse(data) : null;
    return parsedData;
  } catch (e) {
    // console.log('Error loading data', e);
    return e;
  }
};

export const randomisedIDs = () => {
  let items = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 13, 14, 15, 16, 17, 18, 19, 12, 10,
  ];
  let id = '';

  for (let i = 0; i < items.length; i++) {
    let rand = Math.floor(Math.random() * items.length);

    id += rand;
  }
  return id;
};
export const capialiseFirst = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

export const capialiseFirstLetterOfWordsInSentence = (sentence: string) => {
  const words = sentence.split(' ');
  const capitalizedWords = words.map(
    word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
  );
  return capitalizedWords.join(' ');
};

export function decodeBase64(url: string, format: 'image' | 'video') {
  if (format === 'image') {
    return `data:image/png;base64,${url}`;
  } else {
    return `data:video/mp4;base64,${url}`;
  }
}

export const apostrophe = () => '&#39;';

export const containsLowercase = (val: string) => {
  return /[a-z]/.test(val);
};
export const containsUppercase = (val: string) => {
  return /[A-Z]/.test(val);
};
export const containsSpecial = (val: string) => {
  return /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(val);
  // return /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(val);
};
export const containsOneVal = (val: string) => {
  // return val.length > 0;
  return /\d/.test(val);
};
export const containsEightVal = (val: string) => {
  return val.length > 7;
};
export const checkEmail = (val: string) => {
  return String(val).toLowerCase().match(
    // /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    emailPattern,
  );
};
export const isVlidEmail = (val: string) => {
  // return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
  return emailPattern.test(val);
};

export function numberWithCommas(x: string | number) {
  return Number(x) % 1 === 0
    ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    : Number(x)
        .toFixed(2)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
export function numberWithoutCommas(x: string) {
  return x.toString().replace(/[,.]/g, '');
}

export const removeCurrency = (price: string) => {
  return price ? price.replace(/₦/g, '').replace(/$/g, '').toString() : '';
  // return parseFloat(price.replace(/₦/g, '').replace(/$/g, '')).toString();
};

export const nairaSign = () => {
  return '₦';
};
export const dollarSign = () => {
  return '$';
};

export const checkIsNan = (val: string) => {
  return isNaN(parseInt(val, 10)) ? 0 : parseInt(val, 10) * 1000;
};

export const capitalizeWord = (word: string) =>
  word[0].toUpperCase() + word.substring(1);

export const asteriskMiddle = (value: string) =>
  value.slice(0, 4) + '****' + value.slice(value.length - 4);

export const isIos = () => Platform.OS === 'ios';
export const isOver18 = (dob: Date) => {
  const nowDate = dayjs(new Date());
  const pickedDate = dayjs(dob);

  return pickedDate.diff(nowDate, 'year') <= -18;
};

export const parsePhoneNumber = (phone: String) => {
  let phoneNum = phone.replace(/[^\d]/g, '');
  // return phoneNum;
  // console.log({phoneNum});

  return phoneNum.startsWith('234') ? '0' + phoneNum.slice(3) : phoneNum;
  // return '0' + phoneNum.slice(3);
};

export const getGreetings = () => {
  var welcome = '';
  var date = new Date();
  var hour = date.getHours();
  // var minute = date.getMinutes();
  // var second = date.getSeconds();
  // if (minute < 10) {
  //   minute =  minute;
  //   // minute = '0' + minute;
  // }
  // if (second < 10) {
  //   second =  second;
  //   // second = '0' + second;
  // }
  if (hour < 12) {
    welcome = 'Good morning!';
  } else if (hour < 17) {
    welcome = 'Good afternoon!';
  } else {
    welcome = 'Good evening!';
  }
  return welcome;
};

export async function openLink(url: string) {
  try {
    if (await InAppBrowser.isAvailable()) {
      await InAppBrowser.open(url, {
        // iOS Properties
        dismissButtonStyle: 'cancel',
        preferredBarTintColor: pallete.primaryDefault,
        preferredControlTintColor: 'white',
        readerMode: false,
        animated: true,
        modalPresentationStyle: 'fullScreen',
        modalTransitionStyle: 'coverVertical',
        modalEnabled: true,
        enableBarCollapsing: false,
        // Android Properties
        showTitle: true,
        toolbarColor: pallete.primaryDefault,
        secondaryToolbarColor: 'black',
        navigationBarColor: 'black',
        navigationBarDividerColor: 'white',
        enableUrlBarHiding: true,
        enableDefaultShare: true,
        forceCloseOnRedirection: false,
        // Specify full animation resource identifier(package:anim/name)
        // or only resource name(in case of animation bundled with app).
        animations: {
          startEnter: 'slide_in_right',
          startExit: 'slide_out_left',
          endEnter: 'slide_in_left',
          endExit: 'slide_out_right',
        },
        // headers: {
        //   'my-custom-header': 'my custom header value',
        // },
      });
    } else {
      Linking.openURL(url);
    }
  } catch (error) {
    InAppBrowser.close();
  }
}

export const getAmountText = (points: string | number) => {
  const {isNigerian, isUk} = {isNigerian: true, isUk: false};

  return isNigerian
    ? `${nairaSign()} ${numberWithCommas(Number(points) * 5)}`
    : isUk
    ? `£ ${numberWithCommas(Number(points) / 100)}`
    : '';
};

export const useGetActualPoint = (points: string | number) => {
  const {isNigerian, isUk} = useGetCountry();

  return {
    actualPoints: isNigerian
      ? `${numberWithCommas(Number(points) / 5)}`
      : isUk
      ? `${numberWithCommas(Number(points) * 100)}`
      : '',
  };
};

export const useGetShortCurr = () => {
  const {isNigerian, isUk} = useGetCountry();
  return {
    shortCurrency: isNigerian ? `NGN (${nairaSign()})` : isUk ? `GBP (£)` : '',
  };
};

export const withSpace = (num: string | number) => {
  try {
    return num.toString().replace(/\B(?=(\d{5})+(?!\d))/g, ' ');
  } catch (error) {
    return 0;
  }
};
export const dismissKeyboard = () => {
  Keyboard.dismiss();
};
export const trimEmail = (email: string) => {
  return email.trim().toLocaleLowerCase();
};
export const trimPhone = (phone: string) => {
  return phone.startsWith('0') ? phone.slice(1) : phone;
};

export const getDeviceID = async () => {
  const biodevice = `${await getUniqueId()}${getDeviceId()}`;

  return biodevice;
};

export const supportUrl = 'support@papayr.com';

export const validateDOB = (dob: string): boolean | string => {
  const birthDate = new Date(dob);
  const today = new Date();

  const age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  const dayDiff = today.getDate() - birthDate.getDate();

  // Adjust age if the current date is before the birthday in the current year
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    return age > 18 || 'You must be at least 18 years old';
  }

  return age >= 18 || 'You must be at least 18 years old';
};

export const validatePassword = (
  password: string,
  username: string,
): boolean | string => {
  // Check if password matches the required pattern
  if (!passwordPattern.test(password)) {
    return 'Password must be 8-64 characters long, with at least one uppercase letter, one lowercase letter, one number, and one special character';
  }

  // Check if password is the same as username
  if (password.toLowerCase() === username.toLowerCase()) {
    return 'Password cannot be the same as the username';
  }

  // If both checks pass, return true (valid password)
  return true;
};

export const getFormatedTime = (date: Date) => {
  const time = moment(date).tz('Africa/Lagos');
  return time.format('h:mma [GMT]Z');
};

export const getFormatedDate = (date: Date) => {
  const dateValue = moment(date).tz('Africa/Lagos');
  return dateValue.format('Do MMM. YYYY');
};

export const getFormattedDateInDayMonth = (date: Date) => {
  return moment(date).format('MMM D');
};

export const getTrimTextInputDisplayText = (text: string) => {
  return text.length > 30 ? text.substring(0, 30) + '...' : text; // Truncate text when blurred
};

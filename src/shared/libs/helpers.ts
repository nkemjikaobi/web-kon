/* eslint-disable no-unused-vars */
import moment, { Moment } from "moment";
import { ParsedUrlQuery } from "querystring";

const { NEXT_PUBLIC_MERCHANT_FRONTEND_DOMAIN } = process.env;

import Estate1 from "/public/images/landingCarousel/estate1.jpeg";
import Estate2 from "/public/images/landingCarousel/estate2.jpeg";
import Estate3 from "/public/images/landingCarousel/estate3.jpeg";
import Estate4 from "/public/images/landingCarousel/estate4.jpeg";
import Estate5 from "/public/images/landingCarousel/estate5.jpeg";
import Estate6 from "/public/images/landingCarousel/estate6.jpeg";
import Estate7 from "/public/images/landingCarousel/estate7.jpeg";
import Estate8 from "/public/images/landingCarousel/estate8.jpeg";
import Vacation1 from "/public/images/landingCarousel/vacation1.jpeg";
import Vacation2 from "/public/images/landingCarousel/vacation2.jpeg";
import Vacation3 from "/public/images/landingCarousel/vacation3.jpeg";
import Vacation4 from "/public/images/landingCarousel/vacation4.jpeg";
import Vacation5 from "/public/images/landingCarousel/vacation5.jpeg";
import Vacation6 from "/public/images/landingCarousel/vacation6.jpeg";
import Vacation7 from "/public/images/landingCarousel/vacation7.jpeg";
import Vacation8 from "/public/images/landingCarousel/vacation8.jpeg";

export const noImagePlaceholder = "https://citisquare.sfo3.digitaloceanspaces.com/user-service/4e6157e3-67d3-41f0-85aa-4018fad662ee.jpg";

/**
 * Compose a number of styles together easily
 * @param {String} styles Classes/styles to be applied
 * @return {String} Combined classes
 */
export const composeClasses = (...styles: string[]): string => {
  let classes = "";

  styles.forEach((arg) => {
    if (arg) classes += `${arg} `;
  });

  return classes.trim();
};

// CURRENCIES
export const CURRENCIES = {
  NAIRA: "₦",
};

/**
 * Slide Left method
 * This is used to slide an element to the left of its current position
 * @param {string} idOfElement
 * @param {number} distance
 */
export const slideLeft = (idOfElement: string, distance: number) => {
  const slider: any = document.getElementById(idOfElement);
  slider.scrollLeft = slider?.scrollLeft - distance;
};

/**
 * Format time to this format DD MMMM YYYY h:mm a
 * @param {string} time
 * @return {string}
 */
export const formatTime = (time: string | Moment) => {
  const date = moment(time).format("DD MMMM YYYY h:mm a");
  return date;
};

/**
 * Add naira symbol to price
 * @param {string} price
 * @return {string}
 */
export const addNairaToPrice = (price: string) => {
  return `${CURRENCIES.NAIRA} ${price}`;
};

/**
 * Slide Right method
 * This is used to slide an element to the right of its current position
 * @param {string} idOfElement
 * @param {number} distance
 */
export const slideRight = (idOfElement: string, distance: number) => {
  const slider: any = document.getElementById(idOfElement);
  slider.scrollLeft = slider?.scrollLeft + distance;
};

/**
 * Button properties for the custom button
 */
export const ButtonProperties = {
  SIZES: {
    small: "small",
    medium: "medium",
    big: "big",
  },
  ICON_POSITION: {
    start: "start",
    end: "end",
  },
  VARIANT: {
    primary: {
      name: "primary",
      background: "citiGreen-500",
      hover: "citiGreen-800",
      disabled: "citiGreen-200",
      focused: "citiGreen-500",
    },
    secondary: {
      name: "secondary",
      background: "citiBlue-400",
      hover: "citiBlue-600",
      disabled: "citiBlue-100",
      focused: "citiBlue-400",
    },
  },
};

export const CheckBoxProperties = {
  LABEL_POSITION: {
    start: "start",
    end: "end",
  },
  SHAPE: {
    square: "square",
    rounded: "rounded",
  },
  SIZES: {
    small: "small",
    big: "big",
  },
};

export const RadioButtonProperties = {
  LABEL_POSITION: {
    start: "start",
    end: "end",
  },
  SIZES: {
    small: "small",
    big: "big",
  },
};

/**
 * Truncate text with ellipses method
 * This is used to cut short the length of a text and attach ellipses to the
 * end of the text to signify that some part of the text is missing.
 * @param {string} text
 * @param {number} limit
 * @return {string} truncated text
 */
export const truncateText = (text: string, limit: number = 20): string => {
  return text.length > limit ? `${text.slice(0, limit)}...` : text;
};

/**
 * Separate classes with space between
 * This is used to separate a list of classes that are separated by commas to a list
 * classes that are separated by space
 * @param {string[]} classes
 * @return {string} classNames
 */
export const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(" ");
};

export const externalDocs = {
  BNPL: "https://docs.google.com/forms/d/e/1FAIpQLSf2e7NNlXtQIxum6khrIHRlHLgxOj_i8QS3gWn_YIyq1Wwe4A/viewform",
  MORTGAGE: "https://docs.google.com/forms/d/e/1FAIpQLSfhZPy8Z3AdIb-tUQBFWqIujO7brMVW-o1AUzvysRkveNssvQ/viewform",
  CUSTOMISED_VACATIONS: "https://docs.google.com/forms/d/e/1FAIpQLSeLlSfKTtnbrCgorBCVrTGsK_rNiyu7gaoJm7cLPWt_9Uis_Q/viewform",
};

/**
 * @namespace
 * @description              - The regular expressions used for various input fields.
 * @property {RegExp}  email - It ensures an email starts with a small letter,
 *                             and proceeds with any character/(s) of choice before the "@" symbol,
 *                             then accepts at least one small letter after the "@" symbol but
 *                             before the "." and finally ends with more than two letters but
 *                             less than four letters.
 * @property {RegExp}  name  - It accepts only letters and hyphen.
 * @property {RegExp}  password    - It ensures at least both letters and numbers.
 * @property {RegExp}  phoneNumber - It ensures the field starts with a number in
 */
export const REGEX = {
  email: /^[a-zA-z]+[a-zA-z.-_\d\W]*@([a-z]+\.)+[a-z]{2,4}$/g,
  name: /^[\sa-zA-Z]+( [a-zA-Z]+)*(-[a-zA-Z\s]+)?$/,
  password: /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]*)(?!.*\s).{8,50}$/,
  phoneNumber: /^[7-9][0-1][0-9]+$/,
  specialCharacter: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/,
  numbers: /[0-9]/,
  capsCheck: /[A-Z]/,
};

export const errorMessages = {
  email: "Email is not valid",
  maxChar: (num: number) => `This field cannot have more than ${num} characters`,
  minChar: (num: number) => `This field must be at least ${num} characters`,
  minLowerCase: (num: number) => `This field must be at least ${num} lower case character`,
  minUpperCase: (num: number) => `This field must be at least ${num} upper case character`,
  minNumber: (num: number) => `This field must be at least ${num} number`,
  minSymbol: (num: number) => `This field must be at least ${num} special character`,
  required: "This field is compulsory",
  passwordMatch: "Passwords dont match",
};

/**
 * Check if all keys in object is empty
 * @param {Object} obj
 * @return {boolean}
 */
export const checkProperties = (obj: any) => {
  for (const key in obj) {
    if (obj[key] !== null && obj[key] != "") return false;
  }
  return true;
};

/**
 * Status for various responses
 */
export const Status = {
  FAILED: "failed",
  SUCCESS: "success",
  ERROR: "error",
};

/**
 * Notification Types
 */
export enum NotificationTypes {
  ERROR = "error",
  SUCCESS = "success",
  INFO = "info",
}

export enum CitiServicesName {
  vacation = "vacations",
  finance = "finance",
  spa = "spa",
  shortlets = "shortlets",
  realEstate = "real-estate-investment",
  experience = "experiences",
}

export enum LocalStorageKeys {
  TOKEN = "token",
  EXPIRATION_TIME = "time",
}

export const CitiServices = {
  VACATION: {
    name: CitiServicesName.vacation,
    images: [
      {
        id: 1,
        url: Vacation1,
      },
      {
        id: 2,
        url: Vacation2,
      },
      {
        id: 3,
        url: Vacation3,
      },
      {
        id: 4,
        url: Vacation4,
      },
      {
        id: 5,
        url: Vacation5,
      },
      {
        id: 6,
        url: Vacation6,
      },
      {
        id: 7,
        url: Vacation7,
      },
      {
        id: 8,
        url: Vacation8,
      },
    ],
  },
  REAL_ESATE: {
    name: CitiServicesName.realEstate,
    images: [
      {
        id: 1,
        url: Estate1,
      },
      {
        id: 2,
        url: Estate2,
      },
      {
        id: 3,
        url: Estate3,
      },
      {
        id: 4,
        url: Estate4,
      },
      {
        id: 5,
        url: Estate5,
      },
      {
        id: 6,
        url: Estate6,
      },
      {
        id: 7,
        url: Estate7,
      },
      {
        id: 8,
        url: Estate8,
      },
    ],
  },
};

export const goToMerchantPath = (path: MerchantAppPath) => {
  return `${NEXT_PUBLIC_MERCHANT_FRONTEND_DOMAIN}${path}`;
};

export enum MerchantAppPath {
  LOGIN = "auth/login",
  CREATE_ACCT = "auth/create-account",
}

export const costNoOfHours = (costPerHour: number, noOfHours: number) => {
  return costPerHour * noOfHours;
};

export const costNoOfPersons = (noOfPersons: number, noOfHours: number, costPerHour: number) => {
  return noOfPersons * noOfHours * costPerHour;
};

export const TotalSpaCost = (costPerHour: number, noOfHours: number, noOfPersons: number, serviceCharge: number) => {
  return costPerHour * noOfHours * noOfPersons + serviceCharge;
};

/**
 * Return sanitized HTML to be rendered to prevent XSS attacks from user generated content
 * Rationale: https://zhenyong.github.io/react/tips/dangerously-set-inner-html.html
 * @param {String} content HTML content from server
 * @return {Object} Sanitized content
 */
export const getSanitizedHtml = (content: string) => ({ __html: content });

/**
 * @param {String} urlKey the url key for the entity
 * @return {string} the icon name as stored in the /icons/stock
 */
export const getEntityIconWithUrlKey = (urlKey: string): string => {
  if (urlKey.replaceAll("-", "").toLowerCase().includes("realestate")) {
    return "realEstate";
  }

  return urlKey;
};

export const getTokenExpirationTime = (): Moment => {
  // moment().add(70, "h"); --- 70 hours from current time
  return moment().add(45, "m"); // 45 minutes from current time
};

export const getUrlQuery = (query: ParsedUrlQuery): string => {
  if (Object.keys(query).length > 0) {
    return `?${Object.entries(query).map(([key, value]) => `${key}=${value}&`)}`.replaceAll(",", "").slice(0, -1);
  } else return "";
};

export const ENTITIES = {
  SPA: "spa",
  VACATIONS: "vacations",
  SHORTLETS: "shortlets",
  REAL_ESTATE: "real-estate-investment",
};

export const CATEGORIES = {
  CUSTOMISED_TRIPS_VACATIONS: "customised-trips-vacations",
};

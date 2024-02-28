/// cookie name

export const SESSION_ID_COOKIE_NAME = "__xsn";
export const USER_SIGNED_OR_NOT_COOKIE_NAME = "__xsg";
export const OTP_SESSION_COOKIE_NAME = "_ops";

const setMaxAge = (days = 1) => days * 3600 * 24;

export const secureCookie = {
   httpOnly: true,
   sameSite: "strict",
   secure: process.env.NODE_ENV === "production" ? true : false,
   maxAge: setMaxAge(), // if not value then expire after one day
};

export const normalCookies = {
   maxAge: setMaxAge(), // if no value then expire after one day
};

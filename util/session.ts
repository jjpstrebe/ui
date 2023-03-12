// this file is a wrapper with defaults to be used in both API routes and `getServerSideProps` functions
import type { IronSessionOptions } from "iron-session";
import type { User } from "../pages/api/user";

export const sessionOptions: IronSessionOptions = {
  password: '2gyZ3GDw3LHZQKDhPmPDL3sjREVRXPr8',
  cookieName: "iron-session/examples/next.js",
  cookieOptions: {
    maxAge: undefined,
//    secure: process.env.NODE_ENV === "production",
    secure: false,
  },
};

// This is where we specify the typings of req.session.*
declare module "iron-session" {
  interface IronSessionData {
    user?: User;
  }
}

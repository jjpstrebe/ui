import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../util/session";
import { NextApiRequest, NextApiResponse } from "next";
import type { User } from "./user";

export default withIronSessionApiRoute(logoutRoute, sessionOptions);

function logoutRoute(req: NextApiRequest, res: NextApiResponse<User>) {
  req.session.destroy();
  res.json({ isLoggedIn: false, login: "", password: "" });
}

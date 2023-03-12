import type { User } from "./user";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../util/session";
import { NextApiRequest, NextApiResponse } from "next";
import crypto from 'crypto';


export default withIronSessionApiRoute(loginRoute, sessionOptions);


async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = await req.body;

  try {
    if (username !== 'jjpstrebe') {
      throw new Error('Invalid username or password');
    }
    const enteredPasswordHash = crypto.createHash('md5').update(password).digest('hex');
    const dbPasswordHash = crypto.createHash('md5').update('abc').digest('hex');
    if (enteredPasswordHash !== dbPasswordHash) {
      throw new Error('Invalid username or password');
    }
    const user = { isLoggedIn: true, login: 'jjpstrebe', password: '' } as User;
    req.session.user = user;
    await req.session.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: (error as Error).message });
  }
}

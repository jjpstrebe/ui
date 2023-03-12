import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../util/session";
import { NextApiRequest, NextApiResponse } from "next";


export type Events = {
  someAPIValue: string;
  anotherAPIValue: number;
};


export default withIronSessionApiRoute(eventsRoute, sessionOptions);


async function eventsRoute(req: NextApiRequest, res: NextApiResponse<Events>) {
  const user = req.session.user;

  if (!user || user.isLoggedIn === false) {
    res.status(401).end();
    return;
  }

  try {
    const { data: events } = {
      data: {
        someAPIValue: 'first',
        anotherAPIValue: 2,
      }
    };

    res.json(events);
  } catch (error) {
    res.status(200).json({
      someAPIValue: '',
      anotherAPIValue: 0,
    });
  }
}

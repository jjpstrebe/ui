// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Data } from '../../util/table';


type RenderTree = {
  id: string;
  name: string;
  children?: readonly RenderTree[];
}


function createData(
  name: string,
  calories: number,
  fat: number | undefined = undefined,
  carbs: number | undefined = undefined,
  protein: number | undefined = undefined,
  fake1: number | undefined = undefined,
  fake2: number | undefined = undefined,
  fake3: number | undefined = undefined,
): Data {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    fake1,
    fake2,
    fake3,
  };
}

var rows = [
  [
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Honeycomb', 408, 3.2, 87, 6.5),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Jelly Bean', 375, 0.0, 94, 0.0),
    createData('KitKat', 518, 26.0, 65, 7.0),
    createData('Lollipop', 392, 0.2, 98, 0.0),
    createData('Marshmallow', 318, 0, 81, 2.0),
    createData('Nougat', 360, 19.0, 9, 37.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
  ], [
    createData('cUPCake', 100305, undefined, undefined, undefined, 3.7, 67, 4.3),
    createData('dONUt', 100452, undefined, undefined, undefined, 25.0, 51, 4.9),
    createData('eCLAir', 100262, undefined, undefined, undefined, 16.0, 24, 6.0),
    createData('fROZen yoghurt', 100159, undefined, undefined, undefined, 6.0, 24, 4.0),
    createData('gINGerbread', 100356, undefined, undefined, undefined, 16.0, 49, 3.9),
    createData('hONEycomb', 100408, undefined, undefined, undefined, 3.2, 87, 6.5),
    createData('iCE cream sandwich', 100237, undefined, undefined, undefined, 9.0, 37, 4.3),
    createData('jELLy Bean', 100375, undefined, undefined, undefined, 0.0, 94, 0.0),
    createData('kITkat', 100518, undefined, undefined, undefined, 26.0, 65, 7.0),
    createData('lOLLipop', 100392, undefined, undefined, undefined, 0.2, 98, 0.0),
    createData('mARShmallow', 310018, undefined, undefined, undefined, 0, 81, 2.0),
    createData('nOUGat', 360100, undefined, undefined, undefined, 19.0, 9, 37.0),
    createData('oREO', 437100, undefined, undefined, undefined, 18.0, 63, 4.0),
  ]
]


function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[][] | {message: string}>
) {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return;
  }
  console.log('handling');
  await sleep(1000);
  rows[1].push(createData('Latest and Greatest', 2000, undefined, undefined, undefined, 100.0, 100, 100.0));
  res.status(200).json(rows);
}

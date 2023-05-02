import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';
import path from 'path';


const dataDirectory = path.join(process.cwd(), 'public', 'external', 'Downloads', 'Frame_Updates');


function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{message: string}>
) {
//  if (req.method !== 'POST') {
//    res.status(405).send({ message: 'Only POST requests allowed' });
//    return;
//  }
  console.log("gathering programs' logs");
  let total = 0
  for (let i = 0; i < 10000000000; i++) {
    total += i * i;
  }
//  await sleep(20000);
  let logs = {};
  fileNames = await fs.readdir(dataDirectory);
  fileNames.map(file => {
    if (file.endswith('.log')) {
      logs[file] = fs.readFile(dataDirectory + file);
    }
  });
  res.status(200).json({message: 'finished ' + total.toString()});
}

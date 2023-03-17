import NodeMediaSever from 'node-media-server';

import prisma from './prisma-client';

import { HTTP_PORT, RTMP_PORT } from './config';

let streamKey = '';

const config = {
  logType: 3,

  rtmp: {
    port: Number(RTMP_PORT),
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60,
  },
  http: {
    port: Number(HTTP_PORT),
    allow_origin: '*',
    mediaroot: './server/media/live',
  },
};

export const nms = new NodeMediaSever(config);

const getStreamKeyFromStreamPath = (path: string) => {
  const parts = path.split('/');

  return parts[parts.length - 1];
};

nms.on('prePublish', async (id, StreamPath, args) => {
  streamKey = getStreamKeyFromStreamPath(StreamPath);
  console.log(args);
  

  // const existingStream = await prisma.stream.findFirst({
  //   where: {
  //     streamKey: streamKey,
  //   }
  // });

  // await prisma.stream.update({
  //   where: {
  //     streamKey: streamKey,
  //   },
  //   data: {
  //     active: true,
  //   },
  // });

  // if (!existingStream) {
  //   throw new Error('Not existing stream');
  // }

  console.log('[NodeEvent on prePublish]', `id=${id} StreamPath=${StreamPath} args=${JSON.stringify(args)}`);
});

nms.run();

nms.on('doneConnect', async (id, StreamPath, args) => {

  // await prisma.stream.update({
  //   where: {
  //     streamKey,
  //   },
  //   data: {
  //     active: true,
  //   },
  // });
});

nms.on('donePlay', async (id, StreamPath, args) => {
  // const streamKey = getStreamKeyFromStreamPath(StreamPath);
  console.log(streamKey);

  // await prisma.stream.update({
  //   where: {
  //     streamKey,
  //   },
  //   data: {
  //     active: false,
  //   },
  // });
});

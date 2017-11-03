import * as fs from 'fs';

import { callbackToPromise } from '../callback-to-promise';

export const readdir = callbackToPromise<string[]>(fs.readdir);
export const unlink = callbackToPromise<void>(fs.unlink);
export const writeFile = callbackToPromise<void>(fs.writeFile);

export type Resolve<T> = (value?: T) => void;
/* tslint:disable-next-line:no-any */
export type Reject = (reason?: any) => void;

/**
 * Represents a typical callback
 * @param err: describes the error or undefined
 * @param value: optional resolved value or undefined
 */
/* tslint:disable-next-line:no-any */
export type Callback<T> = (err: any, value?: T) => void;

/**
 * @param resolve: fulfillment handler of promise
 * @param reject: rejection handler of promise
 * @returns a callback that uses resolve / reject
 */
const createPromiseCallback = <T>(
  resolve: Resolve<T>,
  reject: Reject
): Callback<T> => (err, value) => {
  if (err) {
    reject(err);
    return;
  }

  resolve(value);
};

/**
 * @param f: function that accepts a Callback<T> as last argument
 * @returns a promise that resolves with type T
 */
/* tslint:disable-next-line:no-any */
export const callbackToPromise = <T>(f: any) => (...args: any[]): Promise<T> =>
  new Promise((resolve, reject) => {
    f(...args, createPromiseCallback(resolve, reject));
  });

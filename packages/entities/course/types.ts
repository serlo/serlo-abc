export interface IIdentifiableObject {
  id: string;
  /* tslint:disable-next-line: no-any */
  [propName: string]: any;
}

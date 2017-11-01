export interface ISerializedLeaf {
  id: string;
  type: string;
  /* tslint:disable-next-line: no-any */
  [propName: string]: any;
}

export interface ISerializedInternalNode {
  id: string;
  children: ISerializedCourse[];
  /* tslint:disable-next-line: no-any */
  [propName: string]: any;
}

export type ISerializedCourse = ISerializedInternalNode | ISerializedLeaf;

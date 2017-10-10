export interface ISerializedLeaf {
  id: string;
  type: string;
  [propName: string]: any;
}

export interface ISerializedInternalNode {
  id: string;
  children: ISerializedCourse[];
  [propName: string]: any;
}

export type ISerializedCourse = ISerializedInternalNode | ISerializedLeaf;

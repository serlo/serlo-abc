export interface ILeafStructure {
  id: string;
  type: string;
}

export interface IInternalNodeStructure {
  id: string;
  children: ICourseStructure[];
}

export type ICourseStructure = IInternalNodeStructure | ILeafStructure;

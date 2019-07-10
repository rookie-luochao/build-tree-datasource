declare module "build-tree-datasource" {
  interface IChildren<T> {
    children?: T[]
  }

  type INodeWithChildren<T> = { [P in keyof T]: T[P] } & IChildren<T>

  function buildTree<T>(data: T[], nodeUniqueIndex?: string, nodeLinkKey?: string): INodeWithChildren<T>[]
  
  export = buildTree;
}
```
import buildTree from "build-tree-datasource";

const source = [
  {
    id: 1,
    parentId: undefined,
    groupName: {
      name: '经理1',
      count: 10
    },
  },
  {
    id: 2,
    parentId: null,
    groupName: {
      name: '经理2',
      count: 1
    },
  },
  {
    id: 3,
    parentId: 0,
    groupName: {
      name: '经理3',
      count: 2
    },
  },
  {
    id: 4,
    parentId: 1,
    groupName: {
      name: '主管1',
      count: 4
    },
  },
  {
    id: 5,
    parentId: 1,
    groupName: {
      name: '主管2',
      count: 6
    },
  },
  {
    id: 6,
    parentId: 4,
    groupName: {
      name: '小组1',
      count: 4
    },
  },
  {
    id: 7,
    parentId: 5,
    groupName: {
      name: '小组2',
      count: 4
    },
  },
  {
    id: 8,
    parentId: 2,
    groupName: {
      name: '主管3',
      count: 0
    },
  },
  {
    id: 9,
    parentId: 3,
    groupName: {
      name: '主管4',
      count: 0
    },
  },
];

// first param is init data(array)
// second param is unique element ID, default is id
// third param is link ID between nodes, default is parentId

console.log(buildTree(source))
console.log(buildTree(source, "id", "parentId"))
```
function hasParentNode(data, item, nodeUniqueIndex, nodeLinkKey) { // 是否存在父节点
  const index = data.findIndex(c => c[nodeUniqueIndex] === item[nodeLinkKey])
  if (~index) return true
}

function getChildrenNodes(parentNodes, allNodes, nodeUniqueIndex, nodeLinkKey) { // 获取每一个节点的子节点
  if (parentNodes.length === 0) return
  const node = parentNodes.shift()
  for (let i = 0; i < allNodes.length; i += 1) {
    const current = allNodes[i]
    if (node[nodeUniqueIndex] === current[nodeLinkKey]) {
      if (node.children) node.children.push(current)
      else node.children = [current]
      parentNodes.push(current)
      allNodes.splice(i, 1) // 删除已经找到父节点的元素
      i -= 1 // 删除元素后把索引往前挪一位
    }
  }
  getChildrenNodes(parentNodes, allNodes, nodeUniqueIndex, nodeLinkKey)
}

export default function buildTree(data, nodeUniqueIndex = "id", nodeLinkKey = "parentId") {
  const parentNodes = []; // 有子节点的父级节点数组
  data.forEach((item) => {
    if (!hasParentNode(data, item, nodeUniqueIndex, nodeLinkKey)) parentNodes.push(item)
  })
  if (parentNodes.length <= 0) return
  const dataSource = [...parentNodes] // 最终数组
  getChildrenNodes(parentNodes, data, nodeUniqueIndex, nodeLinkKey)
  return dataSource
}
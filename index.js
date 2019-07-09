function hasParentNode(data, item) { // 是否存在父节点
  const index = data.findIndex(c => c.id === item.parentId)
  if (~index) return true
}

function getChildrenNodes(parentNodes, allNodes) { // 获取每一个节点的子节点
  if (parentNodes.length === 0) return
  const node = parentNodes.shift()
  for (let i = 0; i < allNodes.length; i += 1) {
    const current = allNodes[i]
    if (node.id === current.parentId) {
      if (node.children) node.children.push(current)
      else node.children = [current]
      parentNodes.push(current)
      allNodes.splice(i, 1) // 删除已经找到父节点的元素
      i -= 1 // 删除元素后把索引往前挪一位
    }
  }
  getChildrenNodes(parentNodes, allNodes)
}

export function buildTree(data) {
  const parentNodes = []; // 有子节点的父级节点数组
  data.forEach((item) => {
    if (!hasParentNode(data, item)) parentNodes.push(item)
  })
  if (parentNodes.length <= 0) return
  const dataSource = [...parentNodes] // 最终数组，引用类型的缘故，你操作parentNodes的每一个元素的过程就是操作dataSource的每一个元素的过程，我经常利用这个特性，如果你不想这样，你可能需要深拷贝复制一个新数组，有时候妙用这一特性能给你带来很多的便利
  getChildrenNodes(parentNodes, data)
  return dataSource
}
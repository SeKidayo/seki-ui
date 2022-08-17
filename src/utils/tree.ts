/**
 * 树相关算法
 */

/**
 * 列表 转换为 树
 * @param list 待转换列表
 * @param itemCode 列表项唯一标识字段对应Code
 * @param parentCode 列表项指定父节点字段对应Code
 * @returns 转换后的树
 */
export function listToTree(
  list: Record<string, any>[],
  itemCode: string,
  parentCode: string
) {
  const tree: Record<string, any>[] = [];
  const map: Record<string, any> = {};

  // 转 数组 为 对象, 提升查询速度
  list.forEach((item) => {
    map[item[itemCode]] = {
      ...item,
      children: [],
    };
  });

  list.forEach((item) => {
    // 当列表某项所指向的父节点Code为null undefined or '' or 其他判定为空值时, 不在map中进行取值操作, 保持其原本值
    const parent = item[parentCode] ? map[item[parentCode]] : item[parentCode];
    if (parent) {
      parent.children.push(item);
    } else {
      tree.push(item);
    }
  });

  return tree;
}

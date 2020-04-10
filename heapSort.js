/*
堆排序（Heapsort）
是指利用堆这种数据结构所设计的一种排序算法。堆积是一个近似完全二叉树的结构，
并同时满足堆积的性质：即子结点的键值或索引总是小于（或者大于）它的父节点。堆排序可以说是一种利用堆的概念来排序的选择排序。分为两种方法：

大顶堆：每个节点的值都大于或等于其子节点的值，在堆排序算法中用于升序排列；
小顶堆：每个节点的值都小于或等于其子节点的值，在堆排序算法中用于降序排列；
堆排序的平均时间复杂度为 Ο(nlogn)。
*/

/*
创建一个堆 H[0……n-1]；
把堆首（最大值）和堆尾互换；
把堆的尺寸缩小 1，并调用 shift_down(0)，目的是把新的数组顶端数据调整到相应位置；
重复步骤 2，直到堆的尺寸为 1。
*/

/*
参考资料：http://www.zyiz.net/tech/detail-122420.html
*/

/*
 * 1. 从一个节点出发
 * 2. 从它的左子树和右子树中选择一个较大值
 * 3. 将较大值与这个节点进行位置交换
 * 上述步骤,就是一次heapify的操作
 * */

// n为树的节点数，i为当前操作的节点 (找到这颗树里的最大节点)
const heapify = function (tree, n, i) {
  if (i >= n) {
    // 结束递归
    return;
  }
  // 找到左子树的位置
  let leftNode = 2 * i + 1;
  // 找到右子树的位置
  let rightNode = 2 * i + 2;

  /*
    1. 找到左子树和右子树位置后，必须确保它小于树的总节点数
    2. 已知当前节点与它的左子树与右子树的位置，找到最大值
  */
  // 设最大值的位置为i
  let max = i;
  // 如果左子树的值大于当前节点的值则最大值的位置就为左子树的位置
  if (leftNode < n && tree[leftNode] > tree[max]) {
    max = leftNode;
  }
  // 如果右子树的值大于当前节点的值则最大值的位置就为右子树的位置
  if (rightNode < n && tree[rightNode] > tree[max]) {
    max = rightNode;
  }

  /*
   * 1. 进行大小比较后，如果最大值的位置不是刚开始设的i，则将最大值与当前节点进行位置互换
   * */
  if (max !== i) {
    // 交换位置
    swap(tree, max, i);
    // 递归调用，继续进行heapify操作
    heapify(tree, n, max);
  }
};

// 交换数组位置函数
const swap = function (arr, max, i) {
  [arr[max], arr[i]] = [arr[i], arr[max]];
};

/*
 * 将完全二叉树构建成堆
 * 1. 从树的最后一个父节点开始进行heapify操作
 * 2. 树的最后一个父节点 = 树的最后一个子结点的父节点
 * */
const buildHeap = function (tree, n) {
  // 最后一个节点的位置 = 数组的长度-1
  const lastNode = n - 1;
  // 最后一个节点的父节点
  const parentNode = Math.floor((lastNode - 1) / 2);
  // 从最后一个父节点开始进行heapify操作
  for (let i = parentNode; i >= 0; i--) {
    heapify(tree, n, i);
  }
};

// 堆排序函数
const heapSort = function (tree, n) {
  // 构建堆
  buildHeap(tree, n);
  // 从最后一个节点出发
  for (let i = n - 1; i >= 0; i--) {
    // 交换根节点和最后一个节点的位置
    swap(tree, i, 0);
    // 重新调整堆
    heapify(tree, i, 0);
  }
};

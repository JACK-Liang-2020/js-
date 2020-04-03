/*
插入排序的代码实现虽然没有冒泡排序和选择排序那么简单粗暴，但它的原理应该是最容易理解的了，
因为只要打过扑克牌的人都应该能够秒懂。插入排序是一种最简单直观的排序算法，
它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。

插入排序和冒泡排序一样，也有一种优化算法，叫做拆半插入。
*/

/*
算法步骤:
将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。
从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。
（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）
*/

/* 
再解析：假设len等于8
    1.preIndex 从 0 开始，while的循环次数 会随 preIndex 增大 而增多
    2.while循环体 ：
*/

function insertionSort(arr) {
  let len = arr.length;
  let preIndex, current;
  for (let i = 1; i < len; i++) {
    preIndex = i - 1;
    current = arr[i];
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex];
      preIndex--;
      //   console.log("while", preIndex);
    }
    // console.log("while", preIndex);
    arr[preIndex + 1] = current;
  }
  return arr;
}

insertionSort([1, 5, 3, 6, 77]);

/*
VM11123:12 while 0
VM11123:10 while 0
VM11123:12 while 0
VM11123:12 while 2
VM11123:12 while 3
*/

/**
 * // 模拟运行
 *  index:         0  1  2  3  4
 *  insertionSort([1, 5, 3, 6, 77]);
 *
 * len = 5
 *
 * for i=1 -> preIndex = 0,crrent = 5 ,
 *     while arr[0] > arr[1] -> 1>5 not ->
 *     arr[1] = 5,原数组不变
 *
 * for i=2 -> preIndex = 1,crrent = 3 , 
 *     while arr[1] > arr[2] -> 5>3 yes ->
 *        arr[2] = arr[1] =》 arr[2] = 5  => 原数组 [1,5,5,6,77]
 *        preIndex = 0 但是 arr[0] > arr[2] -> 1>5 not =》退出while时 原数组为[1,5,5,6,77]
 *     arr[1] = 3 => 原数组为 [1,3,5,6,77]
 *
 * for i=3 -> preIndex = 2,crrent = arr[3] , while arr[3] > arr[2] not ->
 *
 *
 */

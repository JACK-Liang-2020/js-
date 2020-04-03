/*
冒泡排序（Bubble Sort）也是一种简单直观的排序算法。它重复地走访过要排序的数列，一次比较两个元素，
如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。
这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。
*/

/*
算法步骤:
比较相邻的元素。如果第一个比第二个大，就交换他们两个。
对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
针对所有的元素重复以上的步骤，除了最后一个。
持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
*/

/* 
再解析：
  1.arr[0]=arr[0] 循环没进入if
  2.当i等于0时，arr[0]与arr[1],arr[2].....arr[len-1]的对比，若符合条件，则两者的值互换
  3.假设len等于8，最外层循环在i等于6时进行最后一遍循环，但是i还会加一，i最后会等于7
  4.由4可知，内层循环在j等于0时进行最后一遍循环，但是j还会加一，j最后会等于1
  5.j会慢慢变小，对比的次数越来越少，该方法的对比方向是先确定了 最末尾的一位
  6.每次符合条件的对比都把 大的值 赋给 相对较末的那一位
*/

function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // 相邻元素两两对比
        // var temp = arr[j + 1]; // 元素交换
        // arr[j + 1] = arr[j];
        // arr[j] = temp;

        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// bubbleSort([1, 5, 3, 6, 77, 6, 888, 765, 354, 34]);

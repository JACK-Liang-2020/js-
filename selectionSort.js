/*
选择排序是一种简单直观的排序算法，无论什么数据进去都是 O(n²) 的时间复杂度。
所以用到它的时候，数据规模越小越好。唯一的好处可能就是不占用额外的内存空间了吧。
*/

/*
算法步骤:
先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置
再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
重复第二步，直到所有元素均排序完毕。
*/

/* 
再解析：假设len等于8
  1.len-1为7，i在执行最后一次循环的时候为6
  2.j为i+1，j在循环中最小值为1，最大值为8，但是最终j不参与循环的时候，等于9
  3.排序的方向是找到最小的数，存放到起始位置
*/

function selectionSort(arr) {
  var len = arr.length;
  var minIndex, temp;

  // 为什么len-1?
  for (var i = 0; i < len - 1; i++) {
    minIndex = i;
    // 为什么i+1?
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        // 寻找最小的数
        // 将最小数的索引保存
        minIndex = j;
      }
    }

    // temp = arr[i];
    // arr[i] = arr[minIndex];
    // arr[minIndex] = temp;

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}

selectionSort([1, 5, 3, 6, 77, 6, 888, 765, 354, 34]);

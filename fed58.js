/* 牛客题目
在原数组上操作需要对数组对象的属性进行操作。
另外pop()函数也是这样 */
function removeWithoutCopy(arr, item) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === item){
            for(let j = i; j < arr.length - 1; j++){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
            arr.pop()
            i -= 1
        }
    }
    return arr
}
removeWithoutCopy([1, 2, 2, 3, 4, 2, 2], 2)

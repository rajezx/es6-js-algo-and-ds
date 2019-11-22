let arr = [1, 5, 7, 2, 4, 3, 0, 6]
// Function takes arr and two index position to swap values in an array
const swapItemInAnArray = (arr, i, j) => {
    // here we're doing by "object by reference" and so we don't need to return anything
    let t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}

let isSorted = false
while (!isSorted) {
    isSorted=true
    for (let [index, value] of arr.entries()) {
        if (arr[index] > arr[index + 1]) {
            swapItemInAnArray(arr, index, index + 1)
            isSorted = false
        }
    }
}

console.log(arr)


function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)

        if (arr[mid] === target) {
            return mid // Target was found, returns index
        } else if (arr[mid] < target) {
            left = mid + 1 // The target is in the right half
        } else {
            right = mid - 1 // The target is in the left half
        }
    }

    return -1 // Target was not found
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
const target = 7

const index = binarySearch(sortedArray, target)
console.log(index) // Output: 3 (index where number 7 is in the array)
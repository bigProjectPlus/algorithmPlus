const a1 = [1, 3, 4, 5, 7, 8, 12, 15]
const a2 = [1, 3, 4, 5, 7, 8, 12]
const a3 = [1, 2, 2, 6, 6, 6, 7, 10]
const a4 = [2, 2, 3]

function binarySearch(nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        const mid = parseInt(left + (right - left) / 2)
        console.log(mid);
        if (nums[mid] == target) {
            return mid
        } else if (nums[mid] > target) {
            right = mid - 1
        } else if (nums[mid] < target) {
            left = mid + 1
        }
    }
    return -1
}

function binarySearchOnLeft(nums, target) {
    let left = 0
    let right = nums.length - 1
    // 由于target == nums[mid]时继续搜索边界,不等式保证不出现死循环
    while (left < right) {
        // 向下取整，保证[1,1]时不会死循环
        const mid = Math.floor(left / 2 + right / 2)
        console.log(left, right)
        if (target == nums[mid]) {
            right = mid
        } else if (target > nums[mid]) {
            left = mid + 1
        } else if (target < nums[mid]) {
            right = mid - 1
        }
    }

    if (nums[left] != target) return -1

    return left
}

// binarySearchOnLeft(a4, 2)

function binarySearchOnRight(nums, target) {
    let left = 0
    let right = nums.length - 1

    // 由于target == nums[mid]时继续搜索边界,不等式保证不出现死循环
    while (left < right) {
        // 向上取整，保证[1,1]时不会死循环
        const mid = Math.ceil(left / 2 + right / 2)
        console.log(left, right)
        if (target == nums[mid]) {
            left = mid
        } else if (target > nums[mid]) {
            left = mid + 1
        } else if (target < nums[mid]) {
            right = mid - 1
        }
    }

    if (nums[right] != target) return -1

    return right
}

binarySearchOnRight(a3, 2)
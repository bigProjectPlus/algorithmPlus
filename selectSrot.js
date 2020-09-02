const a1 = [5, 4, 7, 1, 2, 9, 3]
const a2 = [2, 1]

/**
 * 计数排序，外排序，O(N)复杂度
 *
 * @param {*} nums
 * @returns
 */
function selectSrot(nums) {
    const count = []
    const res = []
    for (let i = 0; i < nums.length; i++) {
        const item = nums[i];
        if (count[item]) {
            count[item]++
        } else {
            count[item] = 1
        }
    }
    console.log(count);
    for (let i = 0; i < count.length; i++) {
        const item = count[i];
        if (!item) continue
        for (let j = 0; j < item; j++) {
            res.push(i)
        }
    }
    return res
}

selectSrot(a1)
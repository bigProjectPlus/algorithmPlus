const a1 = [5, 4, 7, 1, 2, 9, 3]

function binarySearchTreeInset(treeNode, elem) {
    if (treeNode.value == undefined) {
        treeNode.value = elem
        return
    }
    if (elem > treeNode.value) {
        if (!treeNode.right) {
            treeNode.right = {}
        }
        binarySearchTreeInset(treeNode.right, elem)
    } else if (elem < treeNode.value) {
        if (!treeNode.left) {
            treeNode.left = {}
        }
        binarySearchTreeInset(treeNode.left, elem)
    } else if (elem == treeNode.value) {
        return
    }
}

function binarySearchTreeCreate(nums) {
    const treeNode = {}
    for (let i = 0; i < nums.length; i++) {
        const elem = nums[i];
        binarySearchTreeInset(treeNode, elem)
    }
    return treeNode
}

binarySearchTreeCreate(a1)
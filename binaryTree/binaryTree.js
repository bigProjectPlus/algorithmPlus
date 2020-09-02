const tree = {
    value: 0,
    left: {
        value: 1,
        left: {
            value: 3,
            left: {
                value: 7,
            },
            right: {
                value: 8,
            }
        },
        right: {
            value: 4,
        }
    },
    right: {
        value: 2,
        left: {
            value: 5,
        },
        right: {
            value: 6,
        }
    }
}


/**
 * 二叉树遍历
 *
 * @param {*} treeNode
 */
function binaryTreePlugOne(treeNode) {
    if (!treeNode) return
    if (!treeNode.left) return
    if (!treeNode.right) return
    treeNode.value = 1
    binaryTreePlugOne(treeNode.left)
    binaryTreePlugOne(treeNode.right)
}

// binaryTreePlugOne(tree)

// console.log(tree);


/**
 * 二叉树比较
 *
 * @param {*} treeNode1
 * @param {*} treeNode2
 * @returns
 */
function binaryTreeDiffTree(treeNode1, treeNode2) {
    console.log(treeNode1, treeNode2)
    if (!treeNode1 && !treeNode2) return true
    if (!treeNode1 || !treeNode2) return false
    if (treeNode1.value != treeNode2.value) return false
    
    const leftRes = binaryTreeDiffTree(treeNode1.left, treeNode2.left)
    if (!leftRes) return false
    const rightRes = binaryTreeDiffTree(treeNode1.right, treeNode2.right)
    if (!rightRes) return false
    return true
    // return binaryTreePlugOne(treeNode1.left, treeNode2.left) && binaryTreePlugOne(treeNode1.right, treeNode2.right)
}

binaryTreeDiffTree(tree, {})
// 给出两个 非空 的链表用来表示两个非负的整数。 其中， 它们各自的位数是按照 逆序 的方式存储的， 并且它们的每个节点只能存储 一位 数字。

// 如果， 我们将这两个数相加起来， 则会返回一个新的链表来表示它们的和。

// 您可以假设除了数字 0 之外， 这两个数都不会以 0 开头。

// 示例：

// 输入：(2 - > 4 - > 3) + (5 - > 6 - > 4)
// 输出： 7 - > 0 - > 8
// 原因： 342 + 465 = 807

// 来源： 力扣（ LeetCode）
// 链接： https://leetcode-cn.com/problems/add-two-numbers

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    const res1 = ListNode2List(l1).reverse().join('')
    const res2 = ListNode2List(l2).reverse().join('')
    const res = ((+res1) + (+res2)).toString().split('').reverse()
    console.log(res1, res2, res)
    return createListNode(res)
};


var createListNode = function (nums = [2, 3, 5, 7, 1]) {
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }
    let header = null
    let curNode = null

    for (let i = 0; i < nums.length; i++) {
        const item = nums[i];
        const node = new ListNode(item)
        if (curNode) {
            curNode.next = node
            curNode = node
        } else {
            header = node
            curNode = node
        }
    }
    // console.log(header)
    return header
}

var ListNode2List = function (ListNode) {
    const res = []
    let curNode = ListNode
    while (curNode && curNode != null) {
        res.push(curNode.val)
        curNode = curNode.next
    }
    // console.log(res);
    return res
}

var cloneListNode = function (ln) {
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }
    let curNode = ln
    let header = null
    let newCurNode = null

    while (curNode && curNode != null) {
        const val = curNode.val
        if (newCurNode) {
            newCurNode.next = new ListNode(val)
            newCurNode = newCurNode.next
        } else {
            header = new ListNode(val)
            newCurNode = header
        }
        curNode = curNode.next
    }
    console.log(header);
    return header
}

addTwoNumbers(createListNode([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]), createListNode([5, 6, 4]))

// cloneListNode(createListNode())
// 主要考察instanceof的判断原理，instanceof主要的实现原理就是只要右边变量的 prototype 在左边变量的原型链上即可。
// 因此，instanceof 在查找的过程中会遍历左边变量的原型链，直到找到右边变量的 prototype，如果查找失败，则会返回 false。
/**
  自定义instanceof 
*/
function _instanceOf(left, right) {
    let proto = left.__proto__
    while (proto) {
        if (proto === right.prototype) {
            return true
        }
        proto = proto.__proto__
    }
    return false
}

class A {}
class B extends A {}
class C {}

const b = new B()
// 输出 true
console.log(_instanceOf(b, B))
// 输出 true
console.log(_instanceOf(b, A))
// 输出 false
console.log(_instanceOf(b, C))

/**
 * 实现要点：柯里化函数接收到足够参数后，就会执行原函数，那么我们如何去确定何时达到足够的参数呢？
 * 柯里化函数需要记住你已经给过他的参数，如果没给的话，则默认为一个空数组。
 * 接下来每次调用的时候，需要检查参数是否给够，如果够了，则执行fn，没有的话则返回一个新的 curry 函数，将现有的参数塞给他。
 * 
 */
// 待柯里化处理的函数
var sum = (a, b, c, d) => {
    return a + b + c + d
}

function curry(fun, ...args) {
    return function (...argsNext) {
        if ([...args, ...argsNext].length >= fun.length) {
            return fun.apply(this, [...args, ...argsNext])
        } else {
            return curry(fun, ...args, ...argsNext)
        }
    }
}

var sumPlus = curry(sum)
sumPlus(1)(2)(3)(4)
sumPlus(1, 2)(3)(4)
sumPlus(1, 2, 3)(4)

// new 传入构造函数，根据构造函数创建新对象
function _new(fun) {
    const args = [...arguments].slice(1)
    // 继承fun原型上的属性与方法
    const obj = Object.create(fun.prototype)
    // 给新对象添加构造函数上的属性，并执行
    const res = fun.call(obj, ...args)
    if (res instanceof Object) {
        return obj
    }
    return res
}

Function.prototype._call = function (context, ...args) {
    context.fun = this
    const res = context.fun(...args)
    delete context.fun
    return res
}

Function.prototype._bind = function (context, ...args) {
    context.fun = this
    return function F(...argsNext) {
        let res
        // 判断经过bind改变this的函数是否作为构造函数
        if (this instanceof F) {
            res = new context.fun(...args, ...argsNext)
        } else {
            res = context.fun(...args, ...argsNext)
        }
        delete context.fun
        return res
    }
}


/**
 * 简易promise
 *
 * @param {*} callback
 */
function _Promise(callback) {
    const event = []
    this.then = function (callbackFun) {
        event.push(callbackFun)
        return this
    }

    function resolve(args) {
        const callbackFun = event.shift()
        callbackFun(args, resolve)
    }

    callback(resolve)
}

new _Promise((resolve) => {
    console.log(1)
    setTimeout(() => {
        console.log(2)
        resolve(123)
    }, 1000);
}).then((res, resolve) => {
    setTimeout(() => {
        console.log(3);
        resolve(456)
    }, 1000);
}).then((res, resolve) => {
    setTimeout(() => {
        console.log(4);
        resolve(789)
    }, 1000);
}).then((res, resolve) => {
    console.log(res)
})


function deepClone(target, map = new Map()) {
    if (target instanceof Object) {
        const res = Array.isArray(target) ? [] : {}
        const keys = Object.keys(res)
        while (keys.length) {
            const key = keys.shift()
            const value = res[key]
            if (map.get(key)) {
                res[key] = map.get(key)
            } else {
                map.set(key, value)
                res[key] = deepClone(value, map)
            }
        }
    }
    return target
}

const target = {
    field1: 1,
    field2: undefined,
    field3: {
        child: 'child'
    },
    field4: [2, 4, 8]
};
target.target = target;

let a = deepClone(target);


const debounce = (fun, t = 1000) => {
    let timer = null
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fun.call(this, ...args)
        }, t);
    }
}

const throttle = (fun, t = 1000) => {
    let flag = true
    return function (...args) {
        if (flag) {
            setTimeout(() => {
                fun.call(this, ...args)
                flag = true
            }, t);
        } else {
            flag = false
        }
    }
}

// this和箭头函数的值可以一言以蔽之：
// 箭头函数： this等同于上一层非箭头的函数的this值或全局对象（ window或undefined）
// this： 谁调用归谁
// 同时由于箭头函数本身没有this，所以call,apply无法直接改变箭头函数的this，只能借助改变指向箭头函数的this去达到改变箭头函数this的目的
// https://segmentfault.com/q/1010000017321137/a-1020000017321309

// var x = 11;
let x = 11;
let obb = {
    x: 222,
    say: function () {
        console.log(this.x, this);
    },
    a: {
        x: 333,
        say: function () {
            console.log(this.x, this);
        },
        b: {
            x: 111,
            say: function () {
                console.log(this.x, this);
                let obj = {
                    x: 22,
                    say: () => {
                        console.log(this.x);
                    }
                };
                obj.say();
            },
            c: {
                x: 22,
                say: () => {
                    console.log(this.x, this, '----');
                    (function () {
                        console.log(this);
                    })()
                }
            },
            d: function () {
                const say = () => {
                    console.log(this, this.x)
                }
                say()
            }
        }
    }
};

obb.a.b.d()

obb.a.b.c.say();



let obj1 = {
    getName: function () {
        console.log(this.name);
        return function () {
            console.log(this.name);
        };
    }
};

let obj = {
    name: '123',
    get: {
        name: 'obj.name',
        getName: obj1.getName()
    }
};

obj.get.getName();
/*
 * @Author: river
 * @Date: 2020-04-27 10:47:43
 * @Last Modified by: river
 * @Last Modified time: 2020-04-27 11:07:43
 */
// JavaScript 模块化模式

const log = (...args) => console.log(...args);

const myModule = {
    myProperty: 'someValue',

    // 对象字面值包含了属性和方法（properties and methods）.
    // 例如，我们可以定义一个模块配置进对象：
    myConfig: {
        useCaching: true,
        language: 'en',
    },

    // 非常基本的方法
    myMethod: function () {
        console.log('Where in the world is Paul Irish today?');
    },

    // 输出基于当前配置（<span>configuration</span>）的一个值
    myMethod2: function () {
        console.log(
            'Caching is:' + this.myConfig.useCaching ? 'enabled' : 'disabled'
        );
    },
};

// 模块化模式
const demo1 = (function () {
    let val = 0;
    return {
        name: 'demo1',
        add() {
            val += 1;
        },
        get() {
            return val;
        },
    };
})();

log(demo1);
log(demo1.get());
demo1.add();
log(demo1.get());

// Import mixins(导入混合)
// Global module
const jQuery = {};
const _ = {
    min(args) {
        return Math.min(...args);
    },
};
const myModule2 = (function (jQ, _) {
    function privateMethod2() {
        console.log(_.min([10, 5, 100, 2, 1000]));
    }

    return {
        publicMethod: function () {
            privateMethod2();
        },
    };

    // Pull in jQuery and Underscore
})(jQuery, _);

myModule2.publicMethod();

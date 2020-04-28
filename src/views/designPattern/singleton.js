/*
 * @Author: river
 * @Date: 2020-04-27 16:51:45
 * @Last Modified by: river
 * @Last Modified time: 2020-04-27 17:04:04
 */
// JavaScript 单例模式

const mySingleton = (function () {
    // Instance stores a reference to the Singleton
    var instance;

    function init() {
        // 单例

        // 私有方法和变量
        function privateMethod() {
            console.log('I am private');
        }

        var privateVariable = 'Im also private';

        var privateRandomNumber = Math.random();

        return {
            // 共有方法和变量
            publicMethod: function () {
                console.log('The public can see me!');
            },

            publicProperty: 'I am also public',

            getRandomNumber: function () {
                return privateRandomNumber;
            },
        };
    }

    return {
        // 如果存在获取此单例实例，如果不存在创建一个单例实例
        getInstance: function () {
            if (!instance) {
                instance = init();
            }

            return instance;
        },
    };
})();

console.log(mySingleton.getInstance() === mySingleton.getInstance());

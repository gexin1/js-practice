/*
 * @Author: river
 * @Date: 2020-04-27 10:46:06
 * @Last Modified by:   river
 * @Last Modified time: 2020-04-27 10:46:06
 */
// JavaScript 构造器模式
/**
 * 基础构造器
 * @param {*} name
 * @param {*} age
 */
function People(name, age) {
    this.name = name;
    this.age = age;

    this.toString = () => {
        console.log(`People name=${this.name} age=${this.age}`);
        return this;
    };
}

People.prototype.working = function () {
    console.log(`People name=${this.name} age=${this.age}  working`);
};

const p1 = new People('😕', '18');

p1.toString().working();

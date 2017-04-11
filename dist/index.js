/**
 * Created by joshjahans on 11/04/2017.
 */
var HelloTS = (function () {
    function HelloTS(greeting) {
        this.greeting = greeting;
    }
    HelloTS.prototype.sayHello = function () {
        console.log(this.greeting + ", World!");
    };
    return HelloTS;
}());
new HelloTS('Hello');
//# sourceMappingURL=index.js.map
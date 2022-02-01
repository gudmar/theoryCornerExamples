class decoratorTest{
    constructor(nr){
          this._createArray(nr);
    }
    _createArray(nr){
        let outlet = [];
        for(let i = 1; i <= nr; i++){
            outlet.push(i);
        }
        this.arr = outlet;
    }
    operationFacotry(){
        return {
            sum: function(prevItem, item, index){
                return prevItem += item;
            },
            multiply: function(prevItem, item, index){
                return prevItem *= item;
            },
            rest: function(prevItem, item, index){
                return prevItem %= item;
            },
        }
    }
    makeOperation(type){
        let fun = this.operationFacotry()[type];
        return this.arr.reduce(fun)
    }
    multiply(){return this.makeOperation('multiply')}
    sum(){return this.makeOperation('sum')}
    rest(){return this.makeOperation('rest')}
    getPower(a,b){return Math.pow(a,b)}

}

function ret(){
    class test extends decoratorTest{
        constructor(){super()}
    }
    return test;
}
    new ret();

function decorateClass(target, decoratorFunction = (targetMethod)=>{return targetMethod}){
    class Extended extends target{
        constructor(props){
            super(props);
        }
    }
    let targetProto = Object.getPrototypeOf(Extended.prototype);
    let keys = Object.getOwnPropertyNames(targetProto);
    let targetMethods = [];
    for (let key of keys){
        if (key !== '__proto__'){
            targetMethods.push({
                name: key,
                body: targetProto[key]
            })
        }
    }
    for(let method of targetMethods){
        Extended.prototype[method.name] = decoratorFunction(method.body);
    }
    return Extended;
}

function measurePerformance(method){
    let startTime = performance.now();
    let methodResult = method
    let endTime = performance.now();
    console.log(`performance of : ${method.name} = ${endTime - startTime}`);
    return methodResult;
}
let calssWithPerformance = decorateClass(decoratorTest, measurePerformance);
let testInstance = new calssWithPerformance(100);
console.log(testInstance.multiply());
console.log(testInstance.sum());
console.log(testInstance.getPower(10,20));

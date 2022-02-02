 // https://blog.logrocket.com/a-practical-guide-to-typescript-decorators/

// Reflect metadata
// https://github.com/rbuckton/reflect-metadata




// Property decorators


// Parameter decorators


// Accessor decorator


// Method decorator

class PerformOnEachArrayElement {
    arr: [number];
    constructor(arr:[number]){
        this.arr = arr;
    }

    power(p:number){
        return this.arr.map((val:number, index: number, arr: [number])=>{
            return Math.pow(val, p);
        })
    }

    strength(){
        return this.arr.map((val:number,index:number,array:[number])=>{
            return this.singleStrength(val);
        },1)
    }
    private singleStrength(val:number):number{
        let acc = 1;
        for (let i = 0; i < val; i++){
            acc *= i;
        }
        return acc;
    }

}

function performance(target:Object, propKey: string, descriptor:Object ){
    
}


// Class decorator
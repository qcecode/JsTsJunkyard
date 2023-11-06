// 904. Fruit Into Baskets


// "stupid solution" works :)
var totalFruit = function(fruits) {
  
    let max = 0
    
    for (let i = 0; i < fruits.length; i++){
        let fruitA = fruits[i];
        let fruitB = -1;
        let cnt = 0;
        for(let j = i; j < fruits.length; j++){
            if(fruitA !== fruits[j] && fruitB === -1){
                    fruitB = fruits[j];
            }
            if(fruits[j] !== fruitA && fruits[j] !== fruitB){
                break
            }
            cnt++
            if(cnt > max){
                max = cnt;
            }
        }
    }
    return max;
};


class Fruit {
    constructor(fruit, count, lastPresentCnt = 0) {
        this.fruit = fruit;
        this.count = count;
        this.lastPresentCnt = lastPresentCnt;
    }
}


var totalFruit2 = function(fruits) {
    let max = 0;
    
    let fruitA = new Fruit(fruits[0], 1, 1)
    let fruitB = new Fruit(-1,0)
    
    for (let i = 1; i < fruits.length; i++){
        
        let fruit = fruits[i];

        if(fruit === fruitA.fruit || fruitA.fruit === -1){
            fruitA.fruit = fruits[i];
            fruitA.count++
            fruitA.lastPresentCnt += 1;
            fruitB.lastPresentCnt = 0;
            continue
        }
        if(fruit === fruitB.fruit || fruitB.fruit === -1){
            fruitB.fruit = fruits[i];
            fruitB.count++
            fruitB.lastPresentCnt += 1;
            fruitA.lastPresentCnt = 0;
            continue
        }
        
        if(max < fruitA.count + fruitB.count){
            max = fruitA.count + fruitB.count;
        }
        
        if(fruitA.lastPresentCnt > 0){
            fruitA.count = fruitA.lastPresentCnt;
            fruitA.lastPresentCnt = 0;
            fruitB = new Fruit(fruits[i],1,1 )
        }
        else{
            fruitB.count = fruitB.lastPresentCnt;
            fruitB.lastPresentCnt = 0;
            fruitA = new Fruit(fruits[i],1, 1)
        }
        
    }
    if(max < fruitA.count + fruitB.count){
        max = fruitA.count + fruitB.count;
    }
    return max;
};

let testFruits = [1,0,3,4,3];
console.log(totalFruit2(testFruits));
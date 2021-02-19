require('./bootstrap.scss');

const { MilitaryResource } = require('./military');

class Squad {

    constructor(...defaultResources) {
        this.squad = [];
        if (defaultResources) 
        defaultResources.forEach((res) => this.squad.push(res));
    }
   
    isReadyToMove() {
        var result = true;
        this.squad.forEach((res) => result = (!res.isReadyToMove() ? false : result) );
        return result;
    }
    isReadyToMove() {
        var result = true;
        this.squad.forEach((res) => result = (!res.isReadyToMove() ? false : result) );
        return result;
    }
    isReadyToFight() {
        var result = true;
        this.squad.forEach((res) => result = (!res.isReadyToFight() ? false : result) );
        return result;
    }
    restore() {
        this.squad.forEach((res) => res.restore() );
    }
    getReadyToMoveResources() {
        var readysquad = [];
        for (var i = 0; i < this.squad.length; i++) {
            if (this.squad[i].isReadyToMove() && this.squad[i].isReadyToFight()) {
                readysquad.push(Object.assign({}, this.squad[i]));
            }  
        }
        return readysquad;
    }
    clone() {
        var clonesquad = [];
        for (var i = 0; i < this.squad.length; i++) {
            clonesquad.push(Object.assign({}, this.squad[i]));
        }
        return clonesquad;
    }
}

infantryMan1 = new MilitaryResource('Infantryman',100,500);
infantryMan2 = new MilitaryResource('Infantryman',100,500);
tankMan1 = new MilitaryResource('Infantryman',100,1000);
tankMan2 = new MilitaryResource('Infantryman',100,1000);

console.log(infantryMan1.isReadyToMove());


mySquad = new Squad(infantryMan1,infantryMan2,tankMan1,tankMan2);

console.log(mySquad.isReadyToMove());
infantryMan1.useHealth(10);
console.log(mySquad.isReadyToMove());
console.log(mySquad.isReadyToFight());
console.log(mySquad.getReadyToMoveResources());
mySquad.restore();
console.log(mySquad.isReadyToMove());
console.log(mySquad.clone());



function CreateCounter(){
    let count=0;
    return function(){
        count++;
        return count;
    }
}
const counter1=CreateCounter();
const counter2=CreateCounter();
console.log(counter1());
console.log(counter1());
console.log(counter2())
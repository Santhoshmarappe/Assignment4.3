
import { Car } from './interface'
//Export 2 functions with the export keyword
//Export 1st funxction
export function carDetail(car1: Car) {
    console.log(`The First car details are : Model ${car1.model} and Engine ${car1.engine} and the horespower is ${car1.horsepower}`);
  }

//Export 2nd fuction
export function carDetail2(car2:Car){
    console.log(`The Second car details are : Model ${car2.model} and Engine ${car2.engine} and the horespower is ${car2.horsepower}`);
}

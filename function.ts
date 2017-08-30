//consume the interface functions
import {Car} from './interface'
import { carDetail } from './implementation'
import { carDetail2 } from  './implementation'
//carDetail1
let myCar1: Car = { 
    model: "Wagon R", 
    engine: "K10B", 
    horsepower: 1000
  }
  carDetail(myCar1);
  
 // carDetail2
let myCar2: Car = { 
    model: " Audi", 
    engine: "AD0I", 
    horsepower: 2500
  }
  carDetail2(myCar2);

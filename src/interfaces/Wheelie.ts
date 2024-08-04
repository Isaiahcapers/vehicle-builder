import Motorbike from "../classes/Motorbike";
interface Wheelie {
    make: string;
    model: string;
    action(make:string, model:string):void =>  {
       console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);  
        }
      
}

export default Wheelie;


export function increase(number: number){
      if(number > 100){
        return 100;
      }else{
        // Every javascript function returns something if there are not a return statement then
        // The function return Undefined
        return number + 1;
      }
}

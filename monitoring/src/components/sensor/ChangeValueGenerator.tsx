import { useEffect, useState } from "react";


const ChangeValueGenerator = () => {
  const generateArray = () => {
  let arr = [];
  while (true) {
    arr.push(1)
    if (arr.length === 10){
      break;
    }
    console.log(arr.length);
    
  }
  console.log('yas');
  return arr
  
  
};
  

  // useEffect(() => {
    //  generateArray();
    // setMyArray(array);
   // Empty dependency array means this runs only once

  return <div>{generateArray()}</div>;
};

export default ChangeValueGenerator
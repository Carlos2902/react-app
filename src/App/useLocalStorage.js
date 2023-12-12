import React from 'react'

// custom hook: localStorage Logic
function useLocalStorage(itemName,initialValue){
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
    // If there's none value on local storage...
    if (!localStorageItem){
      // If it's the first time a user enters into the app, lets drop an empty array
      localStorage.setItem(itemName,JSON.stringify(initialValue));
      parsedItem = initialValue;
    }else{
      parsedItem=JSON.parse(localStorageItem);
    }
    const [item, setItem] = React.useState(parsedItem);
     // function -> update the state & local storage at the same time
     const  saveItem = (newItem)=>{
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    };
  
    return [item, saveItem];
  }

  export {useLocalStorage};
import React from "react";

// custom hook: localStorage Logic
function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  // New load & error state: pop up if there's empty array or,
  // we're still expecting for LocalStorage to load.
  const [loading, setLoading] = React.useState(true);
  // true once the App is loading... to show the text of 'loading'
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(()=> {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        // If there's none value on local storage...
        if (!localStorageItem) {
          // If it's the first time a user enters into the app, lets drop an empty array
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
         // Set the initial state here
         setItem(parsedItem);
        // After localStorage is done loading, the setLoading will be false
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
    // await time: 2 seconds
  },[]);

  // function -> update the state & local storage at the same time
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  console.log(item);

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };

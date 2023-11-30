import { useState } from "react";
import { ItemElement, UUID } from "../interfaces/interfaces";

const Items: ItemElement[] = [];

export const useItem = () => {
    const [items, setItems] = useState<ItemElement[]>(Items);

    const addItems = ( name: string ) =>{
        const newItem: ItemElement = {
            id: crypto.randomUUID(),
            name
          }
      
          setItems([...items, newItem]);
    }

    const removeItems = ( uuid: UUID ) =>{
        const Items = [...items].filter( element => element.id !== uuid);
        setItems(Items);
    }

  return {
    items,
    addItems,
    removeItems
  }  
}
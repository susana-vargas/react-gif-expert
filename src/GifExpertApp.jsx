import { useState } from "react";
import {AddCategory, GifGrid} from './components';

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['Dragon Ball'])

  const onAddCategory = (onNewCategory) => {

    if (categories.includes(onNewCategory)) return;

    //categories.push(onNewCategory);
    setCategories([onNewCategory, ...categories]);
    //setCategories(cat => [...cat, 'Valorant']);
  }


  return (
    <>
    <h1>Gif Expert App</h1>
    <AddCategory 
    //setCategories={setCategories}
    onNewCategory={(value) => onAddCategory(value)}
    />
    {/*Listado de Gif*/}
    {
    categories.map( (category) => (
        <GifGrid 
        key={category} 
        category={category}/>
      ))
    }
    </>
  )
}
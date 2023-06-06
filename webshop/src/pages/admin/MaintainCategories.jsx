import React, { useEffect, useRef, useState } from 'react'
import config from "../../data/config.json"

function MaintainCategories() {

  const [categories, setCategories] = useState([])
  const categoryRef = useRef()

  useEffect(() => {
    fetch(config.categoriesDbUrl)
    .then(res => res.json())
    .then(json => setCategories(json || []))
  }, []);

  const addCategory = (event) => {
    if (event.code === "Enter"|| event.type === "click") {
    categories.push({"name": categoryRef.current.value })
    setCategories(categories.slice());
    //setCategories([...categories]);
    fetch(config.categoriesDbUrl, 
    {"method": "PUT", "body": JSON.stringify(categories)});
    categoryRef.current.value = "";
    }

  }
  //pane asju tagasi samale aadressile
  //name on võti, tuleb lisada sama ka mapi
  const deleteCategory = (index) => {
    categories.splice(index, 1);
    setCategories(categories.slice()); // uuendab HTMLi
    //setCategories([...categories]);
    fetch(config.categoriesDbUrl, //uuendab andmebaasi
    {"method": "PUT", "body": JSON.stringify(categories)});

  }



  return (
    <div>
      <label >New Category</label> <br />
      <input onKeyUp={addCategory} ref={categoryRef} type="text" /> <br />
      <button onClick={addCategory} >Add category</button> <br />
      <div>
        {categories.map((category,i) => <div key={i}> {category.name}  <button onClick={() => deleteCategory(i)}>x</button> </div>)}
      </div>
    </div>
  )
}

export default MaintainCategories


//{categories.map(category => <div>{category}</div>)}
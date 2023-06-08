import React from 'react'

function FilterButtons(props) {
    const filterByCategory = (categoryClicked) => {
        const result = props.dbProducts.filter(product => product.category.includes(categoryClicked)); // IIcategoryClicked on muutuvas seisundis
        props.setProducts(result);
      }
  return (
    <div>
         {props.categories.map(category =>
        <button key={category.name} onClick={() => filterByCategory(category.name)}>
          {category.name}</button>
      )}
    </div>
  )
}

export default FilterButtons
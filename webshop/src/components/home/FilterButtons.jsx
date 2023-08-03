import React from 'react'
import {Button} from '@mui/material';

function FilterButtons(props) {
    const filterByCategory = (categoryClicked) => {
        const result = props.dbProducts.filter(product => product.category.includes(categoryClicked)); // IIcategoryClicked on muutuvas seisundis
        props.setProducts(result);
      }
  return (
    <div>
         {props.categories.map(category =>
        <Button variant="outlined" key={category.name} onClick={() => filterByCategory(category.name)}>
          {category.name}</Button>
      )}
    </div>
  )
}

export default FilterButtons
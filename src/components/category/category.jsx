import { Stack } from '@mui/material';
import React from 'react';
import { category } from '../../constants';

const Category = ({ selectedCategoryHandler, selectedCategory }) => {
  return (
    <Stack direction={'row'} justifyContent={'space-between'}  p={2} pt={1} sx={{overflowX: 'scroll'}}>
        {category.map(item => (
            <button key={item.name} 
            className='category-btn' 
            style={{ borderRadius: '10px',
            background: item.name === selectedCategory && '#555',
            color: item.name === selectedCategory && '#fff' }}
            onClick={() => selectedCategoryHandler(item.name)}>
                <span>{item.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default Category
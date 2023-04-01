import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const Fields = ({index, title, desc, removeItem}) => {
    return (
        <div className='data_val'>
            <h4>{title}</h4>
            <h4>{desc}</h4>
            <h4><Button onClick={() => removeItem(index)} variant="outlined" color="error">
                <DeleteIcon />
            </Button></h4>
        </div>
    )
}

export default Fields

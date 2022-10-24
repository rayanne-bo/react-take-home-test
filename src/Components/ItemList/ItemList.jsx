import React from 'react'
import {Box, Button, Grid, Paper, Stack, Typography} from '@mui/material'
import { makeStyles } from '@mui/styles'

import OptionItem from '../OptionItem/OptionItem'


const useStyles = makeStyles((theme) => ({
    mainBox: {
    }
  }));

  const ItemList = ({itemList, list_id, setselectedItems, selectedItems}) => {


    itemList.forEach(element => { 
        console.log(element['id'])
        if (selectedItems[list_id])
            console.log(selectedItems[list_id]['id'])

    });
    return <Stack spacing={5} justifyContent="center" alignItems={"center"}   direction={{ xs: 'column', sm: 'row' }}>
        {itemList.map((value, idx) =>
             <OptionItem 
                setselectedItems={setselectedItems}
                selectedItems={selectedItems}
                list_id={list_id}
                isSelected={selectedItems[list_id] ? value['id'] === selectedItems[list_id]['id']: false}
                content={value}/>)
        }
    </Stack>
  }

  export default ItemList
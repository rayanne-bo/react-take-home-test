import React from 'react'
import {Box, Button, Stack, Typography} from '@mui/material'
import { makeStyles } from '@mui/styles'


const useStyles = makeStyles((theme) => ({
    mainBox: {
      backgroundColor: "rgba(0, 115, 150, 0.5)",
      padding: "1%"
    },
    selectedMainBox: {
      backgroundColor: "rgba(0, 115, 150, 0.5)",
      padding: "1%",
      border: "2px solid orange"
    }
  }));


  const OptionItem = ({content, list_id, isSelected=false, setselectedItems, selectedItems}) => {


    const classes = useStyles()

    const handleSelection = () => {

      setselectedItems({...selectedItems, [list_id]: content})
    }

    let item_styling = isSelected ? classes.selectedMainBox : classes.mainBox

    return <Box className={item_styling}>
        <Stack direction="column" spacing={2}>
            <Typography variant='body1' >{content['name']}</Typography>
                <img alt="ship" style={{borderRadius: "50%"}} height={"128"} width={"128"} src={content['photoUrL']}/>
            <Button variant="contained" onClick={(event) => handleSelection()}> Select {list_id}</Button>
        </Stack>
    </Box>
  }


  export default OptionItem
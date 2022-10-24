import React, { useEffect, useState } from 'react';
import { Box, Button, Divider, Stack, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import axios from 'axios';
import ItemList from '../ItemList/ItemList';
import SimpleDialog from '../SimpleDialog/SimpleDialog';


const useStyles = makeStyles((theme) => ({
  mainBox: {
    padding: "1%"
  }
}));

const ComputationOptions = () => {

  const [shipData, setshipData] = useState([])
  const [selectedItems, setselectedItems] = useState({})
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let response = await axios.get('http://localhost:8080/api/computation-options')
      setshipData(response.data)
    }
    fetchData()
  }, [])
  

  const handleModal = () => {
    setOpen(true)
  }

  const classes = useStyles()

  return (
    <Box className={classes.mainBox}>
      <SimpleDialog onClose={setOpen} open={open}></SimpleDialog>
      <Stack direction="column" spacing={2}>
        <Typography variant="h4">Efficientship - Computation parameters</Typography>
        
        <Divider textAlign="left">SHIPS</Divider>
        {'items' in shipData 
        ? <ItemList 
            setselectedItems={setselectedItems}
            itemList={shipData['items'][0]['items']}
            selectedItems={selectedItems}
            list_id={shipData['items'][0]['id']}/> 
        : <Typography>Loading Data...</Typography> }

        <Divider textAlign="left">MARITIME LINE</Divider>
        {'items' in shipData 
        ? <ItemList 
            setselectedItems={setselectedItems}
            itemList={shipData['items'][1]['items']}
            selectedItems={selectedItems}
            list_id={shipData['items'][1]['id']}/> 
        : <Typography>Loading Data...</Typography> }

        <Divider textAlign="left">WASPS</Divider>
        {'items' in shipData 
        ? <ItemList 
            setselectedItems={setselectedItems}
            itemList={shipData['items'][2]['items']}
            selectedItems={selectedItems}
            list_id={shipData['items'][2]['id']}/> 
        : <Typography>Loading Data...</Typography> }

        <Divider style={{backgroundColor: "orange", height: 2}} variant="middle"></Divider>
        <Stack style={{padding: "1%"}}>
          <Button disabled={Object.keys(selectedItems).length !== 3} variant="contained" onClick={handleModal} fullWidth>Launch Computation</Button>
        </Stack>
      </Stack>
    </Box>

  )
}

export default ComputationOptions;
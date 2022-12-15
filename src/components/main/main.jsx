import React, { useState, useEffect } from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom";
import { colors } from '../../constants/colors';
import { Category, Videos } from '../';
import { ApiService } from '../../service/api.service';

export default function Main() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [videos, setVideos] = useState([])

  const selectedCategoryHandler = category => setSelectedCategory(category)

  useEffect(() => {
    const getData = async () => {
      try {
      const data = await ApiService.fetching(`search?part=snippet&q=${selectedCategoryHandler}`)
      setVideos(data.items)
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, [])
  

  return (
    <Stack>
      <Category selectedCategoryHandler={selectedCategoryHandler}
      selectedCategory={selectedCategory} />
      <Box p={2} sx={{height: '90vh'}}>
        <Container maxWidth={'90%'}>
          <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
            {selectedCategory} <span style={{ color: colors }}></span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  )
}
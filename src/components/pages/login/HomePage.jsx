import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { fetchBlogs } from '../../../services/BlogServices';
import ImageSlider from '../../Ui_Elements/ImageSlider';
import TestSlider from '../../Ui_Elements/TestSlider';
import { Today } from '@mui/icons-material';
import { Box } from '@mui/material';

const HomePage = () => {
  const [blogs, setBlogs] = useState([])

  const fetchData = async () => {
    const response = await fetchBlogs()
    console.log('response', response.response);
    setBlogs(response.response)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      {/* {setTimeout(() => { <ImageSlider slides={blogs} /> }, 2000)} */}
      <ImageSlider slides={blogs} />
      <Box sx={{ bgcolor: '#99D6E9', fontFamily: 'sailec', lineHeight: '30px' }}>
        <Link to='/addappoinments'>
          <div className="media-body sailec" style={{ margin: '0 10px', paddingTop: '10px', fontSize: '24px', fontWeight: 400, lineHeight: '32px' }}>
            <p>Tenemos un espacio pensado para ti, estamos para apoyarte. ¡Compartamos!</p>
            <button className='btn btn-warning btn-rounded seilac' style={{ margin: '0 0 10px 10px' }}>
              <Today /> Reservar aquí
            </button>
          </div>
        </Link>
      </Box>
      {/* <div className="row">
        <div className="col-sm-12"> */}
          <h2>Test autodiagnóstico</h2>
        {/* </div>
      </div> */}
      {/* {setTimeout(() => { <TestSlider slides={blogs}></TestSlider> }, 2000)} */}
      <TestSlider slides={blogs}></TestSlider>
    </>
  )
}

export default HomePage;
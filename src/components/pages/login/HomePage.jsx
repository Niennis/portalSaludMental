import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { fetchBlogs } from '../../../services/BlogServices';
import ImageSlider from '../../Ui_Elements/ImageSlider';
import TestSlider from '../../Ui_Elements/TestSlider';
import Events from '../../Ui_Elements/Events';
import FrequentAskedQuestions from '../../Ui_Elements/FAQ';
import Footer from '../../Ui_Elements/Footer';

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
    <main style={{ backgroundColor: '#fff' }}>
      {/* {setTimeout(() => { <ImageSlider slides={blogs} /> }, 2000)} */}
      <ImageSlider slides={blogs} />
      <Box sx={{ bgcolor: '#99D6E9', fontFamily: 'sailec', lineHeight: '30px',  }}>

        <div className="media-body sailec" style={{ margin: '0 20px', paddingTop: '10px', fontSize: '24px', fontWeight: 400, lineHeight: '32px' }}>
          <p className="media-body sailec" style={{ textWrap: 'pretty' }}>
            Tenemos un espacio pensado para ti, estamos para apoyarte. ¡Compartamos!
          </p>
          <Link to='/addappoinments'>
            <button className='btn btn-warning btn-rounded seilac' style={{ margin: '0 0 10px 10px' }}>
              <Today /> Reservar aquí
            </button>
          </Link>
        </div>

      </Box>
      <div className="row" style={{ padding: 0, margin: 0 }}>
        <div className="col-sm-12 text-center" style={{ padding: 0, margin: '32px 0 0' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 400, lineHeight: '40px' }}>Test autodiagnóstico</h2>
        </div>
      </div>

      {/* {setTimeout(() => { <TestSlider slides={blogs}></TestSlider> }, 2000)} */}
      <TestSlider slides={blogs}></TestSlider>

      <Events />


      <div className="row" style={{ padding: 0, margin: 0 }}>
        <div className="col-sm-12 text-center" style={{ padding: 0, margin: '32px 0 0' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 400, lineHeight: '40px' }}>Preguntas frecuentes</h2>
        </div>
      </div>
      <FrequentAskedQuestions />
      <Footer />
    </main>
  )
}

export default HomePage;
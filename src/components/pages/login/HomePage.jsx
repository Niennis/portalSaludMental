import { useState } from 'react'
import { useQuery } from '@tanstack/react-query';
// import { Link } from 'react-router-dom';

import { fetchBlogs } from '../../../services/BlogServices';
import ImageSlider from '../../ImageSlider';
import TestSlider from '../../TestSlider';
import Events from '../../Events';
import FrequentAskedQuestions from '../../FAQ';
import Footer from '../../Footer';
import Headerudp from '../../Headerudp';
import ReserveBtn from '../../ReserveBtn'

// import { styled } from '@mui/material/styles';
// import { Today } from '@mui/icons-material';
import { Box } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

const fetchData = async () => {
  try {
    const response = await fetchBlogs()
    console.log('response', response.response);
    return response.response
  } catch (err) {
    console.log('ERROR', err)
  }
}

const HomePage = () => {
  const { isLoading, isError, data: blogs = [] } = useQuery({
    queryKey: ['blogs'],
    queryFn: async () => {
      const res = await fetchBlogs();
      return res.response;
    }

  })
  const [index, setIndex] = useState(0);

  const matches = useMediaQuery('(min-width:600px)');

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <main style={{ backgroundColor: '#fff' }}>
      {matches && <Headerudp />}
      {blogs.length > 0 && <ImageSlider slides={blogs} matches={matches} />}

      {isLoading && <strong>Cargando...</strong>}

      {isError && <p>Ha habido un error</p>}

      {!isError && blogs.length === 0 && <p>No hay información</p>}

      {!matches &&
        <Box sx={{ bgcolor: '#99D6E9', fontFamily: 'sailec', lineHeight: '30px', }}>
          <div className="media-body sailec" style={{ margin: '0 20px', paddingTop: '10px', fontSize: '24px', fontWeight: 400, lineHeight: '32px' }}>
            <p className="media-body sailec" style={{ textWrap: 'pretty' }}>
              Tenemos un espacio pensado para ti, estamos para apoyarte. ¡Compartamos!
            </p>
            <ReserveBtn text={'Reservar aquí'} bgColor={'#FABB00'} color={'#000'} />
          </div>
        </Box>
      }

      <div className="row" style={{ padding: 0, margin: 0 }}>
        <div className="col-sm-12 text-center" style={{ padding: 0, margin: '32px 0 0' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 400, lineHeight: '40px' }}>Test autodiagnóstico</h2>
        </div>
      </div>

      {blogs.length > 0 && <TestSlider slides={blogs} />}

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
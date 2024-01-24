import { useState } from "react";
import { Link } from "react-router-dom";
import { CircleRounded } from "@mui/icons-material";
import { ChevronLeftRounded, ChevronRightOutlined } from "@mui/icons-material";
import { Grid, Box } from "@mui/material";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [title, setTitle] = useState(slides[0].title)
  const [content, setContent] = useState(slides[0].content)
  const [idBlog, setIdBlog] = useState(slides[0].id)

  const sliderStyles = {
    // height: '85svh',
    position: 'relative',
    margin: 0,
    padding: 0,
    backgroundColor: "#fff"
  }

  const slideStyles = {
    backgroundImage: `url(${slides[currentIndex].image})`,
    width: '100svw',
    height: 300,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }

  const leftArrowStyles = {
    position: 'absolute',
    top: '15%',
    transform: 'translate(0, -50%)',
    left: '32px',
    color: 'white',
    zIndex: 1,
    cursor: 'pointer',
    border: '1px solid white',
    borderRadius: '50%',
    backgroundColor: "#fff4"
  }

  const righttArrowStyles = {
    position: 'absolute',
    top: '15%',
    transform: 'translate(0, -50%)',
    right: '32px',
    color: 'white',
    zIndex: 1,
    cursor: 'pointer',
    border: '1px solid white',
    borderRadius: '50%',
    backgroundColor: "#fff4"
  }

  const dotsContainerStyles = {
    display: 'flex',
    justifyContent: 'center'
  }

  const dotStyles = {
    margin: '0 3px',
    cursor: 'pointer',
    // color: '#fff'
  }

  // setTimeout(() => {
  //   goToPrevious()
  // }, 3000)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    setTitle(slides[newIndex].title)
    setContent(slides[newIndex].content)
    setIdBlog(slides[newIndex].id)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
    setTitle(slides[newIndex].title)
    setContent(slides[newIndex].content)
    setIdBlog(slides[newIndex].id)
  }

  const goToSlide = slideIndex => {
    console.log('hola', slideIndex);
    console.log('chao', slides[slideIndex].title);
    setCurrentIndex(slideIndex)
    setTitle(slides[slideIndex].title)
    setContent(slides[slideIndex].content)
    setIdBlog(slides[slideIndex].id)
  }

  return (
    <div style={sliderStyles}>
      <div style={leftArrowStyles} onClick={goToPrevious}> <ChevronLeftRounded /></div>
      <div style={righttArrowStyles} onClick={goToNext}> <ChevronRightOutlined /></div>
      <div style={slideStyles}></div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            style={dotStyles}
            onClick={() => goToSlide(slideIndex)}
          >
          </div>
        ))}
      </div>
      <Box sx={{
        border: '1px solid #333',
        height: '43svh',
        width: '90svw',
        borderRadius: '32px',
        padding: '24px 16px',
        textWrap: 'pretty',
        margin: '36px auto 0'
      }}>
        <div className="row" >
          <div className="col-sm-12 sailec" style={{fontSize: '24px', fontWeight:400, lineHeight:'32px'}}>
            <h2>{title}</h2>
            <p>{content.slice(0, 205)}</p>
            <Grid
              container
              direction="row"
              justifyContent="flex-end"
              alignItems="baseline"
            >
              <Link to={`/blog/${idBlog}`}>
                <button
                  className="btn submit-form me-2"
                  style={{
                    backgroundColor: 'white',
                    border: '1px solid #A6A6A6',
                    borderRadius: '100px'
                  }}> Ver más + </button>
              </Link>
            </Grid>
          </div>
        </div>
      </Box>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            style={dotStyles}
            onClick={() => goToSlide(slideIndex)}
          >
            <CircleRounded sx={{ fontSize: 10, color: slideIndex === currentIndex ? '#B82925' : '#FF5253' }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider;
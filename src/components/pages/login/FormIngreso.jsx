import { useState } from 'react'
import { login02, loginicon01, loginicon02, loginicon03, logo } from '../../imagepath';
import { Link } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { Button } from '@mui/material';

const FormIngreso = () => {
  const [send, setSend] = useState(false)

  const handleChange = (e) => {
    let str = e.target.value

    // console.log(str)
  }
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      setSend(true)
    }, 3000)
  };


  return (
    <>
      <div className="main- sty login-body">
        <div className="container-fluid px-0">
          <div className="row" style={{ display: 'flex', justifyContent: 'center', }}>

            {/* Login Content */}
            <div className="col-lg-6 login-wrap-bg" style={{ position: 'unset',marginTop: '20vh' }}>
              <div className="login-wrapper">
                <div className="loginbox">
                  <div className="login-right">
                    <div className="login-right-wrap">
                      <div className="account-logo">
                        <Link to="#">
                          <img src={logo} width={380} alt="#" />
                        </Link>
                      </div>
                      <h2>Ingresa tu correo electrónico</h2>
                      {/* Form */}
                      <form action="#">
                        <div className="form-group">
                          <label>
                            Correo UDP <span className="login-danger">*</span>
                          </label>
                          <input className="form-control" type="email" onChange={handleChange} />
                        </div>
                        <div className="form-group login-btn">
                          {/* <Link to="/addappoinments"> */}
                          <button className="btn btn-primary btn-block" type="button" onClick={handleOpen}>
                            Enviar
                          </button>
                          {/* </Link> */}
                        </div>
                      </form>
                      {/* /Form */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Login Content */}
          </div>
        </div>
      </div>

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >

        {!send ? <CircularProgress color="inherit" /> :
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <p>Verificación exitosa</p>
            <Link to='/addappoinments'>
              <button className="btn btn-primary btn-block" style={{ width: '300px' }}> Continuar </button>
            </Link>
          </div>
        }
      </Backdrop>
    </>
  )
}

export default FormIngreso;

// import { useState } from "react";
import { Today } from "@mui/icons-material"
// import Modal from "./Modal";
import { Link } from "react-router-dom"

const ReserveBtn = ({ text, bgColor, color }) => {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <>
      <Link to='/login'>
        <button
          className='btn btn-rounded seilac'
          style={{ margin: '16px 0', backgroundColor: bgColor, color: color }}
          // onClick={handleOpen}
        >
          <Today /> {text}
        </button>
      </Link>
      {/* <Modal open={open} handleClose={handleClose} /> */}
    </>
  )
}

export default ReserveBtn;

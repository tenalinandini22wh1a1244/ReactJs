import { Button } from '@mui/material'

const CustomButton = ({label, type,username,password}) => {
  return (
    <Button variant="contained" color="primary" type={type} onClick={(e) => console.log(Username,password)}>
   
      {label}
    </Button>
  )
}

export default CustomButton
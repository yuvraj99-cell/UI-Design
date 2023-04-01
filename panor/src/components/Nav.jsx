import { Divider } from '@mui/material'
import { Box } from '@mui/system'
import Signup from './Signup'



const Nav = ({name}) => {
  return (
    <Box>
    <Box sx={{display:"flex",flexDirection:"row",justifyContent:"space-between", border:"1px soid pink"}}>
       <Box sx={{fontSize:"2em" , color:"gray" , fontWeight:"500", margin:"10px 0 0 20px"}}>{name}</Box> 
       <Box sx={{marginTop:"10px"}} ><Signup/></Box>
       
    </Box>
    <Divider sx={{marginTop:"1em",border:"1px solid #EAEAEE"}}/>
    </Box>
  )
}

export default Nav
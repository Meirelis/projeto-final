import { Link } from "react-router-dom";
import "./index.css"
import Imglocal from "../../assets/img-local.png"



function Header(){
   

    return(
      <div className="cabecalho">
        <ul>
              <li><Link to="/"><a>Home</a></Link></li>
              <li><Link to="/Sobre"><a>Sobre</a></Link></li>
              <li><Link to="/Contato"><a>Contato</a></Link></li>
              <li><Link to="/Produto"><a>Produto</a></Link></li>
              <img src={Imglocal}/>
          </ul> 
       </div>
        
    )
}

export default Header;

  /*import Menu from '@mui/material/Menu';
  import MenuItem from '@mui/material/MenuItem';
  import { useState } from "react";
  import { IconButton } from "@mui/material";
  import MenuIcon from '@mui/icons-material/Menu';
  import { useNavigate } from "react-router-dom";*/

  /* const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const navigate = useNavigate();

    const menuData = [
        {
            id:1,
            link: '/home',
            name: 'Home',
        },
        {
            id:2,
            link: '/sobre',
            name: 'Sobre',
        },
        {
            id:3,
            link: '/contato',
            name: 'Contato',
        }
    ] 

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = (link) => {
      navigate(link);
      setAnchorEl(null);
    };*/
  /* <div>
        <IconButton aria-label="delete"
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <MenuIcon/>
        </IconButton>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
            {menuData.map(el => (
                <MenuItem key={el.id} onClick={() => handleClose(el.link)}>{el.name}</MenuItem>
            ))}
        </Menu>
      </div>*/
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Genres
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Fighting</MenuItem>
        <MenuItem onClick={handleClose}>Shooter</MenuItem>
        <MenuItem onClick={handleClose}>Music</MenuItem>
        <MenuItem onClick={handleClose}>Platform</MenuItem>
        <MenuItem onClick={handleClose}>Puzzle</MenuItem>
        <MenuItem onClick={handleClose}>Racing</MenuItem>
        <MenuItem onClick={handleClose}>Real-Time Strategy</MenuItem>
        <MenuItem onClick={handleClose}>Role-Playing</MenuItem>
        <MenuItem onClick={handleClose}>Simulator</MenuItem>
        <MenuItem onClick={handleClose}>Sport</MenuItem>
        <MenuItem onClick={handleClose}>Strategy</MenuItem>
        <MenuItem onClick={handleClose}>Turn-Based Strategy</MenuItem>
        <MenuItem onClick={handleClose}>Tactical</MenuItem>
        <MenuItem onClick={handleClose}>Trivia</MenuItem>
        <MenuItem onClick={handleClose}>Hack and Slash</MenuItem>
        <MenuItem onClick={handleClose}>Pinball</MenuItem>
        <MenuItem onClick={handleClose}>Adventure</MenuItem>
        <MenuItem onClick={handleClose}>Arcade</MenuItem>
        <MenuItem onClick={handleClose}>Visual Novel</MenuItem>
        <MenuItem onClick={handleClose}>Indie</MenuItem>
        <MenuItem onClick={handleClose}>Card & Board game</MenuItem>
        <MenuItem onClick={handleClose}>Moba</MenuItem>
        <MenuItem onClick={handleClose}>Point and Click</MenuItem>
      </Menu>
    </div>
  );
}
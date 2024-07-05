import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { AppContext } from '../Context';

import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { MoreVert } from '@mui/icons-material';
export default function BottomNav() {
  const [value, setValue] = React.useState(0);
  let {setQuizState} = React.useContext(AppContext);
  let { name } = React.useContext(AppContext);

  const handleBack = () => {
    setQuizState("userForm")
  }

  return (
    <div className='lg:w-[800px]'>
      <Box sx={{ display:"flex", justifyContent: "center" }}>
        <div className='lg:w-[785px] flex justify-center '>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            sx={{ width: "90%", padding: 4, justifyContent: "center" }}
          >
            <BottomNavigationAction label="More" onClick={handleBack} icon={<MoreVert />} />
            <BottomNavigationAction label="Back" onClick={handleBack} icon={<ArrowBackIosIcon />} />
            <BottomNavigationAction label="Material" icon={<LibraryBooksIcon />} />
            <BottomNavigationAction label={!name ? "user" : name } icon={<AccountCircleIcon />} />
          </BottomNavigation>
        </div>
      </Box>
    </div>
  );
}

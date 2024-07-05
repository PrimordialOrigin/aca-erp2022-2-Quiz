import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumbs() {
  return (
    <div role="presentation" style={{color: "white"}} onClick={handleClick}>
      <Breadcrumbs style={{color: "white"}} aria-label="breadcrumb">
        <Link underline="hover" style={{color: "white"}} href="/">
          <p className='text-yellow-300' >Home</p>
        </Link>
        <Link
          underline="hover"
          style={{color: "white"}}
          href="/material-ui/getting-started/installation/"
        >
          User
        </Link>
        <Typography style={{color: "gray"}}>quize</Typography>
      </Breadcrumbs>
    </div>
  );
}

import React, {useContext, useState, useEffect} from "react";
import { AppContext } from '../Context';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicBreadcrumbs from "../navigation/breadcrumbs";
function User() {
    let {setQuizState} = useContext(AppContext);
    let { setName} = useContext(AppContext);
    let [username, setUsername] = useState("");

   const handleClick = () => {
    setName(username)
    setQuizState("container")
   }

    useEffect(() =>{
        localStorage.setItem("Name",JSON.stringify(username))
    }, [username]);

    const next = () => {setQuizState("container")}

  return (
    <div className="" style={{padding: 10}}>
        <BasicBreadcrumbs />
        <Card className="userForm">
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Welcome to
                </Typography>
                <Typography variant="h5" component="div">
                The world of code
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {" "}
                </Typography>
                <Typography variant="body2">
                    Enter you Name bellow to
                    <br />
                    continue
                </Typography>
            </CardContent>
            <div className="item">
                <div className="lg:w-[100%] flex justify-center w-[90%]">
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '100%' },
                        }}
                        noValidate
                        autoComplete="off"
                        >
                            <TextField onChange={(e)=>{setUsername(e.target.value)}} id="outlined-basic" label="Name" variant="outlined" />
                    </Box>
                </div>
                </div>
                <div style={{padding: 5, paddingBottom: 10}}>
                    {username &&
                        <Button variant="outlined" onClick={handleClick}>Continue</Button>
                    }
            </div>
        </Card>
    </div>
  )
}

export default User

import React, {useContext, useState, useEffect} from "react";
import { AppContext } from '../Context';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function User() {

    let {setQuizState} = useContext(AppContext);
    let [username, setUsername] = useState("");

    function getName(event){
        setUsername(event.target.value);
    }

    useEffect(() =>{
        localStorage.setItem("Name",JSON.stringify(username))
    }, [username]);
    
     const next = () => {setQuizState("container")}
  return (
    <div className="" style={{padding: 10}}>
        <Card className="userForm">
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
               Are a real progrommer lets see!!
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
            </Typography>
            <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
            </Typography>
        </CardContent>
            <div className="item">
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '90%' },
                }}
                noValidate
                autoComplete="off"
                >
                    <TextField onChange={(e)=>{setUsername(e.target.value)}} id="outlined-basic" label="Name" variant="outlined" />
                </Box>
            </div>
            <div style={{padding: 5, paddingBottom: 10}}>
                {username &&
                    <Button variant="outlined">Continue</Button>
                }
            </div>
        </Card>
    </div>
  )
}

export default User

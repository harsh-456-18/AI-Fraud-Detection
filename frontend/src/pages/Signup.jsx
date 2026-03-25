import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TextField, Button, Paper, Typography } from "@mui/material";
import axios from "axios";

export default function Signup() {

  const navigate = useNavigate();

  const [user,setUser] = useState({
    name:"",
    email:"",
    password:""
  });

  const handleChange = (e)=>{
    setUser({...user,[e.target.name]:e.target.value})
  }

  const handleSignup = async () => {

  const res = await axios.post(
    "http://localhost:4040/users/signup",
    user
  );

  alert(res.data);

  navigate("/");
};

  return (
    <Paper sx={{width:400,p:4,m:"100px auto"}}>

      <Typography variant="h4">Sign Up</Typography>

      <TextField
        name="name"
        label="Name"
        fullWidth
        margin="normal"
        onChange={handleChange}
      />

      <TextField
        name="email"
        label="Email"
        fullWidth
        margin="normal"
        onChange={handleChange}
      />

      <TextField
        name="password"
        type="password"
        label="Password"
        fullWidth
        margin="normal"
        onChange={handleChange}
      />

      <Button
        variant="contained"
        fullWidth
        onClick={handleSignup}
      >
        Create Account
      </Button>

      <Typography variant="body2" sx={{ mt: 2, textAlign: 'center' }}>
        Already have an account? <Link to="/" style={{ color: '#1976d2' }}>Login</Link>
      </Typography>

    </Paper>
  );
}
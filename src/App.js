import "./App.css";
import Header from "./components/Header";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);
  
  const addData = () =>{
    setData([...data , {name , email}]);
    setName("");
    setEmail("");
  };

  const removeItem = (index) => {
    let arr = data;
    arr.splice(index,1);
    setData([...arr]);
  }

  return (
    <div className="App">
      <Header />

      {/* form */}

      <div className="form">
        <Stack direction="row" spacing={2}>
          <TextField
            value={name}
            onChange={(event) => setName(event.target.value)}
            id="outlined-basic"
            label="name"
            variant="outlined"
          />
          <TextField
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            id="outlined-basic"
            label="email"
            variant="outlined"
          />
          <Button onClick={addData} variant="contained" color="success">
            <AddIcon />
          </Button>
        </Stack>

        {/* data */}
        <div className="data">
          <div className="data_val">
            <h3>Name</h3>
            <h3>Email</h3>
           <h3>Remove</h3>

          </div>
         
          {data.map((element,index) => {
            return(
              <div className="data_val">
              <h3>{element.name}</h3>
              <h3>{element.email}</h3>
              <Stack>
              <Button onClick={removeItem} variant="outlined" color="error">
                <DeleteIcon />
              </Button>
             </Stack>
             </div>
            );
          })}
         
        </div>
      </div>
    </div>
  );
}

export default App;

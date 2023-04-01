import './App.css';
import Header from './components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import Fields from './components/Fields';

function App() {
  const [form, setForm] = useState({title:'',desc:''})
  const [data, setData] = useState([]);

  const addData = () => {
    setData([...data, form]);
    setForm({title:'',desc:''});
  }

  function removeItem(index){
    let arr = data;
    arr.splice(index, 1);
    setData([...arr]);
  }

  return (
    <div className="App">
      <Header />
      <div className='form'>
        <Stack spacing={2} direction="row">
          <TextField value={form.title} onChange={(e) => setForm({...form, title: e.target.value})} id="outlined-basic" label="Title" variant="outlined" />
          <TextField value={form.desc} onChange={(e) => setForm({...form, desc: e.target.value})} id="outlined-basic" label="Description" variant="outlined" />
          <Button onClick={addData} variant="contained">
            <AddIcon />
          </Button>
        </Stack>
      </div>
      {/* Data  */}
      <div className='data'>
        <div className='data_val'>
          <h4>Title</h4>
          <h4>Description</h4>
          <h4>Remove</h4>
        </div>
        {
          data.map((e, index) => {
            return (
              <Fields key={index} title={e.title} desc={e.desc} removeItem={removeItem}/>
            )
          })
        }
      </div>
    </div>

  );
}

export default App;

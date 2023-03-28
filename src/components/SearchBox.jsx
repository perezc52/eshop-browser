import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { debounce } from 'lodash';

export default function SearchBox() {
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState([]);

  const fetchOptions = React.useCallback(
    debounce(async (searchQuery) => {
        try {
            const url = "https://api.igdb.com/v4/search"
            const options = {
              method: 'POST',
              headers: {
                'Client-ID': process.env.CLIENT_ID,
                'Authorization': process.env.AUTHORIZATION,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
              },
              body: `fields *; search ${inputValue}; limit 10;`
            }
            const res = await fetch(url, options)
            console.log(res)
            const data = await res.json()
            console.log(data)
            setOptions(data)
        } catch(e) {
            console.log(e)
        }
      
    }, 500),
    []
  );

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);

    if (newInputValue.length >= 3) {
      fetchOptions(newInputValue);
    }
  };

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={handleInputChange}
      options={options}
      getOptionLabel={(option) => option.label}
      renderInput={(params) => (
        <TextField {...params} label="Search" variant="outlined" />
      )}
    />
  );
}

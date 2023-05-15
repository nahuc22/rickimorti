import React, { useState } from "react";
import { handleNumber } from "../../Redux/Action/Actions";
import { useDispatch } from "react-redux";
export default function SearchBar({ onSearch }) {

const [id, setId] = useState('');
const dispatch = useDispatch();

const handleChange = (event) => {
    setId(event.target.value)
    dispatch(handleNumber(1))
}    

const submit = () => {
      onSearch(id)
      dispatch(handleNumber(1))
}
    
    return (
       <div>
          <input type='search'onChange={handleChange}value={id}/>
          <button onClick={submit}>Search</button>
       </div>
    );
 }
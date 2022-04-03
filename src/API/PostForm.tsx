import axios from 'axios';
import React from 'react'

export default function PostForm() {
  const userData = {
    "userEmail": "guruvana@gmail.com",
    "userPassword": "123@123"
  };
  

  return (
    
      axios.post("http://64.227.135.105/audire/api/login", userData).then((response) => {
      console.log(response.status);
      console.log(response.data.token);
      console.log("Success");
    })
  )
}
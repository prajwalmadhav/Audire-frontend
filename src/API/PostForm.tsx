import axios from 'axios';
import React from 'react'

export default function PostForm() {
  return (
    <div>PostForm</div>
  )
}
 
const userData = {
  "userEmail": "guruvana@gmail.com",
  "userPassword": "123@123"
};
axios.post("http://64.227.135.105/audire/api/login", userData).then((response) => {
  console.log(response.status);
  console.log(response.data.token);
});

// import React, { Component } from 'react'

// export class PostForm extends Component {

//     constructor(props:any) {
//       super(props)
    
//       this.state = {
//          userEmail: '',
//          userPassword:''

//       }
//     }

//   render() {
//     return (
//       <div>
//           <form onSubmit={handleSubmit}>
//             <div>
//                 <input
//                  type="text" 
//                  email="email"
//                  password='userPassword'
//                  value=''
//                 ></input>
//             </div>

//           </form>
//       </div>
//     )
//   }
// }

// export default PostForm
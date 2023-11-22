// import React from 'react';

// const GO_PRO = () => {
//   return (
//    <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
//    <div class="-mx-3 md:flex mb-6">
//      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
//        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
//          First Name
//        </label>
//        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="Jane"/>
//        <p class="text-red text-xs italic">Please fill out this field.</p>
//      </div>
//      <div class="md:w-1/2 px-3">
//        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
//          Last Name
//        </label>
//        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="Doe"/>
//      </div>
//    </div>
//    <div class="-mx-3 md:flex mb-6">
//      <div class="md:w-full px-3">
//        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
//          Password
//        </label>
//        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="password" placeholder="******************"/>
//        <p class="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>
//      </div>
//    </div>
//    <div class="-mx-3 md:flex mb-2">
//      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
//        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-city">
//          City
//        </label>
//        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-city" type="text" placeholder="Albuquerque"/>
//      </div>
//      <div class="md:w-1/2 px-3">
//        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-state">
//          Pay by 
//        </label>
//        <div class="relative">
//          <select class="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" id="grid-state">
//            <option>Bkash</option>
//            <option>Nagad</option>
//            <option>Rocket</option>
//          </select>
//          <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
//            <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
//          </div>
//        </div>
//      </div>
//      <div class="md:w-1/2 px-3">
//        <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-zip">
//          Zip
//        </label>
//        <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-zip" type="text" placeholder="90210"/>
//      </div>
//    </div>
//  </div>)
// };

// export default GO_PRO;

import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function GO_PRO({setPremier}) {

  let navigate = useNavigate()
  const [user, setuser] = React.useState({
    name: '',
    username: '',
    email: '',
    password:''
  });

  const { name, username, email, password } = user;

  const onInputChange = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  };

  ///for submit button

  const onSubmit=async(e)=>{
   e.preventDefault()
   const response = await axios.put("http://localhost:8080/PRO",user)
   console.log(response)
   
   localStorage.setItem("USER_PREMIER",true)
   setPremier(true)
   navigate("/");
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4">
            <h2 className="text-center mb-4">Payment</h2>

            <div className="mb-3">
                <label htmlFor="paymentMethod" className="form-label">
                  Payment Method
                </label>
                <select
                  className="form-select"
                  name="paymentMethod"
                  required
                >
                  <option value="">Select payment method</option>
                  <option value="bkash">Bkash</option>
                  <option value="nagad">Nagad</option>
                </select>
              </div>


            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                  name="name"
                  value={name}
                  onChange={onInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  User Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter your User Name"
                  name="username"
                  value={username}
                  onChange={onInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  name="email"
                  value={email}
                  onChange={onInputChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  name="password"
                  value={password}
                  onChange={onInputChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Pay
              </button>
            </form>



          </div>
        </div>
      </div>
    </div>
  );
}


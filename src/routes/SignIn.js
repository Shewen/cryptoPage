import React, { useState } from 'react';

import { Link, useNavigate} from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
      navigate('/account')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };
  return (
    <div>
      
   <div
  className="container max-w[400px] mx-auto p-4 mt-12  flex flex-col items-center justify-center text-gray-900"
>
  <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
    <h1 class="text-4xl font-semibold ">LoginPage.</h1>
  </div>
  <form onSubmit={handleSubmit}
 className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
    <input   onChange={(e) => setEmail(e.target.value)}
      className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
      type="text"
      placeholder="Email"
    />
    <input onChange={(e) => setPassword(e.target.value)}
      className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
      type="text"
      placeholder="Password"
    />

    <div className="flex items-center">
      <div className="w-1/2 flex items-center">
        <input id="remember-me" type="checkbox" className="mt-1 mr-2" />
        <label for="remember-me">Remember me!</label>
      </div>
      <button
        className="ml-auto w-1/2 bg-gray-800 text-white p-2 rounded font-semibold hover:bg-gray-900"
        type="submit"
      >
        Log In
      </button>
    </div>
  </form>
  <div className="text-right w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
  <p>
Don't have an account?<Link to='/signup'>signup</Link>

</p>
    

  </div>
 

  <div
    className="flex justify-center w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12"
  >
    
   
  </div>
</div>


    </div>
  )
}

export default SignIn

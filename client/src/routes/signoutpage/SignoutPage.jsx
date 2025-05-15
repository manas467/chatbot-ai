import './signoutPage.css'

import React from 'react'



import { SignUp } from '@clerk/clerk-react'

function SignoutPage() {
  return (
    <div className='signoutPage'>
    <SignUp path='/sign-up' signInUrl='/sign-in'/>

    </div>
  )
}

export default SignoutPage
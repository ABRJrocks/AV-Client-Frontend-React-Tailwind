import React from 'react';
import leftImg from '../assets/1.svg'
import signupgoogle from '../assets/signupgoogle.png'
import '../components/form.css'
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';

function App() {
  return (
    <section className='container'>
      <MDBContainer fluid className="p-3 my-5">

        <MDBRow>

          <MDBCol col='10' md='6'>
            <img src={leftImg} class="img-fluid" alt="Login Left image" />
          </MDBCol>

          <MDBCol col='4' md='6'>
            <div className='rightCol'>
              <h2>Sign In to your account</h2>
              <label className='emailLbl'>Email Address</label>
              <MDBInput className='inputs' wrapperClass='mb-4' placeholder="johndoe@example.com" id='formControlLg' type='email' size="lg" />
              <label className='passLbl'>Password</label>
              <MDBInput className='inputs' wrapperClass='mb-4' id='formControlLg' type='password' size="lg" />


              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="!#">Forgot password?</a>
              </div>

              <MDBBtn className="mb-4 w-100" size="lg" style={{backgroundColor: '#4CAD67'}}>Login</MDBBtn>

              <div className="divider d-flex align-items-center my-4">
                <p className="text-center  fw-bold mx-3 mb-0">Or sign in with Google</p>
              </div>
              <div className='googleBtnImg' >
                <img  src={signupgoogle} alt="Login Left image" />
              </div>
            </div>
          </MDBCol>
        </MDBRow>

      </MDBContainer>
    </section >
  );
}

export default App;

function  Register () {
  return (
    <div>
       <div className='container' >
         <div className='container_main' >
            <div className='container_login' >
                <div className='container_title'>
                   <h1>Sign In</h1>
                </div>
                  <div className='container_logindiv'>
                       <label className='form-text'>Username:</label>
                       <input type="text"   />
                       <label className='form-text'>Email:</label>
                       <input type="text"   />
                       <label className='form-text' >Password:</label>
                       <input type="text"  />
                       <button type='submit' > Register </button>
                  </div>
                </div>
            </div>
         </div>
      </div>  
  )
}

export default  Register
import React from 'react'

function Contact() {
  


  return (
   
 <div>

<div >CONTACT US</div>
      <div  >
        <div>Beverly Hills 90210</div>
        <div> +1 854 654 4587</div>
        <div>thebeachshop@thebeachshop.com </div>
      </div>
    <br />

<h4 className="d-flex justify-content-between align-items-center mb-3">
          <span className="text-muted">Contact us</span>
          <span className="badge badge-secondary badge-pill">3</span>
        </h4>
        <div className="col-md-8 order-md-1">
          <form className="needs-validation" noValidate>
            <div className="row">
              <div className="col-md-6 mb-5">
                <label htmlFor="firstName">Name</label> 
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder=""
                  required
                ></input>
                <div className="invalid-feedback">Valid  name is required.</div>
              </div> 
              <div className="mb-7">
              <label htmlFor="email">
                Email <span className="text-muted"></span>
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder=""
                required
              ></input>
              <div className="invalid-feedback">
                Please enter a valid email address for shipping updates.
              </div>
            </div>
              <div className="col-md-6 mb-5">
                <label htmlFor="lastName">Message</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  placeholder=""
                  required
                ></input>
                <div className="invalid-feedback">Cannot send an empty message.</div>
              </div>
            </div>
            <div className="mb-3">
              <div className="input-group"></div>
            </div>
           
            <button
              className="btn btn-primary btn-lg btn-block"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      
        </div>

   
  )
}

export default Contact
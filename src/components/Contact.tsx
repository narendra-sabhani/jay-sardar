export function Contact() {
    return (
        <>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h4>Contact Us</h4>
                    <form className="row g-3">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control form-control-sm" id="inputFirstName" placeholder="Enter your first name" />
                                <label htmlFor="inputFirstName" className="form-label">First Name</label>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" className="form-control form-control-sm" id="inputLastName" placeholder="Enter your last name" />
                                <label htmlFor="inputLastName" className="form-label">Last Name</label>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="form-floating">
                                <input type="email" className="form-control form-control-sm" id="inputEmail" placeholder="Enter your email address" />
                                <label htmlFor="inputEmail" className="form-label">Email</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <input type="text" className="form-control form-control-sm" id="inputMobile" placeholder="Enter your mobile number" />
                                <label htmlFor="inputMobile" className="form-label">Mobile Number</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <textarea className="form-control form-control-sm" style={{ height: '100px' }} placeholder="Enter your address" id="address"></textarea>
                                <label htmlFor="address">Address</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <select className="form-select" id="productTypeSelect" aria-label="Floating label select example">
                                    <option selected>Choose at least one</option>
                                    <option value="Car Loan">Car Loan</option>
                                    <option value="Home Loan">Home Loan</option>
                                    <option value="Personal Loan">Personal Loan</option>
                                    <option value="Morgage Loan">Morgage Loan</option>
                                    <option value="Other">Other</option>
                                </select>
                                <label htmlFor="productTypeSelect">Want to apply for</label>
                            </div>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <iframe
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14718.250436049084!2d71.6614023!3d22.7444931!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc54e07519e4614c1!2sJAY%20SARDAR%20CONSULTANCY!5e0!3m2!1sen!2sin!4v1659770685382!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        className="w-100 h-100"
                        loading="lazy">
                    </iframe>
                </div>
            </div>
        </>
    )
}
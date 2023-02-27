import React from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../components/ContactUsForm.css'
const ContactUsForm = () => {
    return (
        <div className="container">
            <form>
                <div class="form-group ml">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div class="form-group">
                    <label for="exampleFormControlTextarea1">Message</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write your message"> </textarea>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>
    )
}
export default ContactUsForm
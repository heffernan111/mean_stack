import React from "react";
import SignInComponent from "../component/SignInComponent";

const SignIn = () => {
    return (
        <React.Fragment>
            <h2 className="text-center pt-4 pb-4">SignIn</h2>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <SignInComponent />
                </div>
            </div>
        </React.Fragment>
  );
};

export default SignIn;

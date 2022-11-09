import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();
    }
    return (
        <div className="hero  w-full my-20">
            <div className="hero-content flex-col lg:flex-row grid gap-10 md:grid-cols-2">
                <div className="text-center lg:text-left">

                    {/* <img className='w-3/4' src={img} alt="" /> */}
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-20">
                    <h1 className="text-5xl font-bold text-center">Login </h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="text" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Login" required />

                        </div>
                    </form>
                    <p className='text-center'>New to Genious Car <Link className='text-orange-600 font-bold' to="/signup">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
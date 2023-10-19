import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const toastt = (value) => toast(value, { position: toast.POSITION.TOP_CENTER })

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        console.log(email, password);

        if (password.length < 6) {
            toastt("Password must be 6 characters")
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toastt("Password must contain a upper case")
            return;
        }
        else if (!/.*?[#?!@$%^&*-]/.test(password)) {
            toastt("Password must contain a special character")
            return;
        }
    }

    return (
        <div>
            <div className="bg-[#F4F4F4] md:mx-10 xl:mx-80 py-8 mt-10">
                <h2 className="text-3xl text-center mt-10 font-bold text-[#e50010]">SIGN IN</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-[#e50010] text-white">SIGN IN</button>
                    </div>
                </form>
                <p className="text-center font-bold">Do not have an acoount ? <Link className="font-bold text-blue-600" to={"/register"}>Sign Up</Link></p>
                <div className="mt-3">
                    <h2 className="text-center font-bold">Or</h2>
                    <FcGoogle className="mx-auto text-5xl mt-3"></FcGoogle>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;
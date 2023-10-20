import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.start";

const Register = () => {

    const toastt = (value) => toast(value, { position: toast.POSITION.TOP_CENTER })

    const { createUser, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get("name");
        const photo = form.get("photo-url");
        const email = form.get("email");
        const password = form.get("password");

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

        createUser(email, password)
            .then(r => {
                console.log(r.user);
                updateProfile(r.user, {
                    displayName: name,
                    photoURL: photo
                })
                    .then()
                    .catch()
                logOut();
                navigate("/login")
            })
            .catch(e => toastt(e.message));
    }

    const googleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(() => {
                navigate("/")
            })
            .catch(e => toastt(e.message));
    }

    return (
        <div>
            <div className="bg-[#F4F4F4] md:mx-10 xl:mx-80 py-8 mt-10">
                <h2 className="text-3xl text-center mt-10 font-bold text-[#e50010]">SIGN UP</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-bold">Photo URL</span>
                        </label>
                        <input type="text" name="photo-url" placeholder="image link" className="input input-bordered" required />
                    </div>
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
                        <button className="btn bg-[#e50010] text-white">SIGN UP</button>
                    </div>
                </form>
                <p className="text-center font-bold">Already have an acoount ? <Link className="font-bold text-blue-600" to={"/login"}>Sign In</Link></p>
                <div className="mt-3">
                    <h2 className="text-center font-bold">Or</h2>
                    <FcGoogle onClick={googleSignIn} className="mx-auto text-5xl mt-3"></FcGoogle>
                </div>
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Register;
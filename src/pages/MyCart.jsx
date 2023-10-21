import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import AData from "../components/AData";


const MyCart = () => {

    const { user } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [dataa, setDataa] = useState([]);

    useEffect(() => {
        const myemail = user?.email;
        setEmail(myemail)
        fetch(`http://localhost:5000/mycart/${email}`)
            .then(res => res.json())
            .then(data => setDataa(data))
    }, [email, user?.email])

    console.log(dataa);

    return (
        <div className="mt-20">
            <h2 className="text-center mb-8 text-2xl font-bold">Added Items</h2>
            {
                dataa.map((d, index) => <AData key={index} d={d} dataa={dataa} setDataa={setDataa}></AData>)
            }
        </div>
    );
};

export default MyCart;
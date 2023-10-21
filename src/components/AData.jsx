import Swal from 'sweetalert2'
import PropTypes from 'prop-types';


const AData = ({ d, dataa, setDataa }) => {

    // console.log(d._id);

    const handleDelete = n => {
        fetch(`https://randf-server.vercel.app/mycart/${n}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    const newDatas = dataa.filter(c => c._id !== n);
                    setDataa(newDatas)
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })
    }
    return (
        <div className="flex items-center gap-8">
            <div className='flex-1 bg-slate-400 p-5 m-5'>
                <div className='flex justify-center'>
                    <img className='h-[200px] w-[250px] text-center' src={d.photo} alt="" />
                </div>
                <div className="text-center font-bold">Product: {d.cart}</div>
                <div className="text-center font-bold">Type: {d.type}</div>
                <div className="text-center font-bold">Price: {d.price}</div>
            </div>
            <div className="flex-1"><button onClick={() => handleDelete(d._id)} className="btn bg-red-600 text-white">X</button></div>
        </div>
    );
};

export default AData;

AData.propTypes = {
    d: PropTypes.object,
    dataa: PropTypes.array,
    setDataa: PropTypes.func
}
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
            <div className="flex-1 text-right font-bold">{d.cart}</div>
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
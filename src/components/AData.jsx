import Swal from 'sweetalert2'

const AData = ({ d, dataa, setDataa }) => {

    const handleDelete = n => {
        fetch(`http://localhost:5000/mycart/${n}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    const newDatas = dataa.filter(c => c.cart !== n);
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
            <div className="flex-1"><button onClick={() => handleDelete(d.cart)} className="btn bg-red-600 text-white">X</button></div>
        </div>
    );
};

export default AData;
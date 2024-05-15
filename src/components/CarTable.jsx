import React, { useContext } from 'react'
import DataTable from 'react-data-table-component'
import './table.css'
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../context/DataContext';

function CarTable() {

    const { carData,setCarData } = useContext(DataContext);
    
    const customStyles = {
        rows: {
            style: {
            },

        },
        headCells: {
            style: {
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: "#0E46A3",
                color: "#fff",
            },
        },
        cells: {
            style: {
                fontSize: '14px',
            },
        },
    };

    const columns = [
        {
            id: "id",
            name: 'id',
            selector: row => row.id,
            sortable: true,
            center: true
        },
        {
            id: "type",
            name: 'Type',
            selector: row => row.type,
            sortable: true,
            center: true
        },
        {
            id: "model",
            name: 'Model',
            selector: row => row.model,
            sortable: true,
            center: true

        },
        {
            id: "brand",
            name: 'Brand',
            selector: row => row.brand,
            sortable: true,
            center: true

        },
        {
            id: "plate",
            name: 'Plate',
            selector: row => row.plate,
            sortable: true,
            center: true

        },
        {
            id: "seats",
            name: 'Seats',
            selector: row => row.seats,
            sortable: true,
            center: true

        }, 
        {
            id: "image",
            name: 'Image',
            selector: row => <img src={row.image} alt={row.username} onClick={()=>grow(row.image)}/>,
            sortable: true,
            center: true

        }, 
        {
            id: "LiceinesImageFront",
            name: 'LiceinesImageFront',
            selector: row => <img src={row.LiceinesImageFront} alt={row.username} onClick={()=>grow(row.LiceinesImageFront)}/>,
            sortable: true,
            center: true,
            width:"200px"


        },
        {
            id: "LiceinesImageBack",
            name: 'LiceinesImageBack',
            selector: row => <img src={row.LiceinesImageBack} alt={row.username} onClick={()=>grow(row.LiceinesImageBack)}/>,
            sortable: true,
            center: true,
            width:"200px"

        },
        {
            id: "LiceinesExpiration",
            name: 'LiceinesExpiration',
            selector: row => row.LiceinesExpiration,
            sortable: true,
            center: true,
            width:"200px"


        },
        {
            id: "userid",
            name: 'UserID',
            selector: row => row.userid,
            sortable: true,
            center: true,
            width:"130px"
        },
        {
            id: "statues",
            name: 'Statues',
            selector: row => row.statues,
            sortable: true,
            center: true,
            width:"150px",
            conditionalCellStyles : [
                {
                    when: row => row.statues === "pending",
                    style: {
                        color: '#4199b6',
                        fontSize: '16px',
                        fontWeight:"700"
                    },
                },
                {
                    when: row => row.statues === "accepted",
                    style: {
                        color: 'green',
                        fontSize: '16px',
                        fontWeight:"700"
                    },
                },
                {
                    when: row => row.statues === "rejected",
                    style: {
                        color: 'red',
                        fontSize: '16px',
                        fontWeight:"700"
                    },
                },
                
            ],
        },

    ];
    const grow=(item)=>{
        navigate('/image',{state:{item}})
    }
    const navigate = useNavigate();
    const handleRowClick = (row) => {
        navigate('/details', { state: row });
    }
    const handleFilter = (e) => {
        const newData = carData.filter(row => {
            return row.username.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setCarData(newData)
    }

    return (
        <div className='user-table'>
            {/* <div className="text-end">
                <input type="text" onChange={handleFilter} />
            </div> */}
            <DataTable
                responsive={true}
                highlightOnHover={true}
                data={carData}
                columns={columns}
                customStyles={customStyles}
                striped={true}
                pointerOnHover={true}
                fixedHeader={true}
            />
        </div>
    )
}

export default CarTable

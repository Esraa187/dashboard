import React, { useState, useContext,useEffect } from 'react'
import DataTable from 'react-data-table-component'
import './table.css'
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../context/DataContext';

function Table() {

    const navigate = useNavigate();

    const { carData } = useContext(DataContext);
    const { tripData } = useContext(DataContext);
    const { personalData } = useContext(DataContext);
    const { licenseData } = useContext(DataContext);
    ////////////////////////////////////////////////////////////////////////


    const { data, setData } = useContext(DataContext);
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
                color: "#fff"
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
            center: true,
            width: "80px"

        },
        {
            id: "image",
            name: 'Image',
            cell: (row) => <img src={row.image} alt={row.username} onClick={()=>grow(row.image)}/>,
            sortable: true,
            center: true,
            width: "150px"

        },
        {
            id: "username",
            name: 'Username',
            selector: row => row.username,
            sortable: true,
            center: true
        },
        {
            id: "phone",
            name: 'Phone',
            selector: row => row.phone,
            sortable: true,
            center: true

        },
        // {
        //     id: "statues",
        //     name: 'Statues',
        //     selector: row => row.statues,
        //     sortable: true,
        //     center: true,
        //     conditionalCellStyles : [
        //         {
        //             when: row => row.statues === "pending",
        //             style: {
        //                 color: '#4199b6',
        //                 fontSize: '16px',
        //                 fontWeight:"700"
        //             },
        //         },
        //         {
        //             when: row => row.statues === "accepted",
        //             style: {
        //                 color: 'green',
        //                 fontSize: '16px',
        //                 fontWeight:"700"
        //             },
        //         },
        //         {
        //             when: row => row.statues === "rejected",
        //             style: {
        //                 color: 'red',
        //                 fontSize: '16px',
        //                 fontWeight:"700"
        //             },
        //         },
                
        //     ],
        // },

    ];
    const grow=(item)=>{
        navigate('/image',{state:{item}})
    }
    /////////////////////////////////
    const [search, SetSearch] = useState('');
    const [filter, setFilter] = useState([]);
    

    const handleRowClick = (row) => {
        const newCarData = carData.filter((item) => {
            return item.userid === row.id
        })
        const newPersonalData = personalData.filter((item) => {
            return item.userid === row.id
        })
        const newTripData = tripData.filter((item) => {
            return item.userdataid === row.id
        })
        const newLicienseData = licenseData.filter((item) => {
            return item.userid === row.id
        })

        navigate('/details', { state: { row, car: newCarData, personal: newPersonalData, trip: newTripData, liciense: newLicienseData } });
    }
    useEffect(() => {
        const result = data.filter((item) => {
            return item.username.toLowerCase().match(search.toLocaleLowerCase());
        });
        setFilter(result);
    }, [search]);

    return (
        <div className='user-table'>
            <DataTable
                responsive={true}
                highlightOnHover={true}
                onRowClicked={handleRowClick}
                className="custom-table"
                data={filter}
                columns={columns}
                customStyles={customStyles}
                striped={true}
                pointerOnHover={true}
                fixedHeader={true}
                pagination
                subHeader
                subHeaderComponent={
                    <input type="text"
                        placeholder="Search..."
                        className='search'
                        value={search}
                        onChange={(e) => SetSearch(e.target.value)}

                    />
                }
                subHeaderAlign="left"
            />
        </div>
    )
}

export default Table

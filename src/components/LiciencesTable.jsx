import React, { useState,useContext } from 'react'
import DataTable from 'react-data-table-component'
import { DataContext } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';

function LiciencesTable() {
    const { licenseData, setLecienceTable } = useContext(DataContext);
    const navigate = useNavigate();
    
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
            width:"80px"
        },
        {
            id: "imagefront",
            name: 'ImageFront',
            selector: row => <img src={row.imagefront} alt={row.username} onClick={()=>grow(row.imagefront)}/>,
            sortable: true,
            center: true
        },
        {
            id: "imageback",
            name: 'ImageBack',
            selector: row => <img src={row.imageback} alt={row.username} onClick={()=>grow(row.imageback)}/>,
            sortable: true,
            center: true

        },
        {
            id: "expiration",
            name: 'Expiration',
            selector: row => row.expiration,
            sortable: true,
            center: true

        },{
            id: "createdon",
            name: 'CreatedOn',
            selector: row => row.createdon,
            sortable: true,
            center: true,
            width:"150px"


        },
        {
            id: "userid",
            name: 'UserId',
            selector: row => row.userid,
            sortable: true,
            center: true

        },
        {
            id: "statues",
            name: 'Statues',
            selector: row => row.statues,
            sortable: true,
            center: true,
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
    const handleReject = (id) => {
        console.log(id)
        const newData = licenseData.filter(row => row.id !== id);
        setLecienceTable(newData)

    }

    return (
        <div className='user-table'>
            {/* <div className="text-end">
                <input type="text" onChange={handleFilter} />
            </div> */}
            <DataTable
                responsive={true}
                highlightOnHover={true}
                data={licenseData}
                columns={columns}
                customStyles={customStyles}
                striped={true}
                pointerOnHover={true}
                fixedHeader={true}
            />
        </div>
    )
}

export default LiciencesTable

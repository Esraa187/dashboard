import React, { useState,useContext } from 'react'
import DataTable from 'react-data-table-component'
import { DataContext } from '../context/DataContext';

function TripTable() {
    const { tripData,setTripData } = useContext(DataContext);
    
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
            center: true,
            width:"80px"

        },
        {
            id: "from",
            name: 'From',
            selector: row => row.from,
            sortable: true,
            center: true
        },
        {
            id: "to",
            name: 'To',
            selector: row => row.to,
            sortable: true,
            center: true

        },
        {
            id: "date",
            name: 'Date',
            selector: row => row.date,
            sortable: true,
            center: true

        },
        {
            id: "recommendedprice",
            name: 'RecommendedPrice',
            selector: row => row.recommendedprice,
            sortable: true,
            center: true,
            width: "200px"

        },
        {
            id: "avilableseats",
            name: 'AvialableSeats',
            selector: row => row.avilableseats,
            sortable: true,
            center: true,
            width: "200px"

        },
        {
            id: "requestedseats",
            name: 'RequestedSeats',
            selector: row => row.requestedseats,
            sortable: true,
            center: true,
            width: "200px"

        },
        {
            id: "createdon",
            name: 'CreatedOn',
            selector: row => row.createdon,
            sortable: true,
            center: true,
            width: "150px"

        },
        {
            id: "userdataid",
            name: 'UserDataId',
            selector: row => row.userdataid,
            sortable: true,
            center: true,
            width: "150px"


        },
        {
            id: "cardid",
            name: 'CardId',
            selector: row => row.cardid,
            sortable: true,
            center: true

        },
        {
            id: "statues",
            name: 'Statues',
            selector: row => row.statues,
            sortable: true,
            center: true,
            width: "150px",
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
    const handleReject = (id) => {
        console.log(id)
        const newData = tripData.filter(row => row.id !== id);
        setTripData(newData)

    }
    const [x, setX] = useState({})
    const handleRowClick = (row) => {
        setX(row)
    }
    const handleFilter = (e) => {
        const newData = tripData.filter(row => {
            return row.username.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setTripData(newData)
    }

    return (
        <div className='user-table'>
            {/* <div className="text-end">
                <input type="text" onChange={handleFilter} />
            </div> */}
            <DataTable
                responsive={true}
                highlightOnHover={true}
                className="custom-table"
                data={tripData}
                columns={columns}
                customStyles={customStyles}
                striped={true}
                pointerOnHover={true}
                fixedHeader={true}
            />
        </div>
    )
}

export default TripTable

import React, { useState,useContext } from 'react'
import DataTable from 'react-data-table-component'
import './table.css'
import { DataContext } from '../context/DataContext';
import { useNavigate } from 'react-router-dom';

function PersonalData() {

    const { personalData,setPersonalData } = useContext(DataContext);
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
            id: "username",
            name: 'Username',
            selector: row => row.username,
            sortable: true,
            center: true,
            width:"150px"

        },
        {
            id: "birthdata",
            name: 'BirthDate',
            selector: row => row.birthdata,
            sortable: true,
            center: true,
            width:"150px"

        },
        {
            id: "gender",
            name: 'Gender',
            selector: row => row.gender,
            sortable: true,
            center: true,
            width:"150px"


        },
        {
            id: "nationality",
            name: 'Nationality',
            selector: row => row.nationality,
            sortable: true,
            center: true,
            width:"150px"

        },
        {
            id: "address",
            name: 'Address',
            selector: row => row.address,
            sortable: true,
            center: true,
            width:"150px"


        },
        {
            id: "nationalcardimagefront",
            name: 'NationalCardImageFront',
            selector: row => <img src={row.nationalcardimagefront} alt={row.username} onClick={()=>grow(row.nationalcardimagefront)}/>,
            sortable: true,
            center: true,
            width:"250px"

        },{
            id: "nationalcardimageback",
            name: 'NationalCardImageBack',
            selector: row =>  <img src={row.nationalcardimageback} alt={row.username} onClick={()=>grow(row.nationalcardimageback)}/>,
            sortable: true,
            center: true,
            width:"250px"
        },
        {
            id: "profileimage",
            name: 'ProfileImage',
            selector: row => <img src={row.profileimage} alt={row.username} onClick={()=>grow(row.profileimage)}/>,
            sortable: true,
            center: true,
            width:"150px"
        },
        {
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
    const handleReject = (id) => {
        console.log(id)
        const newData = personalData.filter(row => row.id !== id);
        setPersonalData(newData)

    }
    const [x, setX] = useState({})
    const handleRowClick = (row) => {
        setX(row)
    }
    const handleFilter = (e) => {
        const newData = PersonalData.filter(row => {
            return row.username.toLowerCase().includes(e.target.value.toLowerCase())
        })
        setPersonalData(newData)
    }

    return (
        <div className='user-table'>
            {/* <div className="text-end">
                <input type="text" onChange={handleFilter} />
            </div> */}
            <DataTable
                responsive={true}
                highlightOnHover={true}
                onRowClicked={handleRowClick}
                className="custom-table"
                data={personalData}
                columns={columns}
                customStyles={customStyles}
                striped={true}
                pointerOnHover={true}
                fixedHeader={true}
            />
        </div>
    )
}

export default PersonalData

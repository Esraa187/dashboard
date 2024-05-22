import React, { useState, useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component'
import './details.css'
import { DataContext } from '../context/DataContext';
import { StatusContext } from '../context/StatusContext';


function DetailsTable() {
    const location = useLocation();
    const navigate = useNavigate();

    console.log(location)
    const { data, setData ,carData, setCarData, personalData, setPersonalData, tripData, setTripData, licenseData, setLecienceTable} = useContext(DataContext);
    const UserData = [{ id: location.state.row.id, image:location.state.row.image, username: location.state.row.username, phone: location.state.row.phone,statues: location.state.row.statues, },]
    let cardata = []
    if (location.state.car.length === 0) {
        cardata = []
    } else {
        cardata = [
            {
                id: location.state.car[0].id, type: location.state.car[0].type, model: location.state.car[0].model,
                brand: location.state.car[0].brand, plate: location.state.car[0].plate, seats: location.state.car[0].seats,
                image: location.state.car[0].image, LiceinesImageFront: location.state.car[0].LiceinesImageFront,
                LiceinesImageBack: location.state.car[0].LiceinesImageBack, LiceinesExpiration: location.state.car[0].LiceinesExpiration,
                userid: location.state.car[0].userid , statues: location.state.car[0].statues
            }
        ];
    }
    let personaldata = []

    if (location.state.personal.length === 0) {
        personaldata = []
    } else {
        personaldata = [
            {
                id: location.state.personal[0].id, username: location.state.personal[0].username,
                birthdata: location.state.personal[0].birthdata, gender: location.state.personal[0].gender, nationality: location.state.personal[0].nationality,
                address: location.state.personal[0].address, nationalcardimagefront: location.state.personal[0].nationalcardimagefront,
                nationalcardimageback: location.state.personal[0].nationalcardimageback, profileimage: location.state.personal[0].profileimage,
                createdon: location.state.personal[0].createdon, userid: location.state.personal[0].userid,statues: location.state.car[0].statues
            }
        ];
    }

    let tripdata = []
    if (location.state.trip.length === 0) {
        tripdata = []
    } else {
        tripdata = [
            {
                id: location.state.trip[0].id, from: location.state.trip[0].from, to: location.state.trip[0].to,
                date: location.state.trip[0].date, recommendedprice: location.state.trip[0].recommendedprice,
                avilableseats: location.state.trip[0].avilableseats, requestedseats: location.state.trip[0].requestedseats,
                createdon: location.state.trip[0].createdon, userdataid: location.state.trip[0].userdataid, cardid: location.state.trip[0].cardid
            },
        ]
    }
    let licensedata = []
    if (location.state.liciense.length === 0) {
        licensedata = []
    }
    else {
        licensedata = [
            {
                id: location.state.liciense[0].id, imagefront: location.state.liciense[0].imagefront,
                imageback: location.state.liciense[0].imageback, expiration: location.state.liciense[0].expiration,
                createdon: location.state.liciense[0].createdon, userid: location.state.liciense[0].userid
            },
        ];
    }
    /////////////////////////////////////////////////////////////
    const customStyles = {
        headCells: {
            style: {
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: "#176B87",
                color: "#fff"
            },
        },
        cells: {
            style: {
                fontSize: '14px',
                backgroundColor: "#eee",
            },
        },
    };
    const customStyles2 = {
        headCells: {
            style: {
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: "#1679AB",
                color: "#fff"
            },
        },
        cells: {
            style: {
                fontSize: '14px',
                backgroundColor: "#eee",
            },
        },
    };
    const customStyles3 = {
        headCells: {
            style: {
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: "#3887BE",
                color: "#fff"
            },
        },
        cells: {
            style: {
                fontSize: '14px',
                backgroundColor: "#ddd",
            },
        },
    };
    const customStyles4 = {
        headCells: {
            style: {
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: "#2D9596",
                color: "#fff"
            },
        },
        cells: {
            style: {
                fontSize: '14px',
                backgroundColor: "#ddd",
            },
        },
    };
    const customStyles5 = {
        headCells: {
            style: {
                fontSize: '16px',
                fontWeight: 'bold',
                backgroundColor: "#176B87",
                color: "#fff"
            },
        },
        cells: {
            style: {
                fontSize: '14px',
                backgroundColor: "#ddd",
            },
        },
    };
    ///////////////////////////////////////////////////////////////////////////////////////
    const columns = [
        {
            id: "id",
            name: 'id',
            selector: row => row.id,
            sortable: true,
            center: true
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
        {
            id: "edit",
            name: 'Edit',
            selector: row => (
                <button className='edit-btn' onClick={()=>edit(row)}>
                    Edit
                </button>
            ),
            center: true
        },
        // {
        //     id: "actions",
        //     name: 'Actions',
        //     width:"230px",
        //     selector: row => (
        //         <div>
        //             <button className='accept-btn' onClick={() => acceptData(row)}>
        //                 Accept
        //             </button>
        //             <button className='reject-btn' onClick={() => rejectData(row)}>
        //                 Reject
        //             </button>
        //         </div>
        //     ),
        //     center: true,
        // }
    ];
    const carcolumns = [
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
            width: "200px"


        },
        {
            id: "LiceinesImageBack",
            name: 'LiceinesImageBack',
            selector: row => <img src={row.LiceinesImageBack} alt={row.username} onClick={()=>grow(row.LiceinesImageBack)}/>,
            sortable: true,
            center: true,
            width: "200px"

        },
        {
            id: "LiceinesExpiration",
            name: 'LiceinesExpiration',
            selector: row => row.LiceinesExpiration,
            sortable: true,
            center: true,
            width: "200px"


        },
        {
            id: "userid",
            name: 'UserID',
            selector: row => row.userid,
            sortable: true,
            center: true,
            width: "150px"
        },
        {
            id: "statues",
            name: 'Statues',
            selector: row => row.statues,
            sortable: true,
            center: true,
            width:"120px",
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
        {
            id: "edit",
            name: 'Edit',
            selector: row => (
                <button className='edit-btn' onClick={()=>editCar(row)}>
                    Edit
                </button>
            ),
            center: true
        },
        {
            id: "actions",
            name: 'Actions',
            width:"200px",
            selector: row => (
                <div>
                    <button className='accept-btn' onClick={() => acceptCar(row)}>
                        Accept
                    </button>
                    <button className='reject-btn' onClick={() => rejectCar(row)}>
                        Reject
                    </button>
                </div>
            ),
            center: true,
        }

    ];
    const personalcolumns = [
        {
            id: "id",
            name: 'id',
            selector: row => row.id,
            sortable: true,
            center: true,
            width: "80px"

        },
        {
            id: "username",
            name: 'Username',
            selector: row => row.username,
            sortable: true,
            center: true,
            width: "150px"

        },
        {
            id: "birthdata",
            name: 'BirthDate',
            selector: row => row.birthdata,
            sortable: true,
            center: true,
            width: "150px"

        },
        {
            id: "gender",
            name: 'Gender',
            selector: row => row.gender,
            sortable: true,
            center: true,
            width: "150px"


        },
        {
            id: "nationality",
            name: 'Nationality',
            selector: row => row.nationality,
            sortable: true,
            center: true,
            width: "150px"

        },
        {
            id: "address",
            name: 'Address',
            selector: row => row.address,
            sortable: true,
            center: true,
            width: "150px"


        },
        {
            id: "nationalcardimagefront",
            name: 'NationalCardImageFront',
            selector: row => <img src={row.nationalcardimagefront} alt={row.username} onClick={()=>grow(row.nationalcardimagefront)}/>,
            sortable: true,
            center: true,
            width: "250px"

        }, {
            id: "nationalcardimageback",
            name: 'NationalCardImageBack',
            selector: row => <img src={row.nationalcardimageback} alt={row.username} onClick={()=>grow(row.nationalcardimageback)}/>,
            sortable: true,
            center: true,
            width: "250px"
        },
        {
            id: "profileimage",
            name: 'ProfileImage',
            selector: row => <img src={row.profileimage} alt={row.username} onClick={()=>grow(row.profileimage)}/>,
            center: true,
            width: "150px"


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
            width:"120px",
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
        {
            id: "edit",
            name: 'Edit',
            selector: row => (
                <button className='edit-btn' onClick={()=>editPersonal(row)}>
                    Edit
                </button>
            ),
            center: true
        },
        {
            id: "actions",
            name: 'Actions',
            width:"200px",
            selector: row => (
                <div>
                    <button className='accept-btn' onClick={() => acceptPersonal(row)}>
                        Accept
                    </button>
                    <button className='reject-btn' onClick={() => rejectPersonal(row)}>
                        Reject
                    </button>
                </div>
            ),
            center: true,
        }

    ];
    const licensecolumns = [
        {
            id: "id",
            name: 'id',
            selector: row => row.id,
            sortable: true,
            center: true,
            width: "80px"
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

        }, {
            id: "createdon",
            name: 'CreatedOn',
            selector: row => row.createdon,
            sortable: true,
            center: true,
            width: "150px"


        },
        {
            id: "userid",
            name: 'UserId',
            selector: row => row.userid,
            sortable: true,
            center: true

        },
        {
            id: "actions",
            name: 'Actions',
            width:"200px",
            selector: row => (
                <div>
                    <button className='accept-btn' onClick={() => acceptLiciences(row)}>
                        Accept
                    </button>
                    <button className='reject-btn' onClick={() => rejectLiciences(row)}>
                        Reject
                    </button>
                </div>
            ),
            center: true,
        }
    ];
    const tripcolumns = [
        {
            id: "id",
            name: 'id',
            selector: row => row.id,
            sortable: true,
            center: true,
            width: "80px"

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
            id: "actions",
            name: 'Actions',
            width:"200px",
            selector: row => (
                <div>
                    <button className='accept-btn' onClick={() => acceptTrip(row)}>
                        Accept
                    </button>
                    <button className='reject-btn' onClick={() => rejectTrip(row)}>
                        Reject
                    </button>
                </div>
            ),
            center: true,
        }
    ];
    const acceptData = (row) => {
        const rowData = data[row.id - 1];
        const newData = [...data];
        newData[row.id - 1] = { ...rowData, statues: 'accepted' };
        setData(newData);
        navigate("/table")
    }
    const rejectData = (row) => {
        const rowData = data[row.id - 1];
        const newData = [...data];
        newData[row.id - 1] = { ...rowData, statues: 'rejected' };
        setData(newData);
        alert('This is an alert!');
        navigate("/table")
    }
    ////////////////////////////////////////////////////
    const acceptCar = (row) => {
        const rowData = carData[row.id - 1];
        const newData = [...carData];
        newData[row.id - 1] = { ...rowData, statues: 'accepted' };
        setCarData(newData);
        navigate("/car")
    }
    const rejectCar = (row) => {
        const rowData = carData[row.id - 1];
        const newData = [...carData];
        newData[row.id - 1] = { ...rowData, statues: 'rejected' };
        setCarData(newData);
        alert('This is an alert!');
        navigate("/car")
    }
    ////////////////////////////////////////////////
    const acceptPersonal = (row) => {
        const rowData = personalData[row.id - 1];
        const newData = [...personalData];
        newData[row.id - 1] = { ...rowData, statues: 'accepted' };
        setPersonalData(newData);
        navigate("/personal-data")
    }
    const rejectPersonal= (row) => {
        const rowData = personalData[row.id - 1];
        const newData = [...personalData];
        newData[row.id - 1] = { ...rowData, statues: 'rejected' };
        setPersonalData(newData);
        alert('This is an alert!');
        navigate("/personal-data")
    }
    ///////////////////////////////////////////////
    const acceptLiciences = (row) => {
        const rowData = licenseData[row.id - 1];
        const newData = [...licenseData];
        newData[row.id - 1] = { ...rowData, statues: 'accepted' };
        setLecienceTable(newData);
        navigate("/licienses")
    }
    const rejectLiciences= (row) => {
        const rowData = licenseData[row.id - 1];
        const newData = [...licenseData];
        newData[row.id - 1] = { ...rowData, statues: 'rejected' };
        setLecienceTable(newData);
        alert('This is an alert!');
        navigate("/licienses")
    }
    /////////////////////////////////////////////////////
    const acceptTrip = (row) => {
        const rowData = tripData[row.id - 1];
        const newData = [...tripData];
        newData[row.id - 1] = { ...rowData, statues: 'accepted' };
        setTripData(newData);
        navigate("/trip")
    }
    const rejectTrip= (row) => {
        const rowData = tripData[row.id - 1];
        const newData = [...tripData];
        newData[row.id - 1] = { ...rowData, statues: 'rejected' };
        setTripData(newData);
        alert('This is an alert!');
        navigate("/trip")
    }
    const grow=(item)=>{
        navigate('/image',{state:{item}})
    }
    const edit = (row) => {
        navigate("/useredit", { state: { row } })
    }
    const editCar = (row) => {
        navigate("/caredit", { state: { row } })
    }
    const editPersonal = (row)=>{
        navigate("/personaledit", { state: { row } })
    }
    return (
        <div>
            <br />
            <span className='title'>User</span>
            <hr />
            <DataTable
                responsive={true}
                highlightOnHover={true}
                data={UserData}
                columns={columns}
                customStyles={customStyles}
                striped={true}
                pointerOnHover={true}
                fixedHeader={true}
            />
            <br /><br />
            <span className='title'>Car</span>
            <hr />
            <DataTable
                responsive={true}
                highlightOnHover={true}
                data={cardata}
                columns={carcolumns}
                customStyles={customStyles2}
                striped={true}
                pointerOnHover={true}
                fixedHeader={true}
            />
            <br /><br />
            <span className='title'>Personal Data</span>
            <hr />
            <DataTable
                responsive={true}
                highlightOnHover={true}
                data={personaldata}
                columns={personalcolumns}
                customStyles={customStyles3}
                striped={true}
                pointerOnHover={true}
                fixedHeader={true}
            />
            <br /><br />
            <span className='title'>Trip</span>
            <hr />
            <DataTable
                responsive={true}
                highlightOnHover={true}
                data={tripdata}
                columns={tripcolumns}
                customStyles={customStyles4}
                striped={true}
                pointerOnHover={true}
                fixedHeader={true}
            />
            <br /><br />
            <span className='title'>Licenses</span>
            <hr />
            <DataTable
                responsive={true}
                highlightOnHover={true}
                data={licensedata}
                columns={licensecolumns}
                customStyles={customStyles5}
                striped={true}
                pointerOnHover={true}
                fixedHeader={true}
            />
        </div>
    )
}

export default DetailsTable

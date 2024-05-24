import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import './details.css';
import Cookies from 'js-cookie';

function DetailsTable() {
    const location = useLocation();
    const navigate = useNavigate();
    const [userData, setUserData] = useState([]);
    const [userNotFound, setUserNotFound] = useState(false);
    const [carData, setCarData] = useState([]);
    const [carNotFound, setCarNotFound] = useState(false);
    const [licenseData, setLicenseData] = useState([]);
    const [licenseNotFound, setLicenseNotFound] = useState(false);
    const [tripData, setTripData] = useState([]);
    const [tripNotFound, setTripNotFound] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userId = location.state.row.id;
                const token = Cookies.get('token');
                const response = await fetch(`https://vehicle-share-api.runasp.net/api/UserData/Admin/userdataByUser/${userId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const result = await response.json();
                if (result.data) {
                    console.log("Fetched user data:", result.data);
                    setUserData([result.data]);
                    setUserNotFound(false);

                    // Fetch car data using the fetched user data id
                    fetchCarData(result.data.id);
                    fetchLicenseData(result.data.id)
                    fetchTripData(result.data.id)
                } else {
                    setUserNotFound(true);
                    setUserData([]);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
                setUserNotFound(true);
                setUserData([]);
            }
        };

        const fetchCarData = async (userDataId) => {
            try {
                const token = Cookies.get('token');
                const response = await fetch(`https://vehicle-share-api.runasp.net/api/car/Admin/${userDataId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const result = await response.json();
                console.log(result.data)
                console.log(`License ID ${result.data.length} `);
                if (result.data) {
                    console.log("Fetched car data:", result.data);
                    setCarData([result.data]);

                    setCarNotFound(false);
                } else {
                    setCarNotFound(true);
                    setCarData([]);
                }
            } catch (error) {
                console.error("Error fetching car data:", error);
                setCarNotFound(true);
                setCarData([]);
            }
        };

        const fetchLicenseData = async (userDataId) => {
            try {
                const token = Cookies.get('token');
                const response = await fetch(`https://vehicle-share-api.runasp.net/api/license/Admin/${userDataId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const result = await response.json();
                console.log(result.data)
                if (result.data) {
                    console.log("Fetched license data:", result.data);
                    setLicenseData([result.data]);
                    setLicenseNotFound(false);
                } else {
                    setLicenseNotFound(true);
                    setLicenseData([]);
                }
            } 
            catch (error) {
                console.error("Error fetching license data:", error);
                setLicenseNotFound(true);
                setLicenseData([]);
            }
        };

        const fetchTripData = async (userDataId) => {
            try {
                const token = Cookies.get('token');
                const response = await fetch(`https://vehicle-share-api.runasp.net/api/trip/Admin/TripById/${userDataId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const result = await response.json();
                console.log(result.data);
    
                if (result.data) {
                    console.log("Fetched Trip data:", result.data);
    
                    // Transform the data
                    const transformedData = {
                        ...result.data,
                        from: `${result.data.fromLatitude}, ${result.data.fromLongitude}`,
                        to: `${result.data.toLatitude}, ${result.data.toLongitude}`,
                    };
    
                    setTripData([transformedData]);
                    setTripNotFound(false);
                } else {
                    setTripNotFound(true);
                    setTripData([]);
                }
            } catch (error) {
                console.error("Error fetching trip data:", error);
                setTripNotFound(true);
                setTripData([]);
            }
        };
    
        fetchUserData();
    }, [location.state.row.id]);

    /// the shape of  status in veiw  
    const getStatusString = (status) => {
        switch(status) {
            case 0:
                return 'pending';
            case 1:
                return 'accepted';
            case 2:
                return 'rejected';
            default:
                return '';
        }
    };

    const userColumns = [
        { name: 'ID', selector: row => row.id, sortable: true, center: true },
        { name: 'Name', selector: row => row.name, sortable: true, center: true },
        { name: 'National ID', selector: row => row.nationalId, sortable: true, center: true },
        { name: 'Birthdate', selector: row => row.birthdate, sortable: true, center: true },
        { name: 'Gender', selector: row => row.gender ? 'Male' : 'Female', sortable: true, center: true },
        { name: 'Nationality', selector: row => row.nationality, sortable: true, center: true },
        { name: 'Address', selector: row => row.address, sortable: true, center: true },
        { name: 'Profile Image', selector: row => <img src={row.profileImage} alt={row.name} onClick={() => grow(row.profileImage)} />, center: true, width: '150px' },
        { name: 'Status',selector: row => getStatusString(row.status),sortable: true, center: true, width: '120px', conditionalCellStyles: [
            { when: row => row.status === 0, style: { color: '#4199b6', fontSize: '16px', fontWeight: '700' } },
            { when: row => row.status === 1, style: { color: 'green', fontSize: '16px', fontWeight: '700' } },
            { when: row => row.status === 2, style: { color: 'red', fontSize: '16px', fontWeight: '700' } },
        ] },
        { name: 'Edit', selector: row => <button className='edit-btn' onClick={() => editCar(row)}>Edit</button>, center: true },
        { name: 'Actions', selector: row => (
            <div>
                <button className='accept-btn' onClick={() => updateLicenseStatus(row, 'accepted')}>Accept</button>
                <button className='reject-btn' onClick={() => updateLicenseStatus(row, 'rejected')}>Reject</button>
            </div>
        ), center: true , width: '200px' }
    ];

    const carColumns = [
        { name: 'ID', selector: row => row.id, sortable: true, center: true },
        { name: 'Type', selector: row => row.type, sortable: true, center: true },
        { name: 'Model Year', selector: row => row.modelYear, sortable: true, center: true },
        { name: 'Brand', selector: row => row.brand, sortable: true, center: true },
        { name: 'Plate', selector: row => row.plate, sortable: true, center: true },
        { name: 'Seats', selector: row => row.seats, sortable: true, center: true },
        { name: 'Image', selector: row => <img src={row.image} alt={row.id} onClick={() => grow(row.image)} />, center: true, width: '150px' },
        { name: 'License Image Front', selector: row => <img src={row.licenseImageFront} alt={row.id} onClick={() => grow(row.licenseImageFront)} />, center: true, width: '200px' },
        { name: 'License Image Back', selector: row => <img src={row.licenseImageBack} alt={row.id} onClick={() => grow(row.licenseImageBack)} />, center: true, width: '200px' },
        { name: 'License Expiration', selector: row => row.licenseExpiration, sortable: true, center: true, width: '200px' },
        {  name: 'Status',selector: row => getStatusString(row.status),sortable: true, center: true, width: '120px', conditionalCellStyles: [
           { when: row => row.status === 0, style: { color: '#4199b6', fontSize: '16px', fontWeight: '700' } },
           { when: row => row.status === 1, style: { color: 'green', fontSize: '16px', fontWeight: '700' } },
           { when: row => row.status === 2, style: { color: 'red', fontSize: '16px', fontWeight: '700' } },
       ] },
       { name: 'Actions', selector: row => (
        <div>
            <button className='accept-btn' onClick={() => updateLicenseStatus(row, 'accepted')}>Accept</button>
            <button className='reject-btn' onClick={() => updateLicenseStatus(row, 'rejected')}>Reject</button>
        </div>
    ), center: true , width: '200px' }
    ];

    const licenseColumns = [
        { name: 'ID', selector: row => row.id, sortable: true, center: true, width: '300px' },
        { name: 'Image Front', selector: row => <img src={row.imageFront} alt={row.id} onClick={() => grow(row.imageFront)} />, center: true , width: '175px' },
        { name: 'Image Back', selector: row => <img src={row.imageBack} alt={row.id} onClick={() => grow(row.imageBack)} />, center: true, width: '175px' },
        { name: 'Expiration', selector: row => row.expiration, sortable: true, center: true },
        // Add more columns as needed
    
        { name: 'Status',selector: row => getStatusString(row.status),sortable: true, center: true, width: '120px', conditionalCellStyles: [
                { when: row => row.status === 0, style: { color: '#4199b6', fontSize: '16px', fontWeight: '700' } },
                { when: row => row.status === 1, style: { color: 'green', fontSize: '16px', fontWeight: '700' } },
                { when: row => row.status === 2, style: { color: 'red', fontSize: '16px', fontWeight: '700' } },
            ] },
        
        { name: 'Actions', selector: row => (
            <div >
                <button className='accept-btn' onClick={() => updateLicenseStatus(row, 'accepted')}>Accept</button>
                <button className='reject-btn' onClick={() => updateLicenseStatus(row, 'rejected')}>Reject</button>
            </div>
        ), center: true , width: '200px' }
    ];
    const Tripcolumns = [
        { name: 'ID', selector: row => row.id, sortable: true, center: true, width: "80px" },
        { name: 'From', selector: row => row.from, sortable: true, center: true },
        { name: 'To', selector: row => row.to, sortable: true, center: true },
        { name: 'Date', selector: row => row.date, sortable: true, center: true },
        { name: 'Recommended Price', selector: row => row.recommendedPrice, sortable: true, center: true, width: "200px" },
        { name: 'Available Seats', selector: row => row.availableSeats, sortable: true, center: true, width: "200px" },
        { name: 'Requested Seats', selector: row => row.requestedSeats, sortable: true, center: true, width: "200px" },
        { name: 'Created On', selector: row => row.createdOn, sortable: true, center: true, width: "150px" },
        { name: 'Is Finished', selector: row => row.isFinished ? 'true' : 'false', sortable: true, center: true, width: "150px" },
        { name: 'User Data ID', selector: row => row.userDataId, sortable: true, center: true, width: "150px" },
        { name: 'Car ID', selector: row => row.carId, sortable: true, center: true },
       
    ];
    const customStyles = {
        headCells: { style: { fontSize: '16px', fontWeight: 'bold', backgroundColor: "#176B87", color: "#fff" } },
        cells: { style: { fontSize: '14px', backgroundColor: "#eee" } },
    };
    
    const grow = (item) => navigate('/image', { state: { item } });
    const editCar = (row) => navigate("/caredit", { state: { row } });
    
    const updateCarStatus = (row, status) => {
        // Update car data
        console.log('Car ID ${row.id} status updated to ${status}');
    };
    
    const updateLicenseStatus = (row, status) => {
        // Update license data
        console.log('License ID ${row.id} status updated to ${status}');
    };

    return (
        <div>
            <h2>User Details</h2>
            {userNotFound ? (
                <p>No user data found</p>
            ) : (
                <DataTable
                    columns={userColumns}
                    data={userData}
                    customStyles={customStyles}
                    pagination
                />
            )}
            <h2>Car Details</h2>
            {carNotFound ? (
                <p>No car data found</p>
            ) : (
                <DataTable
                    columns={carColumns}
                    data={carData}
                    customStyles={customStyles}
                    pagination
                />
            )}
             <h2>License Details</h2>
            {licenseNotFound ? (
                <p>No car data found</p>
            ) : (
                <DataTable
                    columns={licenseColumns}
                    data={licenseData}
                    customStyles={customStyles}
                    pagination
                />
            )}
             <h2>Trip Details</h2>
            {tripNotFound ? (
                <p>No car data found</p>
            ) : (
                <DataTable
                    columns={Tripcolumns}
                    data={tripData}
                    customStyles={customStyles}
                    pagination
                />
            )}
        </div>
    );
}

export default DetailsTable;

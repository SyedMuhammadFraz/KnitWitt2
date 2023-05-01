import React, {useState, useEffect, Fragment} from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap-5.0.2-dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Employee_CRUD=()=>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const personData=[
        {
        Person_Id:'1',
        First_Name:'Syed',
        Last_Name:'Fraz',
        Email:'frazpk15@gmail.com',
        Contact:'03316666033',
        DOB:'2003-03-22',
        Gender:1,
        CNIC:'35201-3825806-1'
        }
    ]
    
    const[First_Name, setFirstName]=useState('');
    const[Last_Name, setLastName]=useState('');
    const[Email, setEmail]=useState('');
    const[Contact, setContact]=useState('');
    const[DOB, setDOB]=useState('');
    const[Gender, setGender]=useState('');
    const[CNIC, setCNIC]=useState('');

    const[editFirst_Name, setEditFirstName]=useState('');
    const[editLast_Name, setEditLastName]=useState('');
    const[editEmail, setEditEmail]=useState('');
    const[editContact, setEditContact]=useState('');
    const[editDOB, setEditDOB]=useState('');
    const[editGender, setEditGender]=useState('');
    const[editCNIC, setEditCNIC]=useState('');


    const [data, setData]=useState([]);

    useState(()=>{
        setData(personData);
    },{})
  
    const handleDelete=(Person_Id)=>{
        if(window.confirm("Are you sure you want to delete this employee")==true){
            alert(Person_Id);
        }
    }
    const handleEdit=(Person_Id)=>{
        handleShow();
    }

    return (
        <Fragment>

    
<br></br>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Contact</th>
                <th>DOB</th>
                <th>Gender</th>
                <th>CNIC</th>
                </tr>
            </thead>
            <tbody>

                {
                    data && data.length > 0 ?
                        data.map((item, index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.First_Name}</td>
                                    <td>{item.Last_Name}</td>
                                    <td>{item.Email}</td>
                                    <td>{item.Contact}</td>
                                    <td>{item.DOB}</td>
                                    <td>{item.Gender}</td>
                                    <td>{item.CNIC}</td>
                                    <td colSpan={2}>
                                        <button className="btn btn-primary" onClick={()=> handleEdit(item.Person_Id)}>Edit</button> &nbsp;
                                        <button className="btn btn-danger" onClick={()=> handleDelete(item.Person_Id)}>Delete</button> &nbsp;

                                    </td>
                                </tr>
                            ) 
                    })
                    :
                    'Loading....'


                }
                
                
            </tbody>
            </Table>

    
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Add</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Row>
        <Col xs={6}>
            <input type="text" className="form-control" placeholder="Enter First Name " value={First_Name} onChange={(e)=> setFirstName(e.target.value)}/>
        </Col>
        <Col xs={6}>
            <input type="text" className="form-control" placeholder="Enter Last Name " value={Last_Name} onChange={(e)=> setLastName(e.target.value)}/>
        </Col>
    </Row>
        <br></br>
    <Row>
        <Col xs={6}>
            <input type="text" className="form-control" placeholder="Enter Email Address " value={Email} onChange={(e)=> setEmail(e.target.value)}/>
        </Col>
        <Col xs={6}>
            <input type="text" className="form-control" placeholder="Enter Contact " value={Contact} onChange={(e)=> setContact(e.target.value)}/>
        </Col>
    </Row>    
        <br></br>
    <Row>
        <Col xs={6}>
            <input type="date" className="form-control" placeholder="Enter DOB " value={DOB} onChange={(e)=> set(e.target.value)}/>
        </Col>
        <br></br>
        <Col md='auto'>
            <input type="radio" value={Gender === 1 ? true : false}/>
            <label>Male</label>
        </Col>
        <Col>
            <input type="radio" value={Gender === 0 ? true : false}/>
            <label>Female</label>
        </Col>
    </Row>
        <br></br>
    <Row>
        <Col xs={6}>
            <input type="text" className="form-control" placeholder="Enter CNIC " value={CNIC}/>
        </Col>
    <Row/>
        <br></br>
    <Row></Row>
        <Col>
            <button className="btn btn-primary">Add Employee</button>
        </Col>
      </Row>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Save Changes
            </Button>
            </Modal.Footer>
        </Modal>
    </Fragment>
    )
}

export default Employee_CRUD;
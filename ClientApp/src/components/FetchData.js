import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import {BrowserRouter as Router, Route } from 'react-router-dom';


function FetchData(props) {
    const [forecasts, setForecasts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        populateWeatherData();
    }, []);

    const renderForecastsTable = (forecasts) => {
        // You can implement the rendering logic here
        return null;
    };

    function Shirts(props) {
        const { myProp } = props;
        // You can access the passed props here
        return (
            <div>
                <h2>BFH Shirts</h2>
                <p>Received prop: {props.myProp}</p>
            </div>
        );
    }
    function App() {
        return (
            <div>
                <Route
                    path="/fetch-data"
                    render={(routeProps) => <Shirts {...routeProps} myProp="BFH Shirts!" />}
                    />
            </div>
        );
    }

    const populateWeatherData = async () => {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        setForecasts(data);
        setLoading(false);
    };

    const contents = loading ? <p><em>Loading...</em></p> : renderForecastsTable(forecasts);

    return (
        <div>
            <h1 id="tableLabel">Trying to figure this shit out!!!</h1>
            <p></p>
            {contents}
            <div className="mb-2">
                <Button variant="warning" size="lg" onClick={() => setShow(true) }>
                    Edit Category
                </Button>{}
                <Button variant="success" size="lg">
                    Save Changes
                </Button>
            </div>
            <Modal show={show} onHide={(handleClose) => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder=""
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Product Description</Form.Label>
                            <Form.Control as="textarea" rows={2} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Add Item
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Delete Item
                    </Button>
                    <Button variant="danger" onClick={handleClose}>
                        Exit
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default FetchData;

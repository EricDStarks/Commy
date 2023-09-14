import React, { Component, useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from "axios";

export function Home() {
    const [categories, setCategories] = useState([]);

    useEffect(function () {

        var response = axios.get("https://localhost:7083/categories")
        response.then(res => {
            console.log(res.data)
            setCategories(res.data)
        })
    }, [])

    var categoriesHTML = categories.map((element) => {
        return (
            <Row><a href="/fetch-data">{element.name}</a></Row>
        )
    });
    return (
        <Container>
            {categoriesHTML}
        </Container>
    );
}

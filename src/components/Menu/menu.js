import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Menu() {
    return ( 
        <div>
            <Card style={{ margin: '75px'}}>
                <Card.Body>
                    <Card.Title>Sudoku Solver</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Link className="nav-link" to={"/sudoku"}><Button variant="primary">Go </Button></Link>
                </Card.Body>
            </Card>
            <Card style={{ margin: '75px'}}>
                <Card.Body>
                    <Card.Title>Path Finder</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Link className="nav-link" to={"/maze"}><Button variant="primary">GO to Path </Button></Link>                </Card.Body>
            </Card>
            <Card style={{ margin: '75px'}}>
                <Card.Body>
                    <Card.Title>Word Search</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Link className="nav-link" to={"/word-search"}><Button variant="primary">Go to word search </Button></Link>                </Card.Body>
            </Card>
        </div>
    );

}

export default Menu


import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import useTitle from '../../Hooks/UseTitle';


const Blog = () => {
    useTitle('Blog')

    return (
        <div>
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Question#1:     Difference between SQL and NoSQL.</Accordion.Header>
                    <br></br>
                    <Accordion.Body>
                        SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.
                    </Accordion.Body>
                </Accordion.Item>
                <br />
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Question#2:     What is JWT, and how does it work?</Accordion.Header>
                    <br></br>
                    <Accordion.Body>
                        JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).
                    </Accordion.Body>
                </Accordion.Item>
                <br />
                <Accordion.Item eventKey="1">
                    <Accordion.Header className='text-orange'>Question#3: What is the difference between javascript and NodeJS?</Accordion.Header>
                    <br></br>

                    <Accordion.Body>
                        JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.
                    </Accordion.Body>
                </Accordion.Item>
                <br />
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Question#4: How does NodeJS handle multiple requests at the same time?</Accordion.Header>
                    <br></br>
                    <Accordion.Body>
                        NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
                    </Accordion.Body>
                </Accordion.Item>
                <br></br>
            </Accordion>
        </div>
    );
};

export default Blog;
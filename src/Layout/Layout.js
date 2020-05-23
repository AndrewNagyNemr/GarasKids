import React from 'react';

import { Container } from 'react-bootstrap';


 const Layout = (props) => {
    return (
        <Container className="mt-4">
            {props.children}
        </Container>
    )
}
export default Layout;
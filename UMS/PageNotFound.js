import React from 'react'
import { Button } from 'react-bootstrap' 
import "./PageNotFound.css";

function PageNotFound()
{
    return (
        <div className="hide-navbar">
            <h3 className="p-3">Page you are looking doesn't exist!</h3>
            <Button className="m-3" href="/home" variant="warning">Return Back</Button>

        </div>
    )
}

export default PageNotFound
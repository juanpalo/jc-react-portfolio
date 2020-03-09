import React from './node_modules/react';
import { Link } from "./node_modules/react-router-dom";

export default function() {
    return (
        <div>
            <h2>We couldn't find that page</h2>
            <Link to="/">Return to homepage</Link>
        </div>
    );
}
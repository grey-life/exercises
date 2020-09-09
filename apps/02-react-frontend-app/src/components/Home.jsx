import React from 'react';
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-3">Workshops App</h1>
                <p className="lead">your goto workshop app!</p>
                <hr className="my-2" />
                <p>Welcome to Workshops App here you can find various technical workshops.</p>
                <p className="lead">
                    <Link className="btn btn-primary btn-lg" to="/workshops" role="button">Checkout Workshops!</Link>
                </p>
            </div>
        </div>
    );
}

export default Home;

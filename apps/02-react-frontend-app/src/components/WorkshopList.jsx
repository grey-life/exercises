import React, { Component } from "react";
import { getWorkshops } from "../services/workshops";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import Alert from "./Alert";
import "./WorkshopsList.css";

class WorkshopList extends Component {
  state = {
    workshops: [],
    error: false,
    isLoading: true,
  };

  componentDidMount() {
    getWorkshops()
      .then((workshops) => {
        this.setState({
          isLoading: false,
          workshops,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          isLoading: false,
          error: error,
          workshops: [],
        });
      });
  }

  render() {
    const { isLoading, error, workshops } = this.state;
    return (
      <div className="container my-4">
        <h1>Workshops List</h1>
        <hr />
        {isLoading ? (
          <Alert
            theme="primary"
            message="Hang on! Workshops are being loaded!"
          />
        ) : (
          <div className="row">
            {workshops.map((workshop) => (
              <Link
                className="col-4 d-flex btn"
                to={`/workshops/${workshop.id}`}
                key={workshop.id}
                role="button"
              >
                <div className="card w-100 my-3 d-flex flex-column">
                  <div className="card-body">
                    <div className="card-img-container d-flex flex-column justify-content-center">
                      <img
                        className="card-img-top w-50 d-block mx-auto"
                        src={workshop.imageUrl}
                        alt={workshop.description}
                      />
                    </div>
                    <h4 className="card-title">{workshop.name}</h4>
                    <div className="card-text">
                      <div>
                        <Moment interval={0} format="MMM D YYYY">
                          {workshop.startDate}
                        </Moment>
                        {" - "}
                        <Moment interval={0} format="MMM D YYYY">
                          {workshop.endDate}
                        </Moment>
                      </div>
                      <div>
                        <span>{workshop.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
        {error && <Alert theme="danger" message={`Oops!${error.message}`} />}
      </div>
    );
  }
}

export default WorkshopList;

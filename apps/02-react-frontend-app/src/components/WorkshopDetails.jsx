import React, { Component } from "react";
import { getWorkshopsDetails } from "../services/workshops";
import Alert from './Alert';
import Moment from 'react-moment';
import "./WorkshopsList.css";

class WorkshopDetails extends Component {
  state = {
    workshop: null,
    error: false,
    isLoading: true,
  };

  componentDidMount() {
    const { match : { params : { id }} } = this.props;
    getWorkshopsDetails(id)
      .then((workshop) => {
        this.setState({
          isLoading: false,
          workshop,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          isLoading: false,
          error: error,
          workshop: [],
        });
      });
  }

  render() {
    const { isLoading, error, workshop } = this.state;
    return (
      <div className="container my-4">
        <h1>{workshop && workshop.name}</h1>
        <hr />
        {isLoading ? (
          <Alert 
            theme="primary" 
            message="Hang on! Workshop is being loaded!"
          />
        ) : (
          <div className="row my-4">
            <div className="col-4">
              <img
                className="img-fluid"
                src={workshop.imageUrl}
                alt={workshop.description}
              />
            </div>
            <div className="col-8">
              <div className="row">
                <div className="col-3">
                  <p>
                    <small>
                      <Moment interval={0} format="MMM D YYYY">
                        {workshop.startDate}
                      </Moment>
                      {" - "}
                      <Moment interval={0} format="MMM D YYYY">
                        {workshop.endDate}
                      </Moment>
                    </small>
                  </p>
                  <p>
                    <small className="text-muted">{workshop.time}</small>
                  </p>
                </div>
                <div className="col-3">
                  <p>
                    <small>Online</small>
                  </p>
                  <p>
                    <small>In person</small>
                  </p>
                </div>
              </div>
              <div className="row">
                <div
                  className="col-12"
                  dangerouslySetInnerHTML={{ __html: workshop.description }}
                ></div>
              </div>
            </div>
          </div>
        )}
        {error && (
          <Alert 
            theme="danger" 
            message={`Oops!${error.message}`}
          />
        )}
      </div>
    );
  }
}

export default WorkshopDetails;

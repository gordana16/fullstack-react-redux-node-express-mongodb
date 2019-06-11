import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRentals, fetchRental } from "../../actions";
import RentalDetailInfo from "./RentalDetailInfo";
import GoogleMap from "../map/GoogleMap";

class RentalDetail extends Component {
  constructor(props) {
    super(props);
    // this.state = { mapHeight: 0 };
    this.imgRef = React.createRef();
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchRental(id);
  }

  componentDidUpdate() {
    this.imgRef.current.addEventListener("load", this.setMapHeight);
  }

  setMapHeight = () => {
    //this.setState({ mapHeight: this.imgRef.current.clientHeight });
    this.forceUpdate();
  };

  render() {
    const { rental } = this.props;
    if (!rental) {
      return <div>Loading...</div>;
    }
    return (
      <div className="container" id="rentalDetails">
        <div className="upper-section">
          <div className="row">
            <div className="col-md-6">
              <img ref={this.imgRef} src={rental.image} alt="" />
            </div>
            <div className="col-md-6 ">
              <GoogleMap
                height={
                  this.imgRef.current ? this.imgRef.current.clientHeight : 0
                }
                address={`${rental.city}, ${rental.street}`}
              />
            </div>
          </div>
        </div>
        <div className="details-section">
          <div className="row">
            <div className="col-md-8">
              <RentalDetailInfo rental={rental} />
            </div>
            <div className="col-md-4"> BOOKING</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log("state", state);
  return { rental: state.rentals[ownProps.match.params.id] };
};
export default connect(
  mapStateToProps,
  { fetchRentals, fetchRental }
)(RentalDetail);

import Rating from "./Rating";

function DriverCard(props) {
    return (
        <div className="driver-card">
            <img src={props.img} alt="driverPhoto"></img>
            <div className="driver-info">
                <h1>{props.name}</h1>
                <Rating children={props.rating}/>
                <p>{props.car.model}-{props.car.licensePlate}</p>
            </div>
        </div>
    );
}

export default DriverCard;
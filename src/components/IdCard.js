function IdCard(props) {
    return (
        <div className="id-card">
            <img src={props.picture} alt="personPhoto"></img>
            <div className="info">
                <span><b>First Name: </b>{props.firstName}</span><br></br>
                <span><b>Last Name: </b>{props.lastName}</span><br></br>
                <span><b>Gender: </b>{props.gender}</span><br></br>
                <span><b>Height: </b>{props.height}</span><br></br>
                <span><b>Birth: </b>{props.birth.toString()}</span>
            </div>
        </div>
    );
}

export default IdCard;
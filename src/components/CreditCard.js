const visaDir = "../assets/images/visa.png";
const mcDir = "../assets/images/mastercard.png";


function CreditCard(props) {
    const bgColor = props.bgColor;
    const type = props.type;
    let logoSrc = "";
    if(type === "Visa") {
        logoSrc += "visa.png";
    }
    else {
        logoSrc += "mastercard.png";
    }

    const year = props.expirationYear % 100;
    const month = props.expirationMonth > 10 ? props.expirationMonth: "0" + props.expirationMonth;
    const expDate = month + "/" + year + "   ";
    const last4numbers = "•••• •••• •••• " + props.number.substring(12);
    return (
        <div className="credit-card" style={{
            backgroundColor: `${bgColor}`,
            color: `${props.color}`
        }}>
            <div className="logo">
                <img src={require(`../assets/images/${logoSrc}`)} alt="logo"></img>
            </div>

            <div className="card-number">
                {last4numbers}
            </div>

            <div className="card-info">
                <p>Expires {expDate}    {props.bank}</p>
                {/* <br></br> */}
                <p>{props.owner}</p>
            </div>

        </div>
    );
}

export default CreditCard;
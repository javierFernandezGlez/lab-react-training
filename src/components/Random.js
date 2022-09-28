function Random(props) {
    const min = props.min;
    const max = props.max;

    const rand = Math.floor(Math.random()*(max - min)) + min;

    const str = "Random value between " + min + " and " + max + " => " +rand;
    return (
        <div className="id-card">
            <h1>{str}</h1>
        </div>
    );
}

export default Random;
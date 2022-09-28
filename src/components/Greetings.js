function Greetings(props) {
    const dict = {
        "en": "Hello",
        "es": "Hola",
        "fr": "Bonjour",
        "de": "Hallo"
    }
    const name = props.name;
    const lang = props.lang;

    return (
        <div className="id-card">
            <h1>{dict[lang] + " " + name}</h1>
        </div>
    );
}

export default Greetings;
function Rating(props) {
    const blackStar = '★';
    const whiteStar = '☆';

    let rating = "";

    let num = Math.round(props.children);

    while(num > 0) {
        rating += blackStar;
        num--;
    }
    while(rating.length < 5) {
        rating += whiteStar;
    }

    return (
            <div className="rating">
                {rating}
                
            </div>
            
        
    );
}

export default Rating;
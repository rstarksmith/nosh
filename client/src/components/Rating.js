

const Rating = ({ visit }) => {

    const displayRating = () => {
      if (visit.rating === 1) {
        return <img className="stars" src="https://i.imgur.com/1NJld7L.png" alt="1 star rating" />
      } else if (visit.rating === 2) {
        return <img className="stars" src="https://i.imgur.com/TB943d1.png" alt="2 star rating" />
      } else if (visit.rating === 3) {
        return <img className="stars" src="https://i.imgur.com/B7MFpPz.png" alt="3 star rating" />
      } else {
        return <img className="stars" src="https://i.imgur.com/fE0b86U.png" alt="4 star rating" />
      }
    };

  return (
    <>{displayRating()}</>
  )
}

export default Rating


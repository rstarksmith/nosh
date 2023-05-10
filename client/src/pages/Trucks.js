

const FoodTrucks = () => {

  const fortWorth = () => {

  }

  const fetchTrucks = (e) => {
    e.preventDefault()
  }


  return (
    <div>
      <img
      src=""
      alt="fort worth"
      onClick={fetchTrucks}
        />
      
      <button>Dallas</button>
      <button>Austin</button>
      <button>Houston</button>
      <button>All</button>
      {/* filter by cuisine?
      maybe on page load display 10 random trucks? */}
    </div>
  );
}

export default FoodTrucks
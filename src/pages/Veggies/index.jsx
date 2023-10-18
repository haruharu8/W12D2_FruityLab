import {useState, useEffect} from 'react';
import axios from 'axios';

const Veggies = () => {

    // state (keep track of veggies)
    const [veggies, setVeggies] = useState([]);

    // useEffect ( to make request for vegggies)
    useEffect(() => {
        axios({
            method: "GET",
            url: "/server/veggies"
        }).then((res) => {
            setVeggies(res.data);
        })
    },[])

    
  return (
    <div>

    {/* map to show veggies state */}
    {veggies.map((veggie) => {
        return <div key={veggie._id}>{veggie.name}</div>
    })}
    </div>
  )
}

export default Veggies
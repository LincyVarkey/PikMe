import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerBodyUI from "./shimmer/ShimmerBodyUI";
import { DATA_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
    const [resList, setResList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchData, setSearchData] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(DATA_URL);
        const json = await data.json();
        setResList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return (
        <div className="body-container">
            <div className="filter">
                <div className="search-bar">
                    <input className="search" value={searchData} onChange={(e) => {
                        setSearchData(e.target.value);
                    }}/>
                    <button onClick={() => {
                        setFilteredList(resList.filter(x => x.info.name.toLowerCase().includes(searchData.toLowerCase())))
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    setFilteredList(resList.filter(x=> x.info.avgRating > 4))
                    setSearchData("");
                }}>Top Rated Restaurant</button>
            </div>
            {(filteredList.length !== 0) ? <div className="res-container">
                {filteredList.map((item) => 
                    (<Link to={"/restaurant/"+item.info.id}  key={item.info.id}><RestaurantCard data={item.info}/></Link>)
                 )}
            </div> : <ShimmerBodyUI/>}
        </div>
    )
}

export default Body;
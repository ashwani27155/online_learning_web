import React from "react";
import Data from './ServiceData'
const Service = () => {
    return (
        <>
            <div className="container">
                <div className="row col-md-7 mt-5">
                    {Data.map((ele, index) => {
                        return (
                            <div class="card" style={{ width: "18rem" }}>
                                <img class="card-img-top" src={ele.img} alt="Card image cap" />
                                <div class="card-body">
                                    <h5 class="card-title">{ele.titlle}</h5>
                                    <a href={ele.url} class="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
export default Service
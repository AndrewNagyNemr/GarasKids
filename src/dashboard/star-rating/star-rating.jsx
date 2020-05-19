import React, { Component } from "react";
import "./star-rating.css";

class StarRating extends Component {
  state = { rate: 5 };
  render() {
    return (
      <React.Fragment>
        {stars(this.props.rate).map(star=>star)}
      </React.Fragment>
    );
  }

}

const stars = (num)=>{
  let stars = []
  for(let i=0; i<num; i++){
    stars.push(<span  key={i} className="fa fa-star checked"></span>)
  }
  return stars
}

export default StarRating;

import React from "react";
import { Prices } from "./Prices";
import stars from '../assets/images/stars.jpg'

export const Description = ({ data }) => {

  console.log("D ", data);
  
  const {name, partNumber, prices} = data;
  console.log("D Prices ", prices);
  
	return (
		<div className="container-description flex-d-c">
			<div className="img-div" />
			<h1>{name}</h1>
			<small>
				<span className="sku">SKU: {partNumber}</span>
			</small>
			<div className="container-center-start">
				<img src={stars} alt="stars"/>
				<span>(2 Calificaciones)</span>
			</div>
			<p>Iphone prepago Wom</p>

      <Prices prices={prices} />
		</div>
	);
};

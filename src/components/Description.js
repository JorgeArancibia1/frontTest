import React from "react";
import stars from '../assets/images/stars.jpg'
import { Prices } from "./Prices";

export const Description = ({ description, prices }) => {

  const {name, partNumber} = description;
  
	return (
		<div className="container-description flex-d-c mb-2">
			<div className="img-div" />
			<h1 className="principal-title my-2">{name}</h1>
			<small>
				<span className="sku">SKU: {partNumber}</span>
			</small>
			<div className="container-center-start my-1">
				<img src={stars} alt="stars"/>
				<span className="calificaciones">(2 Calificaciones)</span>
			</div>
			<p className="mb-3">Iphone prepago Wom</p>
      <Prices prices={prices} />
		</div>
	);
};

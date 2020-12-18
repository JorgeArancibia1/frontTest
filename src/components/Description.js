import React from "react";
import { Prices } from "./Prices";

export const Description = ({ data }) => {

  console.log("D ", data);

  const {name, partNumber, prices} = data;

	return (
		<div className="container-description flex-d-c">
			<div className="img-div" />
			<h1>{name}</h1>
			<small>
				<span>SKU: {partNumber}</span>
			</small>
			<div>
				<div>Estrellas</div>
				<span>(2 Calificaciones)</span>
			</div>
			<p>Iphone prepago Wom</p>

      <Prices prices={prices} />
		</div>
	);
};

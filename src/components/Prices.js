import React from "react";

export const Prices = ({ prices }) => {

	const {
		formattedListPrice,
		formattedOfferPrice,
		formattedCardPrice,
		ripleyPuntos,
  } = prices;
  
	return (
		<div>
			<div className="container-between color-gray py-1 normal pr-1">
				<span>Normal</span>
				<span>
					<strike>{ formattedListPrice }</strike>
				</span>
			</div>
			<div className="container-between">
				<span className="strong color-gray py-1">Internet</span>
				<span className="color-gray strong pr-1">{ formattedOfferPrice }</span>
			</div>
			<div className="container-between py-2">
				<span className="color-red strong">Tarjeta Ripley</span>
				<span className="container-flex-center">
					<img
						className="ripley-image mr-1"
						src="//static.ripley.cl/images/opex.png"
						alt="Tarjeta ripley"
					/>
					<span className="color-red strong pr-1"> { formattedCardPrice } </span>
				</span>
			</div>
			<div className="container-between background-points py-2 pl-2">
				<span>Con tarjeta Ripley acumulas</span>
				<div>
					<span className="strong mx-1">{ ripleyPuntos }</span>
					<span className="pr-1">RipleyPuntos GO</span>
				</div>
			</div>
		</div>
	);
};

import React from "react";

export const Prices = ({ prices }) => {
	console.log("P ", prices);

	const {
		formattedListPrice,
		formattedOfferPrice,
		formattedCardPrice,
		ripleyPuntos,
	} = prices;

	return (
		<div>
			<div className="container-between">
				<span>Normal</span>
				<span>
					<strike>{ formattedListPrice }</strike>
				</span>
			</div>
			<div className="container-between">
				<span>Internet</span>
				<span className="color-gray strong">{ formattedOfferPrice }</span>
			</div>
			<div className="container-between ">
				<span className="color-red strong">Tarjeta Ripley</span>
				<span className="container-flex-center">
					<img
						className="ripley-image"
						src="//static.ripley.cl/images/opex.png"
						alt="Tarjeta ripley"
					/>
					<span className="color-red strong"> { formattedCardPrice } </span>
				</span>
			</div>
			<div className="container-between">
				<span>Con tarjeta Ripley acumulas</span>
				<div>
					<span className="strong">{ ripleyPuntos }</span>
					<span>RipleyPuntos GO</span>
				</div>
			</div>
		</div>
	);
};

import React from "react";

export const Prices = (prices) => {
	console.log("P ", prices);

	const {
		formattedListPrice,
		formattedOfferPrice,
		formattedCardPrice,
		ripleyPuntos,
	} = prices;

	return (
		<div>
			<div>
				<span>Normal</span>
				<span>
					<strike>{formattedListPrice}</strike>
				</span>
			</div>
			<div>
				<span>Internet</span>
				<span>{formattedOfferPrice}</span>
			</div>
			<div>
				<span>Tarjeta Ripley</span>
				<span>
					<img src="" alt="Tarjeta ripley" />
					{formattedCardPrice}
				</span>
			</div>
			<div>
				<img src="" alt="Icono de estrella" />
				<span>Con tarjeta Ripley acumulas</span>
				<span>{ripleyPuntos}</span>
				<span>RipleyPuntos GO</span>
			</div>
		</div>
	);
};

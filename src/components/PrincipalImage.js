import React from "react";

export const PrincipalImage = ({ fullImage="" }) => {

  console.log("Recive", fullImage);

	return (
		<div className="container-image">
			<img className="principal-image" src={ fullImage } alt="Cellphone" />
		</div>
	);
};
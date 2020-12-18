import React from "react";

export const SideImages = ({images}) => {

	console.log("images", images)

	return (
		<ul className="container-list">
			{images.map((i) => {
				return (
					<li className="container-image-side">
						<img className="image" src={i} alt="cellphone" key={i} />
					</li>
				);
			})}
		</ul>
	);
};


//Agregar proptypes y default props.
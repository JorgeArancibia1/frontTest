import React from "react";

export const SideImages = ({images}) => {

	console.log("images", images)

	return (
		<ul className="container-list pt-4">
			{images.map((i) => {
				return (
					<li className="container-image-side mb-1">
						<img className="image" src={i} alt="cellphone" key={i} />
					</li>
				);
			})}
		</ul>
	);
};


//Proptypes y default props.
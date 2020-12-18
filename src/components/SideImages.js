import React from "react";

export const SideImages = ({images}) => {

	return (
		<ul className="container-list pt-4">
			{images.map((i,index) => {
				return (
					<li className="container-image-side mb-1">
						<img className="image" src={i} alt="cellphone" key={index} />
					</li>
				);
			})}
		</ul>
	);
};


//Proptypes y default props.
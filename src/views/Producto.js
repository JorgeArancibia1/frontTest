import React from "react";
import { PrincipalImage } from "../components/PrincipalImage";
import { RightSide } from "../components/RightSide";
import { SideImages } from "../components/SideImages";
import { useFetch } from "../hooks/useFetch";

export const Producto = () => {

	const { info, loading } = useFetch();
	
	console.log(info)
  
  const { images, fullImage, description, prices, warranties } = info;

	return images ? (

		<div className="general-container container-center-up">
      {loading&& <div>Loading</div>}
			<SideImages images={images} />
			<PrincipalImage fullImage={fullImage} />
			<RightSide description={description} prices={prices} warranties={warranties} />
		</div>
	): <p>ERROR INTENTE NUEVAMENTE</p>;
};

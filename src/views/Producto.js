import React from "react";
import { PrincipalImage } from "../components/PrincipalImage";
import { RightSide } from "../components/RightSide";
import { SideImages } from "../components/SideImages";
import { useFetch } from "../hooks/useFetch";

export const Producto = () => {

  const { info, loading } = useFetch();
  
  const { images, fullImage, description, prices, warranties } = info;

  console.log("i",images);
  console.log("f",fullImage);
  console.log("d",description);
  console.log("w",warranties);

	return (
		<div className="general-container container-center-up">
      {loading&& <div>Loading</div>}
			<SideImages images={images} />
			<PrincipalImage fullImage={fullImage} />
			<RightSide description={description} prices={prices} warranties={warranties} />
		</div>
	);
};

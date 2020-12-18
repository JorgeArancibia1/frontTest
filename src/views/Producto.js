import React from "react";
import { PrincipalImage } from "../components/PrincipalImage";
import { RightSide } from "../components/RightSide";
import { SideImages } from "../components/SideImages";
import { useFetch } from "../hooks/useFetch";

export const Producto = () => {
	let imagesList = "";
	let fullImage = "";
	let description = "";

  const { info, loading } = useFetch();
  
  console.log(info);

	if (!loading) {
    imagesList = info.data[0].images;
		fullImage = info.data[0].fullImage;
		description = info.data[0];
	}

	return (
		<div className="general-container container-center-up">
      {loading&& <div>Loading</div>}
			{/* <SideImages images={imagesList} /> */}
			<PrincipalImage fullImage={fullImage} />
			<RightSide description={description} />
		</div>
	);
};

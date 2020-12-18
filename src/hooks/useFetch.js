import { useEffect, useState } from "react";
import { getInfo } from "../helpers/getInfo";

export const useFetch = () => {
	const [stateInfo, setStateInfo] = useState({
		info: {
			images: [],
			fullImage: "",
      description: {},
      prices: {},
      warranties: {}
		},
		loading: true,
	});

	useEffect(() => {
		const fetch = async () => {
			const {images,fullImage,description,prices,warranties} = await getInfo();

			setStateInfo({
				info: {
					images: images,
					fullImage: fullImage,
          description: description,
          prices: prices,
          warranties: warranties
				},
				loading: false,
			});
		};
		fetch();
	}, []);

	return stateInfo;
};

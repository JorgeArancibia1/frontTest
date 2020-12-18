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
			const info = await getInfo();
			setStateInfo({
				info: {
					images: info.data[0].images,
					fullImage: info.data[0].fullImage,
          description: info.data[0],
          prices: info.data[0].prices,
          warranties: info.data[0].warranties[0].Price[0]
				},
				loading: false,
			});
		};
		fetch();
	}, []);

	return stateInfo;
};

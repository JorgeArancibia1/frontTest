import { useEffect, useState } from "react";
import { getInfo } from "../helpers/getInfo";

export const useFetch = () => {
	const [stateInfo, setStateInfo] = useState({
		info: {
			images: [],
			fullImage: "",
			description: {},
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
				},
				loading: false,
			});
		};
		fetch();
	}, []);

	return stateInfo;
};

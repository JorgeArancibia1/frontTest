
export const getInfo = async () => {
	try {
		console.log(process.env.REACT_APP_ENVIRONMENT);

		const url = `${process.env.REACT_APP_ENVIRONMENT}api/products`;
		const response = await fetch(url);
		const data = await response.json();

		return data;
	} catch (error) {
		console.log(error);
	}
};

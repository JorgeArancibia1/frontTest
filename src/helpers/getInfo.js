const environment = {
  dev: "http://localhost:4000/",
  prod: "https://back-ripley.herokuapp.com/",
};

export const getInfo = async () => {
	
	const HOST = environment.dev;

	const url = `${HOST}api/productos`;
	const response = await fetch(url);
	const data = await response.json();

	// const result = data.map(object => object)

	return data;
};

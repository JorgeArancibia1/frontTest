export const getInfo = async () => {
  const url = `http://localhost:4000/api/productos`
  const response = await fetch(url);
  const data = await response.json();

  // const result = data.map(object => object)
  console.log(data)

  return data
}
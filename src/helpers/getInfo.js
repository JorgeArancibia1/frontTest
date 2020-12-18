export const getInfo = async () => {
  const url = `${process.env.ENVIRONMENT}/api/productos`
  const response = await fetch(url);
  const data = await response.json();

  // const result = data.map(object => object)

  return data
}
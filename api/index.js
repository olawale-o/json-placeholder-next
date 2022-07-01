export const get = async (endpoint) => {
  const res = await fetch('https://jsonplaceholder.typicode.com'+endpoint);
  const data = await res.json();
  return data;
};

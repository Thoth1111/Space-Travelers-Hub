const url = 'https://api.spacexdata.com/v3/rockets';

const getRocketApi = async () => {
  const data = await fetch(`${url}`)
    .then((response) => response.json());
  return data;
};

export default getRocketApi;

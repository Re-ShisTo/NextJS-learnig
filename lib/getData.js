import wait from "./wait";

const getData = async (url, options = {}, latency = 0) => {
  if (latency > 0) {
    await wait(latency);
  }

  const res = await fetch(url, options);
  return await res.json();
};

export default getData;

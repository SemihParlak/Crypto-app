export const fetchData = () => {
    return fetch(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest", {
      method: "GET",
      headers: {
        "X-CMC_PRO_API_KEY": "2feb4f81-4a12-4971-96f5-d4890c02179e",
      },
    }
    );
  };
  
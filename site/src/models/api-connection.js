export const api_config = {
  url: "https://api-pokemon.nova-work.cloud/api",
  get: function (url) {
    return new Promise((resolve, reject) => {
      fetch(api_config.url + url)
        .then((e) => e.json())
        .then((e) => {
          resolve(e);
        });
    });
  },
};

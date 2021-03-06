export const helpHttp = () => {
  const custoFetch = (endpoint, options) => {
    const defaultHeader = {
      accept: "application/json",
    };
    const controller = new AbortController();
    options.signal = controller.signal;
    options.method = options.method || "GET";
    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    options.body = JSON.stringify(options.body) || false;
    if (!options.body) delete options.body;

    //console.log(options);

    setTimeout(() => controller.abort(), 5000);

    return fetch(endpoint, options)
      .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "ocurrio un error",
            })
      )
      .catch((err) => err);
  };

  const get = (url, options = {}) => custoFetch(url, options);
  const post = (url, options = {}) => {
    options.method = "POST";
    return custoFetch(url, options);
  };
  const put = (url, options = {}) => {
    options.method = "PUT";
    return custoFetch(url, options);
  };
  const del = (url, options = {}) => {
    options.method = "DELETE";
    return custoFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};

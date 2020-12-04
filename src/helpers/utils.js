export function fetchData(baseURL, params = {}) {
  let url = baseURL
  const urlParams = []

  for (const key in params) {
    urlParams.push(key + '=' + params[key])
  }

  if (urlParams.length > 0) {
    url += '?' + urlParams.join('&')
  }

  return fetch(url).then((res) => res.json())
}

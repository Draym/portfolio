let HttpUtils = function () {

    function stringifyParameters(parameters) {
        let result = '';

        for (let i in parameters) {
            if (result !== '')
                result += '&';
            result += i + '=' + parameters[i];
        }
        result = (result === '' ? result : '?' + result);
        return result;
    }

    function createApiUrl(domainUrl, api, urlParameters) {
        return (domainUrl ? domainUrl : '') + api + (urlParameters ? urlParameters : '');
    }

    function triggerResultCallback(data, response, cbSuccess, cbError) {
        const status = response.status;

        if (status === 200) {
            console.log("[SUCCESS]-->", data);
            cbSuccess(data);
        } else {
            console.log("[ERROR]-->", data);
            cbError(status, (data.message ? data.message : data));
        }
    }

    function handleHttpResultRedirect(response) {
        console.log("Try Redirect to ", response.url);
        let url = response.url;

        /** ONLY REDIRECT ON LOGIN **/
        if (url.indexOf("/api/login") >= 0 && url.indexOf("?logout") === -1) {
            console.log("Redirect done to ", url.replace("/api", "/auth"));
            window.location.href = url.replace("/api", "/auth");
        }
    }

    function handleHttpResult(response, cbSuccess, cbError) {
        console.log("[HTTP]", response);
        if (response.redirected || response.status === 302) {
            handleHttpResultRedirect(response);
        }
        if (response.status === 401) {
            //LoginRedirect();
        }
        response.text().then(function (text) {
            try {
                triggerResultCallback(JSON.parse(text), response, cbSuccess, cbError);
            } catch (err) {
                triggerResultCallback(text, response, cbSuccess, cbError);
            }
        });
    }

    function httpURL(type, url, api, headers, parameters, cbSuccess, cbError) {
        if (!headers)
            headers = {};
        /*
        if (UserSession.hasSession()) {
          let session = UserSession.getSession();
          if (session.token)
            headers.Authorization = session.token.token;
        }*/
        let urlParameters = stringifyParameters(parameters);
        console.log("[API_" + type + "]", createApiUrl(url, api, urlParameters));
        fetch(createApiUrl(url, api, urlParameters), {
            method: type,
            headers: headers,
            credentials: 'include'
        }).then(response => {
            handleHttpResult(response, cbSuccess, cbError);
        }).catch(error => {
            console.log("[FAIL]-->", error);
            cbError(-1, error.message);
        });
    }

    function httpData(type, url, api, headers, data, cbSuccess, cbError) {
        if (!headers)
            headers = {};
        /*if (UserSession.hasSession()) {
          let session = UserSession.getSession();
          if (session.token)
            headers.Authorization = session.token.token;
        }*/
        console.log("[API_" + type + "]", createApiUrl(url, api), data);
        fetch(createApiUrl(url, api), {
            method: type,
            headers: headers,
            credentials: 'include',
            body: data
        }).then(response => {
            handleHttpResult(response, cbSuccess, cbError);
        }).catch(error => {
            console.log("[FAIL]-->", error);
            cbError(-1, error.message);
        });
    }

    return ({
        GET: function (url, api, headers, parameters, cbSuccess, cbError) {
            if (headers == null) {
                headers = {};
            }
            //headers['Accept'] = 'text/plain';
            headers['Access-Control-Allow-Origin'] = '*';
            httpURL('GET', url, api, headers, parameters, cbSuccess, cbError);
        },
        POST: function (url, api, headers, data, cbSuccess, cbError) {
            if (headers == null) {
                headers = {};
            }
            headers['Content-Type'] = 'application/json';
            headers['Accept'] = 'application/json';
            httpData('POST', url, api, headers, JSON.stringify(data), cbSuccess, cbError);
        },
        PUT: function (url, api, headers, data, cbSuccess, cbError) {
            if (headers == null) {
                headers = {};
            }
            headers['Content-Type'] = 'application/json';
            headers['Accept'] = 'application/json';
            httpData('PUT', url, api, headers, JSON.stringify(data), cbSuccess, cbError);
        },
        DELETE: function (url, api, headers, data, cbSuccess, cbError) {
            if (headers == null) {
                headers = {};
            }
            headers['Content-Type'] = 'application/json';
            headers['Accept'] = 'application/json';
            httpData('DELETE', url, api, headers, JSON.stringify(data), cbSuccess, cbError);
        },
        FORM_DATA: function (url, api, headers, data, cbSuccess, cbError) {
            if (headers == null) {
                headers = {};
            }
            //headers['Content-Type'] = 'multipart/form-data';
            let formData = new FormData();

            for (let key in data) {
                formData.append(key, data[key]);
            }
            const final = new URLSearchParams();
            for (const pair of formData) {
                final.append(pair[0], pair[1]);
            }
            console.log("Form: ", final);
            httpData('POST', url, api, headers, final, cbSuccess, cbError);
        },
    });
};

export default HttpUtils();

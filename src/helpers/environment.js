let APIURL = '';

switch (window.location.hostname) {
    //local host name
    case 'localhost' || '127.0.0.1':
        //name of local host of API 
        APIURL = 'http://localhost:3002'
        break;
    case 'ac-smashindy-client.herokuapp.com':
        APIURL = 'https://ac-smashindy-server.herokuapp.com'
}

export default APIURL;
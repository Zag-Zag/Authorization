
class  RestClient{
  static SentLoginUserToServer(userLogin, callback){
    let http = new XMLHttpRequest();
    http.open('POST', `${Parametrs.urlProxy}?${Parametrs.paramName}=${Parametrs.urlServise}`, true);
console.log(`${Parametrs.urlProxy}?${Parametrs.paramName}=${Parametrs.urlServise}`);
console.log(`func=Login&${userLogin.GetParametrsUser()}&IPs=`)

    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    http.onreadystatechange = function() {
      if(http.readyState == 4) {
        callback(http.status, http.responseText);
      }
    }
    http.send(`func=Login&params=${escape(userLogin.GetParametrsUser())}&IPs=`);
  }
}
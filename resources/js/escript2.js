FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
    statusChangeCallback(response);
    let emailConteudo = document.querySelector("#emailConteudo");
    emailConteudoa.value = response.authResponse.accessToken

    console.log(response.authResponse.accessToken);
  }
});



FB.api('/me', function(response) {
    console.log(JSON.stringify(response));
});

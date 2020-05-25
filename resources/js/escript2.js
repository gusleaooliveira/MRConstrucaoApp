var GoogleAuth; // Google Auth object.
function initClient() {
  gapi.client.init({
      'apiKey': 'sZdTd7Lbt3IISTgmSywhUnFy',
      'clientId': '210508964405-t2dach91maf7p6jn6jdgv57vtpljq3se.apps.googleusercontent.com',
      'scope': 'https://www.googleapis.com/auth/drive.metadata.readonly',
      'discoveryDocs': ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest']
  }).then(function () {
      GoogleAuth = gapi.auth2.getAuthInstance();

      // Listen for sign-in state changes.
      GoogleAuth.isSignedIn.listen(updateSigninStatus);
  });
}

var isAuthorized;
var currentApiRequest;

/**
 * Store the request details. Then check to determine whether the user
 * has authorized the application.
 *   - If the user has granted access, make the API request.
 *   - If the user has not granted access, initiate the sign-in flow.
 */
function sendAuthorizedApiRequest(requestDetails) {
  currentApiRequest = requestDetails;
  if (isAuthorized) {
    // Make API request
    // gapi.client.request(requestDetails)

    // Reset currentApiRequest variable.
    currentApiRequest = {};
  } else {
    GoogleAuth.signIn();
  }
}

/**
 * Listener called when user completes auth flow. If the currentApiRequest
 * variable is set, then the user was prompted to authorize the application
 * before the request executed. In that case, proceed with that API request.
 */
function updateSigninStatus(isSignedIn) {
  if (isSignedIn) {
    isAuthorized = true;
    if (currentApiRequest) {
      sendAuthorizedApiRequest(currentApiRequest);
    }
  } else {
    isAuthorized = false;
  }
}

// Example 1: Use method-specific function
var request = gapi.client.drive.about.get({'fields': 'user'});

// Execute the API request.
request.execute(function(response) {
  console.log(response);
});


// Example 2: Use gapi.client.request(args) function
var request = gapi.client.request({
  'method': 'GET',
  'path': '/drive/v3/about',
  'params': {'fields': 'user'}
});
// Execute the API request.
request.execute(function(response) {
  console.log(response);
});

var GoogleAuth;
 var SCOPE = 'https://www.googleapis.com/auth/drive.metadata.readonly';
 function handleClientLoad() {
   // Load the API's client and auth2 modules.
   // Call the initClient function after the modules load.
   gapi.load('client:auth2', initClient);
 }

 function initClient() {
   // Retrieve the discovery document for version 3 of Google Drive API.
   // In practice, your app can retrieve one or more discovery documents.
   var discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';

   // Initialize the gapi.client object, which app uses to make API requests.
   // Get API key and client ID from API Console.
   // 'scope' field specifies space-delimited list of access scopes.
   gapi.client.init({
       'apiKey': 'YOUR_API_KEY',
       'clientId': 'YOUR_CLIENT_ID',
       'discoveryDocs': [discoveryUrl],
       'scope': SCOPE
   }).then(function () {
     GoogleAuth = gapi.auth2.getAuthInstance();

     // Listen for sign-in state changes.
     GoogleAuth.isSignedIn.listen(updateSigninStatus);

     // Handle initial sign-in state. (Determine if user is already signed in.)
     var user = GoogleAuth.currentUser.get();
     setSigninStatus();

     // Call handleAuthClick function when user clicks on
     //      "Sign In/Authorize" button.
     $('#sign-in-or-out-button').click(function() {
       handleAuthClick();
     });
     $('#revoke-access-button').click(function() {
       revokeAccess();
     });
   });
 }

 function handleAuthClick() {
   if (GoogleAuth.isSignedIn.get()) {
     // User is authorized and has clicked "Sign out" button.
     GoogleAuth.signOut();
   } else {
     // User is not signed in. Start Google auth flow.
     GoogleAuth.signIn();
   }
 }

 function revokeAccess() {
   GoogleAuth.disconnect();
 }

 function setSigninStatus(isSignedIn) {
   var user = GoogleAuth.currentUser.get();
   var isAuthorized = user.hasGrantedScopes(SCOPE);
   if (isAuthorized) {
     $('#sign-in-or-out-button').html('Sign out');
     $('#revoke-access-button').css('display', 'inline-block');
     $('#auth-status').html('You are currently signed in and have granted ' +
         'access to this app.');
   } else {
     $('#sign-in-or-out-button').html('Sign In/Authorize');
     $('#revoke-access-button').css('display', 'none');
     $('#auth-status').html('You have not authorized this app or you are ' +
         'signed out.');
   }
 }

 function updateSigninStatus(isSignedIn) {
   setSigninStatus();
 }
</script>

<button id="sign-in-or-out-button"
       style="margin-left: 25px">Sign In/Authorize</button>
<button id="revoke-access-button"
       style="display: none; margin-left: 25px">Revoke access</button>

<div id="auth-status" style="display: inline; padding-left: 25px"></div><hr>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
<script async defer src="https://apis.google.com/js/api.js"
       onload="this.onload=function(){};handleClientLoad()"
       onreadystatechange="if (this.readyState === 'complete') this.onload()">
</script>

// Space-separated list of additional scope(s) you are requesting access to.
// This code adds read-only access to the user's calendars via the Calendar API.
var NEW_SCOPES = 'https://www.googleapis.com/auth/calendar.readonly';

// Retrieve the GoogleUser object for the current user.
var GoogleUser = GoogleAuth.currentUser.get();
GoogleUser.grant({'scope': NEW_SCOPES});

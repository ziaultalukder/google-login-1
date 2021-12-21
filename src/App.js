import './App.css';
import Login from './components/Login/Login';
function App() {
  return (
    <div className="App">
      <Login />
      {/* <div class="g-signin2" data-onsuccess="onSignIn"></div> */}
      {/* {
        function onSignIn(googleUser) {
          var profile = googleUser.getBasicProfile();
          console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
          console.log('Name: ' + profile.getName());
          console.log('Image URL: ' + profile.getImageUrl());
          console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
        }
      } */}

    {/* <a href="#" onclick="signOut();">Sign out</a> */}
    {/* {
      function signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
          console.log('User signed out.');
        });
      }
    } */}
    </div>

  );
}

export default App;

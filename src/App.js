import React from 'react';
import ProfilComponent from './profil/profilComponent';


function App() {
  return (
    <div className="App">
      <ProfilComponent fullName='Mame Bou FALL'
      bio='Etudiant en Master Maths à l UCAD'
      profession='Developpeur WEB'
      myimage='https://scontent.fdkr6-1.fna.fbcdn.net/v/t39.30808-6/226976920_4191300850964360_1128260432838309175_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=lVKJ8VZM4nsAX95Ui6m&_nc_pt=1&_nc_ht=scontent.fdkr6-1.fna&oh=00_AT_hO_KwUcxa3NSyKMNx-x3T9kbQ9irk66aDRD8KJ7cDhQ&oe=622B4C90'
      handleName={()=>alert('Mame Bou FALL')}/>
    </div>
  );
}
export default App;


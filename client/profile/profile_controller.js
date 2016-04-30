app.controller('ProfileController', ['$routeParams' , 'Profile', '$rootScope', function($routeParams, Profile, $rootScope) {
  let ProfileCtrl = this;

  let sampleuser =
            {
        uid:0,
        name: 'Donor',
        email: 'Donor@gmail.com',
        photo: 'http://www.who.int/campaigns/world-blood-donor-day/2013/promotional/tshirt_red_logo1.jpg?ua=1',
        lat: 'HackReactor, Sanfransisco',
        long: '',
        bloodtype: 'O+'
      };
 

  ProfileCtrl.user = {
    uid:'',
    name: '',
    email: '',
    photo:'',
    lat: '',
    long:'',
    bloodtype: ''
  };

  ProfileCtrl.edit = true;
  ProfileCtrl.Edit = function() {
    ProfileCtrl.edit = !ProfileCtrl.edit;
  };
 

  ProfileCtrl.updateUser = () => {
    // console.log('updateUser', ProfileCtrl.user);
    // sampleuser.push(ProfileCtrl.user);
    // console.log(sampleuser);
    Profile.updateUser(ProfileCtrl.user)
      .then((profile) => {
        ProfileCtrl.user = profile;
      })
      .catch((error) =>{
        console.error(error);
      });
  };


   let displayUser = function () {

    ProfileCtrl.user = sampleuser;
    // Profile.getUser()

    // .then(function (user) {
    //   // ProfileCtrl.user = user;
    //   console.log(ProfileCtrl.user);

    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  };

  displayUser();
  
}]);
/**
 * Created by obdark on 6/3/16.
 */
 app = angular.module('myApp', ['ngRoute']);
//define constants
 app.constant('config',{
   CLIENT_ID:  'dqLWBDS924bAKf0elB',
   CLIENT_SECRET: 'aefxrpHksbgyzm4dyxoVcRyjJDcEoKjKchPP',
   CREATE_URL: 'http://more-gold.com/user-api/public/index.php/api/account/create-user',
     AUTH_URL: 'http://more-gold.com/user-api/public/index.php/api/auth/request-access'
     
 });


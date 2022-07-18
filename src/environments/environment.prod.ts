import {AuthMode} from 'src/app/auth/auth.enum';

export const environment = {
  production: true,
  authMode: AuthMode.Firebase,
  firebase: {
    projectId: 'lemon-mart-acfdc',
    appId: '1:259217364074:web:df3cede7853dc919a3a613',
    storageBucket: 'lemon-mart-acfdc.appspot.com',
    apiKey: 'AIzaSyCmMxIGA8sl--Y0B6K_-d-bp32PrQ7vGGQ',
    databaseURL: '',
    authDomain: 'lemon-mart-acfdc.firebaseapp.com',
    messagingSenderId: '259217364074',
    measurementId: 'G-MBXC7500MV',
  },
}

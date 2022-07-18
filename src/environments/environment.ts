// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import {AuthMode} from '../app/auth/auth.enum'

export const environment = {
  production: false,
  authMode: AuthMode.InMemory,
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

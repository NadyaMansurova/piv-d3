/*globals require*/
require.config({
    waitSeconds: 20,

    paths: {
        'angular': '../vendors/angular/angular',
        'angular-route': '../vendors/angular/angular-route',
        'angular-resource': '../vendors/angular/angular-resource',

        'bootstrap': '../vendors/bootstrap/bootstrap',

        'angular-strap': '../vendors/angular-strap/angular-strap',

        'jquery': '../vendors/jquery/jquery',

        'underscore': '../vendors/underscore/underscore',

        'app': '../app/modules/app'
    },

    shim: {
        'angular': {
            deps: ['jquery'],
            exports: 'angular'
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'angular-resource': {
            deps: ['angular']
        },
        'angular-strap': {
            deps: ['angular']
        },
        'angular-strap-tpl': {
            deps: ['angular-strap']
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'jquery-ui-custom': {
            deps: ['jquery']
        }
    }
});
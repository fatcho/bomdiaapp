(function() {
    
    "use strict";
    
    angular.module("myApp").config(function($stateProvider, $urlRouterProvider){
       
            $urlRouterProvider.otherwise('/menu/home');
            
            $stateProvider

            .state('menu', {
            url: '/menu',
            abstract: true,
            templateUrl: 'views/menu.html',
            controller: 'initCtrl'
          })
        
          .state('menu.home', {
            url: '/home',
            views: {
              'menuContent': {
                templateUrl: 'views/home.html'
              }
            }
          })
          
            .state("menu.single", {
      			url:"/single",
      			views:{
      				'menuContent':{
      					templateUrl:"views/single.html",
  				}
  			}
      })
      
       .state("menu.artigos", {
      			url:"/artigos",
      			views:{
      				'menuContent':{
      					templateUrl:"views/artigos.html",
  				}
  			}
      })
      
      .state("menu.single-article", {
      			url:"/single-article",
      			views:{
      				'menuContent':{
      					templateUrl:"views/single-article.html",
  				}
  			}
      })
      
       .state("menu.cursos", {
      			url:"/cursos",
      			views:{
      				'menuContent':{
      					templateUrl:"views/cursos.html",
  				}
  			}
      })
            
          
          .state('menu.contato', {
            url: '/contato',
            views: {
              'menuContent': {
                templateUrl: 'views/contato.html'
              }
            }
          });

        
    });
    
})();
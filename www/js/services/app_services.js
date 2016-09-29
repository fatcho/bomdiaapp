(function() {
    
    "use strict";
    
    angular.module("myApp").value("Config", {
        
        getUrl: "https://www.bomdia.adv.br/api/"
    })
    
    //SERVICE NEWS
    angular.module("myApp").service("Data", function($http, Config){
        this.getData = function(params){
            
            return $http({
                    method:"POST",
                    url:Config.getUrl + "news",
                    data: $.param(params),
                    headers: {
				                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                            }
                    
                    });
        }
        
    });
    
    //SERVICE ARTICLES
    angular.module("myApp").service("DataArticles", function($http, Config){
        this.getDataArticles = function(params){
            
            return $http({
                    method:"POST",
                    url:Config.getUrl + "articles",
                    data: $.param(params),
                    headers: {
				                'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
                            }
                    
                    });
        }
        
    });
       

    
    })();
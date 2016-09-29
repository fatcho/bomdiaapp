(function() {
    
    "use strict";
    
    angular.module("myApp").controller("initCtrl", function($scope, Data, DataArticles, $location, $ionicFilterBar, $timeout, $ionicScrollDelegate){
        
        
        
            $scope.home ="Home"; 
            $scope.contato ="Contato";
            $scope.single ="Notícias";
            $scope.artigos ="Artigos";
            $scope.cursos ="Cursos";
            $scope.paginacao = true;
            $scope.paginacaoArticles = true;
            
            $scope.noticias = [];
            $scope.articles = [];
            
            $scope.loadMore = function(){
                
                var params = {
                    counter:$scope.noticias.length,
                    token:'146a7492719b3564094efe7abbd40a7416fd900179d02773'
                };
                
                Data.getData(params).success(function(data){
                    
                        if (data.length!=0){
                            
                            angular.forEach(data, function(result){
                                $scope.noticias.push(result);
                            });
                            
                            $scope.paginacao=true;
                            
                        } else {
                            $scope.paginacao=false;
                        }
                        
                         $scope.$broadcast('scroll.infiniteScrollComplete');
                
                });
                
                
            }
            
            var getData = function(){
                
                var params = {
                    counter:$scope.noticias.length,
                    token:'146a7492719b3564094efe7abbd40a7416fd900179d02773'
                };
                
                Data.getData(params).success(function(data){
                        $scope.noticias = data;
                    }).error(function(data){
                        console.log(data? data : "Não foi possivel acessar o servidor");
                });
            };
            
            getData();
            
            //INICIO BUSCA DE NOTICIAS
            var filterBar;
            
            $scope.showFilterBar = function () {
                
                 filterBar = $ionicFilterBar.show({
                  items: $scope.noticias,
                  update: function (filteredItems) {
                    $scope.noticias = filteredItems;
                    if (filteredItems) {
                        console.log(filteredItems);
                    }
                  },
                  filterProperties : ['texto']
                });
            }
            
             $scope.refreshItems = function () {
                  if (filterBar) {
                    filterBar();
                    filterBar = null;
                 }
                 
                 $timeout(function () {
                    getData();
                    $scope.$broadcast('scroll.refreshComplete');
                }, 1000);
             };
             //FIM BUSCA DE NOTICIAS
            
            // IMPRIMINDO A NOTICIA
		    $scope.noticiaUnica = function(id) {
		        $ionicScrollDelegate.resize();
			$scope.singleNoticia = $scope.noticias.filter(function(element) {
				return element.id == id;
			});
			
			//console.log($scope.singleNoticia);
			$location.path("/menu/single");
			
            };
            
            
            
            
            //GET ARTICLES
            var getDataArticles = function(){
                
                var params = {
                    counter:$scope.articles.length,
                    token:'146a7492719b3564094efe7abbd40a7416fd900179d02773'
                };
                
                DataArticles.getDataArticles(params).success(function(data){
                        $scope.articles = data;
                    }).error(function(data){
                        console.log(data? data : "Não foi possivel acessar o servidor");
                });
            };
            
            getDataArticles();
            
            
            //PAGINATION MORE ARTICLES
            $scope.loadMoreArticles = function(){
                
                var params = {
                    counter:$scope.articles.length,
                    token:'146a7492719b3564094efe7abbd40a7416fd900179d02773'
                };
                
                DataArticles.getDataArticles(params).success(function(data){
                    
                        if (data.length!=0){
                            
                            angular.forEach(data, function(result){
                                $scope.articles.push(result);
                            });
                            
                            $scope.paginacaoArticles=true;
                            
                        } else {
                            $scope.paginacaoArticles=false;
                        }
                        
                         $scope.$broadcast('scroll.infiniteScrollComplete');
                
                });
                
            }
            
            // PRINT ARTICLE
		    $scope.articleUnico = function(id) {
			$scope.singleArticle = $scope.articles.filter(function(element) {
				return element.id == id;
			});
			//console.log($scope.singleArticle);
			$location.path("/menu/single-article");
            };
            
            
            $scope.refreshArticles = function () {
                 
                    getDataArticles();
                    
                    $scope.$broadcast('scroll.refreshComplete');
                
             };
            
            
        
        });
        
      
    
    })();

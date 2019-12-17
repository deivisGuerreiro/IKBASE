angular.module('ikbaseApp').factory('usuarioService', function($http){
    return ({
        getDados: getDados,
        getPostagens: getPostagens
    });

    function getDados(){
        return $http.get('caminho');
    }

    function getPostagens(){
        return $http.get('caminho');
    }


});
angular.module('ikbaseApp').factory('cadastroUsuario', function($http){
    return ({
        cadastrarUsuario: cadastrarUsuario
    });

    function cadastrarUsuario(usuario){
        return $http.post('localhost:8080/create/user/' + usuario);
    }

    function pegaUsuario(usuario){
        return $http.get('localhost:8080/get/user/:id' + usuario);
    }

    function deletaUsuario(usuario){
        return $http.get('localhost:8080/get/user/:id' + usuario);
    }


});
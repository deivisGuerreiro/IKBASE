angular.module('ikbaseApp').factory('cadastroUsuario', function($http){
    return ({
        cadastrarUsuario: cadastrarUsuario
    });

    function cadastrarUsuario(usuario){
        return $http.post('caminho', usuario);
    }
});
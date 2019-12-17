angular.module('ikbaseApp').factory('postagemService', function($http){

    return({
        inserirPostagem: inserirPostagem,
        comentarPostagem: comentarPostagem
    });

    function inserirPostagem(postagem){
        return $http.post('caminho', postagem);
    }

    function comentarPostagem(comentario){
        return $http.post('caminho', comentario);
    }
});
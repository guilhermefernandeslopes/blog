document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const conteudo = document.getElementById('conteudo').value;

    const novoPost = document.createElement('article');
    novoPost.innerHTML = `<h3>${titulo}</h3><p>${conteudo}</p><button>Leia mais</button>`;
    
    document.getElementById('posts').appendChild(novoPost);

    // Limpar o formulário
    document.getElementById('titulo').value = '';
    document.getElementById('conteudo').value = '';
});
const carregar = async (id, arquivo) => {
    const resposta = await fetch(arquivo);
    document.getElementById(id).innerHTML = await resposta.text();
}

carregar('header', 'components/header.html');
carregar('footer', 'components/footer.html');
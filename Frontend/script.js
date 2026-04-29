async function get_atividades() {
    const res = await fetch('http://localhost:3000/atividades');
    const dados = await res.json(); 
    
    const divLista = document.getElementById('lista');
    divLista.innerHTML = JSON.stringify(dados); 
}

get_atividades();
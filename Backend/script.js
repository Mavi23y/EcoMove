async function get_atividades(){
    const res = await fetch(
        'http://localhost:3000',
        // {
        //     method : 'GET',
        //     headers : {'Content-Type' :| 'application/json'},
        //     body : ''
        // }
    );

    let get_atividades = await res.json();
    console.log(atividades);

    render_atividades(atividades)
}
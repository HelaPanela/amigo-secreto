let amigos = [];
let amigosDisponibles = [];

function agregarAmigo() {
    let ingreso = document.getElementById('amigo').value;
    
    if (ingreso === '') {
        alert('Ingrese un nombre');
        return;
    }

    if (amigos.includes(ingreso)) {
        alert('Este nombre ya fue agregado');
        return;
    }

    amigos.push(ingreso);
    limpiar();
    actualizarLista();
}

function limpiar() {
    document.getElementById('amigo').value = '';
}

function actualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((amigo, index) => {
        let item = document.createElement('li');
        item.textContent = amigo;
        item.setAttribute('data-id', index);
        lista.appendChild(item);
    });
}

function validarSorteo() {
    if (amigos.length === 0) {
        alert('Ingrese un nombre para empezar');
        return;
    }

    sortearAmigo();
}

function sortearAmigo() {
    if (amigos.length === 0) {
        validarSorteo();
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    
    amigos.splice(indiceAleatorio, 1);

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `¡El amigo secreto es: ${amigoSorteado}!`;
    
    sorteado = true;
    actualizarLista();
}
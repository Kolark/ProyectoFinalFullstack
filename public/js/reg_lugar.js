const form = document.getElementById('_form')
const In_nombre = document.getElementById('nombre')
const In_tipo = document.getElementById('select-tipo')
const In_costo = document.getElementById('costo')
const In_descripcion = document.getElementById('descripcion')
const In_email = document.getElementById('emailuser')
const In_ciudadnombre = document.getElementById('ciudadnombre')
const In_foto = document.getElementById('foto')

const postLugar = async (body) => {
    const foto = In_foto.files;
    const formData = new FormData();
    formData.append('foto', foto[0]);
    //const body = { nombre: 'Nuevo Hotel', estrellas: 4, ciudad: 'Medellín’'};
    const res = await fetch('/api/lugares', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-type': 'application/json'}
    });
    if (!res.ok) {
            console.log('error');
            alert('Ingresa un usuario registrado')
    } else {
            const data = await res.json();
            console.log(data);
    }
};

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const lugar = {
        nombre:In_nombre.value,
        info:{
            tipo:In_tipo.value,
            descripcion:In_descripcion.value,
            costo:In_costo.value
        },
        usuario:In_email.value,
        direccion:{
            ciudad:{
                nombre:In_ciudadnombre.value,
                pais:"------"
            },
            coordenadas:{
                latitud:111,
                longitud:111
            }
        }
    }
    postLugar(lugar)
})



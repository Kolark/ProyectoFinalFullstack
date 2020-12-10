const form = document.getElementById('_form')
const In_nombre = document.getElementById('nombre')
const In_email = document.getElementById('email')
const In_telefono = document.getElementById('telefono')



const postUser = async (body) => {
    //const body = { nombre: 'Nuevo Hotel', estrellas: 4, ciudad: 'Medellín’'};
    const res = await fetch('/api/usuario', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-type': 'application/json'}
    });
    if (!res.ok) {
            console.log('error');
    } else {
            const data = await res.json();
            console.log(data);
    }
};

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const user = {
        nombre:In_nombre.value,
        email:In_email.value,
        telefono:In_telefono.value
    }
    postUser(user)
})



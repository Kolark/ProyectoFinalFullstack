const form = document.getElementById('_form')
const In_Searchbar = document.getElementById('searchbar')
const contenedor = document.getElementById('results');
const getHoteles = async () => {
    const res = await fetch('/api/lugares?nombre='+In_Searchbar.value);
    if (!res.ok) {
    console.log('error');
    } else {
    const data = await res.json();
    contenedor.innerHTML='';
    data.forEach(element => {
            
        contenedor.innerHTML+=template(element.nombre,element.info,element.usuario,element.direccion);
    });

    
    }
};

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    getHoteles();
})


const template = (nombre, info, usuario, direccion) => {
    return `
        <div class="col-4">
            <div class="card">
                <img src="/imgs/placeholder.PNG" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5>
                    <h5 class="card-title">informacion</h5>
                    <p class="card-text">Tipo:${info.tipo}</p>
                    <p class="card-text">Costo:${info.costo}</p>
                    <h5 class="card-title">Listada por: ${usuario}</h5>
                    <h5 class="card-title">Ubicacion</h5>
                    <p class="card-text">${direccion.ciudad.nombre}</p>
                </div>
            </div>
        </div>
    `;
};
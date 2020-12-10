
const getHoteles = async () => {
    const res = await fetch('/api/hoteles');
    if (!res.ok) {
    console.log('error');
    } else {
    const data = await res.json();
    console.log(data);
    }
};


const postHoteles = async (body) => {
    	//const body = { nombre: 'Nuevo Hotel', estrellas: 4, ciudad: 'Medellín’'};
    	const res = await fetch('/api/hoteles', {
        		method: 'POST',
        		body: JSON.stringify(body),
        		//headers: { ‘Content-type’: ‘application/json; charset=UTF-8’ }
    	});
    	if (!res.ok) {
        		console.log('error');
    	} else {
        		const data = await res.json();
        		console.log(data);
    	}
};

module.exports = {
    getHoteles,postHoteles
}
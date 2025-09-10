const urlRecetas = import.meta.env.VITE_API_RECETAS

export const leerRecetas = async () => {
    try {
        const respuesta = await fetch(urlRecetas)
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}

export const obtenerRecetaID = async (id) => {
    try {
        const respuesta = await fetch(urlRecetas+`/${id}`)
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}

export const crearReceta = async (recetaNueva) => {
    try {
        const respuesta = await fetch(urlRecetas,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(recetaNueva)
        })
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}

//put
export const editarReceta = async (recetaEditada,id) => {
    try {
        const respuesta = await fetch(urlRecetas+`/${id}`,{
            method: 'PUT',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(recetaEditada)
        })
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}

export const borrarRecetaID = async (id) => {
    try {
        const respuesta = await fetch(urlRecetas+`/${id}`,{
            method: 'DELETE'
        })
        return respuesta
    } catch (error) {
        console.error(error)
        return null
    }
}
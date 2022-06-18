import { axiosInstance} from '../helpers/axios-config';

const getUsuarios = () => {
    return axiosInstance.get('usuario', {
        headers: {
            'Content-type': 'application/jason'
        }
    })
}

//todo: crear, actualizar, listar por id

const crearUsuario = (data) => {
    return axiosInstance.post('inventario', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const editUsuario = (usuarioId, data) => {
    return axiosInstance.put(`usuario/${usuarioId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export {
    getUsuarios, crearUsuario, editUsuario
}
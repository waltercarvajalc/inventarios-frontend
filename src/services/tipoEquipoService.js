import { axiosInstance} from '../helpers/axios-config';

const getTiposEquipos = () => {
    return axiosInstance.get('tipo-equipo', {
        headers: {
            'Content-type': 'application/jason'
        }
    })
}

//todo: crear, actualizar, listar por id

const crearTiposEquipos = (data) => {
    return axiosInstance.post('tipo-equipo', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const editTiposEquipos = (tipoEquipoId, data) => {
    return axiosInstance.put(`tipo-equipo/${tipoEquipoId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export {
    getTiposEquipos, crearTiposEquipos, editTiposEquipos
}
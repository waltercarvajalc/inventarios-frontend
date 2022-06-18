import { axiosInstance} from '../helpers/axios-config';

//localhost:4000/estado-equipo
const getEstadosEquipos = () => {
    return axiosInstance.get('estado-equipo', {
        headers: {
            'Content-type': 'application/jason'
        }
    })
}

//todo: crear, actualizar, listar por id

const crearEstadosEquipos = (data) => {
    return axiosInstance.post('estado-equipo', data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

const editEstadosEquipos = (estadoEquipoId, data) => {
    return axiosInstance.put(`estado-equipo/${estadoEquipoId}`, data, {
        headers: {
            'Content-type': 'application/json'
        }
    });
}

export {
    getEstadosEquipos, crearEstadosEquipos, editEstadosEquipos
}
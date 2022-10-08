import * as yup from 'yup'
const _addPlanet = yup.object().shape({
    name: yup.string().required(),
    climate:yup.string().required(),
    diameter:yup.string().required(),
    terrain:yup.string().required(),
    gravity:yup.string().required(),
    population:yup.string().required()
}).required()



const schema = {
    _addPlanet
}

export default schema
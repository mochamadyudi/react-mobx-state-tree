import * as yup from 'yup'
const _addPlanet = yup.object().shape({
    name: yup.string().required(),
    climate:yup.string().required(),
    diameter:yup.string().required(),
    terrain:yup.string().required(),
    gravity:yup.string().required(),
    population:yup.string().required()
}).required()

const _addPeople = yup.object().shape({
    name: yup.string().required(),
    mass:yup.string().required(),
    hair_color:yup.string().required(),
    skin_color:yup.string().required(),
    eye_color:yup.string().required(),
    gender:yup.string().required()
}).required()


const _addStarship = yup.object().shape({
    "name": yup.string().required(),
    "model": yup.string().required(),
    "manufacturer": yup.string().required(),
    "crew": yup.string().required(),
    "consumables": yup.string().required(),
    "hyperdrive_rating": yup.string().required(),
    "starship_class": yup.string().required(),

}).required()



//             "gender": "male",





const schema = {
    _addPlanet,_addPeople
}

export default schema
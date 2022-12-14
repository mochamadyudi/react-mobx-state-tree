import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {useForm} from "react-hook-form";

import {withRouter} from "react-router-dom";
import {inject} from "mobx-react";
import schema from "../../../schema";
import {Input} from "../../shared-components/input";
import {useYupValidationResolver} from "../../../hooks/yup-validator";

const FormAddPlanet = (props) => {
    let { onSuccess } = props

    console.log({props})



    const [inVal,setInVal] = useState(()=> {
        let newObj = {
            name:"",
            mass:"",
            hair_color:"",
            skin_color:"",
            eye_color:"",
            gender:"",
        }
        if(typeof(props.initialValue) !== "undefined" && props.initialValue !== null){
            newObj = {
                ...newObj,
                ...props.initialValue
            }
            if(typeof(props.initialValue) !== "undefined" && props.initialValue !== null){
                if(typeof(props.initialValue.name) !== "undefined" && props.initialValue.name !== null && props.initialValue.name !== ""){
                    Reflect.set(newObj,"name",props.initialValue.name)
                }
                if(typeof(props.initialValue.climate) !== "undefined" && props.initialValue.climate !== null && props.initialValue.climate !== ""){
                    Reflect.set(newObj,"climate",props.initialValue.climate)
                }
                if(typeof(props.initialValue.diameter) !== "undefined" && props.initialValue.diameter !== null && props.initialValue.diameter !== ""){
                    Reflect.set(newObj,"diameter",props.initialValue.diameter)
                }
                if(typeof(props.initialValue.terrain) !== "undefined" && props.initialValue.terrain !== null && props.initialValue.terrain !== ""){
                    Reflect.set(newObj,"terrain",props.initialValue.terrain)
                }
                if(typeof(props.initialValue.gravity) !== "undefined" && props.initialValue.gravity !== null && props.initialValue.gravity !== ""){
                    Reflect.set(newObj,"gravity",props.initialValue.gravity)
                }
                if(typeof(props.initialValue.population) !== "undefined" && props.initialValue.population !== null && props.initialValue.population !== ""){
                    Reflect.set(newObj,"population",props.initialValue.population)
                }
            }
        }
        return newObj
    })


    useEffect(()=> {
        let newObj = {
            name:"",
            climate:"",
            diameter:"",
            terrain:"",
            gravity:"",
            population:"",
        }
        if(typeof(props.initialValue) !== "undefined" && props.initialValue !== null){
            if(typeof(props.initialValue.name) !== "undefined" && props.initialValue.name !== null && props.initialValue.name !== ""){
                Reflect.set(newObj,"name",props.initialValue.name)
            }
            if(typeof(props.initialValue.climate) !== "undefined" && props.initialValue.climate !== null && props.initialValue.climate !== ""){
                Reflect.set(newObj,"climate",props.initialValue.climate)
            }
            if(typeof(props.initialValue.diameter) !== "undefined" && props.initialValue.diameter !== null && props.initialValue.diameter !== ""){
                Reflect.set(newObj,"diameter",props.initialValue.diameter)
            }
            if(typeof(props.initialValue.terrain) !== "undefined" && props.initialValue.terrain !== null && props.initialValue.terrain !== ""){
                Reflect.set(newObj,"terrain",props.initialValue.terrain)
            }
            if(typeof(props.initialValue.gravity) !== "undefined" && props.initialValue.gravity !== null && props.initialValue.gravity !== ""){
                Reflect.set(newObj,"gravity",props.initialValue.gravity)
            }
            if(typeof(props.initialValue.population) !== "undefined" && props.initialValue.population !== null && props.initialValue.population !== ""){
                Reflect.set(newObj,"population",props.initialValue.population)
            }
        }
        setInVal(newObj)
    },[props])


    const resolver = useYupValidationResolver(schema._addPlanet)
    const {handleSubmit, control, errors,reset} = useForm({
        shouldFocusError: true,
        criteriaMode: "all",
        reValidateMode: "onBlur",
        resolver,
        defaultValues: inVal,
        mode: "onChange"
    });


    const onCreate = (data) => {
        let exampleItem = {
            "name": typeof(data.name) !== "undefined" ? data.name : '',
            "rotation_period": "23",
            "orbital_period": "304",
            "diameter": typeof(data.diameter) !== "undefined" ? data.diameter : "",
            "climate": typeof(data.climate) !== "undefined" ? data.climate : "",
            "gravity": typeof(data.gravity) !== "undefined" ? data.gravity : "",
            "terrain": typeof(data.terrain) !== "undefined" ? data.terrain : "",
            "surface_water": "1",
            "population": typeof(data.population) !== 'undefined' ?  data.population : "",
            "residents": [
                "https://swapi.dev/api/people/1/",
                "https://swapi.dev/api/people/2/",
                "https://swapi.dev/api/people/4/",
                "https://swapi.dev/api/people/6/",
                "https://swapi.dev/api/people/7/",
                "https://swapi.dev/api/people/8/",
                "https://swapi.dev/api/people/9/",
                "https://swapi.dev/api/people/11/",
                "https://swapi.dev/api/people/43/",
                "https://swapi.dev/api/people/62/"
            ],
            "films": [
                "https://swapi.dev/api/films/1/",
                "https://swapi.dev/api/films/3/",
                "https://swapi.dev/api/films/4/",
                "https://swapi.dev/api/films/5/",
                "https://swapi.dev/api/films/6/"
            ],
            "created": "2014-12-09T13:50:49.641000Z",
            "edited": "2014-12-20T20:58:18.411000Z",
            "url": "https://swapi.dev/api/planets/1/"
        }
        if(typeof(props.mode) !== "undefined" && props.mode === "add"){
            props.PlanetStore.createNewPlanet(exampleItem)
        }else{
            if(typeof(props.initialValue) !== "undefined" && props.initialValue !== null){
                props.PlanetStore.update({...exampleItem,_id:props.initialValue._id})
            }

        }

        onSuccess(exampleItem)
        reset({
            name: "",
            climate: "",
            diameter: "",
            terrain: "",
            gravity: "",
            population: ""
        })
    }
    return (
        <div className="w-full">
            <form onSubmit={handleSubmit(onCreate)}>
                <div className={'flex flex-col space-y-2 border-b pb-2 mb-4 w-full'}>
                    <Input
                        {...control}
                        control={control}
                        name="name"
                        rules={{required: true}}
                        errors={typeof (errors.name) !== "undefined" && errors.name}

                    />
                    <Input
                        {...control}
                        control={control}
                        name="climate"
                        rules={{required: true}}
                        errors={typeof(errors.climate) !== "undefined" && errors.climate}
                    />
                    <Input
                        {...control}
                        control={control}
                        name="diameter"
                        rules={{required: true}}
                        errors={typeof(errors.diameter) !== "undefined" && errors.diameter}
                    />
                    <Input
                        {...control}
                        control={control}
                        name="terrain"
                        rules={{required: true}}
                        errors={typeof(errors.terrain) !== "undefined" && errors.terrain}
                    />
                    <Input
                        {...control}
                        control={control}
                        name="gravity"
                        rules={{required: true}}
                        errors={typeof(errors.gravity) !== "undefined" && errors.gravity}
                    />
                    <Input
                        {...control}
                        control={control}
                        name="population"
                        rules={{required: true}}
                        errors={typeof(errors.population) !== "undefined" && errors.population}
                    />

                </div>
                <div className="flex justify-end mt-2">
                    <button
                        type={'submit'}
                        title={'submit'}
                        className={'text-sm border border-purple-500 text-purple-500 transition outline-none duration-200 hover:bg-purple-500 hover:text-white font-poppins  px-4 py-2 rounded-xl rounded-xl'}>Submit</button>
                </div>
            </form>

        </div>
    )
}

FormAddPlanet.propTypes = {
    onSuccess: PropTypes.func.isRequired
}
FormAddPlanet.defaultProps = {
    onSuccess: (data)=> {
        console.log({data})
    }
}

export default inject('PlanetStore')(withRouter(FormAddPlanet))
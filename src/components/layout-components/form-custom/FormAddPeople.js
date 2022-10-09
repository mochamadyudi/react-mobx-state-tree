import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import {useForm} from "react-hook-form";

import {withRouter} from "react-router-dom";
import {inject} from "mobx-react";
import schema from "../../../schema";
import {Input} from "../../shared-components/input";
import {useYupValidationResolver} from "../../../hooks/yup-validator";

const FormAddPeople = (props) => {
    let { onSuccess } = props


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
                ...props.initialValue
            }
            if(typeof(props.initialValue.name) !== "undefined" && props.initialValue.name !== null && props.initialValue.name !== ""){
                Reflect.set(newObj,"name",props.initialValue.name)
            }
            if(typeof(props.initialValue.mass) !== "undefined" && props.initialValue.mass !== null && props.initialValue.mass !== ""){
                Reflect.set(newObj,"mass",props.initialValue.mass)
            }
            if(typeof(props.initialValue.hair_color) !== "undefined" && props.initialValue.hair_color !== null && props.initialValue.hair_color !== ""){
                Reflect.set(newObj,"hair_color",props.initialValue.hair_color)
            }
            if(typeof(props.initialValue.skin_color) !== "undefined" && props.initialValue.skin_color !== null && props.initialValue.skin_color !== ""){
                Reflect.set(newObj,"skin_color",props.initialValue.skin_color)
            }
            if(typeof(props.initialValue.eye_color) !== "undefined" && props.initialValue.eye_color !== null && props.initialValue.eye_color !== ""){
                Reflect.set(newObj,"eye_color",props.initialValue.eye_color)
            }
            if(typeof(props.initialValue.gender) !== "undefined" && props.initialValue.gender !== null && props.initialValue.gender !== ""){
                Reflect.set(newObj,"gender",props.initialValue.gender)
            }
        }
        return newObj
    })


    useEffect(()=> {
        let newObj = {
            name:"",
            mass:"",
            hair_color:"",
            skin_color:"",
            eye_color:"",
            gender:"",
        }
        if(typeof(props.initialValue) !== "undefined" && props.initialValue !== null){
            if(typeof(props.initialValue.name) !== "undefined" && props.initialValue.name !== null && props.initialValue.name !== ""){
                Reflect.set(newObj,"name",props.initialValue.name)
            }
            if(typeof(props.initialValue.mass) !== "undefined" && props.initialValue.mass !== null && props.initialValue.mass !== ""){
                Reflect.set(newObj,"mass",props.initialValue.mass)
            }
            if(typeof(props.initialValue.hair_color) !== "undefined" && props.initialValue.hair_color !== null && props.initialValue.hair_color !== ""){
                Reflect.set(newObj,"hair_color",props.initialValue.hair_color)
            }
            if(typeof(props.initialValue.skin_color) !== "undefined" && props.initialValue.skin_color !== null && props.initialValue.skin_color !== ""){
                Reflect.set(newObj,"skin_color",props.initialValue.skin_color)
            }
            if(typeof(props.initialValue.eye_color) !== "undefined" && props.initialValue.eye_color !== null && props.initialValue.eye_color !== ""){
                Reflect.set(newObj,"eye_color",props.initialValue.eye_color)
            }
            if(typeof(props.initialValue.gender) !== "undefined" && props.initialValue.gender !== null && props.initialValue.gender !== ""){
                Reflect.set(newObj,"gender",props.initialValue.gender)
            }
        }
        setInVal(newObj)
    },[props])

    const resolver = useYupValidationResolver(schema._addPeople)
    const {handleSubmit, control, errors,reset,formState} = useForm({
        shouldFocusError: true,
        criteriaMode: "all",
        reValidateMode: "onBlur",
        resolver,
        defaultValues: inVal,
        mode: "onChange"
    });

    console.log({formState,control})


    const onCreate = (data) => {
        let exampleItem = {
            name: typeof(data.name) !== "undefined"? data.name : "-",
            mass: typeof(data.mass) !== "undefined"? data.mass : "-",
            hair_color: typeof(data.hair_color) !== "undefined"? data.hair_color : "-",
            skin_color: typeof(data.skin_color) !== "undefined"? data.skin_color : "-",
            eye_color: typeof(data.eye_color) !== "undefined"? data.eye_color : "-",
            gender: typeof(data.gender) !== "undefined"? data.gender : "-",
            "height": "172",
            "birth_year": "19BBY",
            "homeworld": "https://swapi.dev/api/planets/1/",
            "films": [
                "https://swapi.dev/api/films/1/",
                "https://swapi.dev/api/films/2/",
                "https://swapi.dev/api/films/3/",
                "https://swapi.dev/api/films/6/"
            ],
            "species": [],
            "vehicles": [
                "https://swapi.dev/api/vehicles/14/",
                "https://swapi.dev/api/vehicles/30/"
            ],
            "starships": [
                "https://swapi.dev/api/starships/12/",
                "https://swapi.dev/api/starships/22/"
            ],
            "created": "2014-12-09T13:50:51.644000Z",
            "edited": "2014-12-20T21:17:56.891000Z",
            "url": "https://swapi.dev/api/people/1/"
        }
        if(typeof(props.mode) !== "undefined" && props.mode === "add"){
            props.PeopleStore.createPeople(exampleItem)
        }else{
            if(typeof(props.initialValue) !== "undefined" && props.initialValue !== null){
                props.PeopleStore.update({...exampleItem,_id:props.initialValue._id})
            }

        }

        onSuccess(exampleItem)
        reset({
            name: "",
            mass: "",
            hair_color: "",
            skin_color: "",
            eye_color: "",
            gender: ""
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
                        value={inVal.name}
                        rules={{required: true}}
                        errors={typeof(errors.name) !== "undefined" && errors.name}
                    />
                    <Input
                        {...control}
                        control={control}
                        name="mass"
                        value={inVal.mass}
                        rules={{required: true}}
                        errors={typeof(errors.mass) !== "undefined" && errors.mass}
                    />
                    <Input
                        {...control}
                        control={control}
                        name="hair_color"
                        value={inVal.hair_color}
                        rules={{required: true}}
                        errors={typeof(errors.hair_color) !== "undefined" && errors.hair_color}
                    />
                    <Input
                        {...control}
                        control={control}
                        name="skin_color"
                        value={inVal.skin_color}
                        rules={{required: true}}
                        errors={typeof(errors.skin_color) !== "undefined" && errors.skin_color}
                    />
                    <Input
                        {...control}
                        control={control}
                        name="eye_color"
                        value={inVal.eye_color}
                        rules={{required: true}}
                        errors={typeof(errors.eye_color) !== "undefined" && errors.eye_color}
                    />
                    <Input
                        {...control}
                        control={control}
                        name="gender"
                        value={inVal.gender}
                        rules={{required: true}}
                        errors={typeof(errors.gender) !== "undefined" && errors.gender}
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

FormAddPeople.propTypes = {
    onSuccess: PropTypes.func.isRequired
}
FormAddPeople.defaultProps = {
    onSuccess: (data)=> {
        console.log({data})
    }
}

export default inject('PeopleStore')(withRouter(FormAddPeople))
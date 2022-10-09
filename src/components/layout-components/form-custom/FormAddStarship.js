import React from 'react'
import PropTypes from 'prop-types'
import {useForm} from "react-hook-form";

import {withRouter} from "react-router-dom";
import {inject} from "mobx-react";
import schema from "../../../schema";
import {Input} from "../../shared-components/input";
import {useYupValidationResolver} from "../../../hooks/yup-validator";

const FormAddPeople = (props) => {
    let { onSuccess } = props
    const resolver = useYupValidationResolver(schema._addPeople)
    const {handleSubmit, control, errors,reset} = useForm({
        shouldFocusError: true,
        criteriaMode: "all",
        reValidateMode: "onBlur",
        resolver,
        defaultValues: {
            name: "",
            mass: "",
            hair_color: "",
            skin_color: "",
            eye_color: "",
            gender: ""
        },
        mode: "onChange"
    });


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
        props.StarshipStore.createPeople(exampleItem)
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
                        rules={{required: true}}
                        errors={typeof(errors.name) !== "undefined" && errors.name}
                    />
                    <Input
                        {...control}
                        control={control}
                        name="mass"
                        rules={{required: true}}
                        errors={typeof(errors.mass) !== "undefined" && errors.mass}
                    />
                    <Input
                        {...control}
                        control={control}
                        name="hair_color"
                        rules={{required: true}}
                        errors={typeof(errors.hair_color) !== "undefined" && errors.hair_color}
                    />
                    <Input
                        {...control}
                        control={control}
                        name="skin_color"
                        rules={{required: true}}
                        errors={typeof(errors.skin_color) !== "undefined" && errors.skin_color}
                    />
                    <Input
                        {...control}
                        control={control}
                        name="eye_color"
                        rules={{required: true}}
                        errors={typeof(errors.eye_color) !== "undefined" && errors.eye_color}
                    />
                    <Input
                        {...control}
                        control={control}
                        name="gender"
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

export default inject('StarshipStore')(withRouter(FormAddPeople))
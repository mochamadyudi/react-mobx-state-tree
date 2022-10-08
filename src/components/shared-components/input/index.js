import React from 'react'
import { useController} from 'react-hook-form'
import Utils from "../../../utils";

export const Input = (props)=> {
    let { errors } = props
    const { field, fieldState } = useController(props);
    console.log({errors})
    return (
        <div>
            <input {...field} placeholder={props.name} className={`w-full border ${Utils.checkErrorInput(errors) ? "border-red-500 focus:border-red-500" : "border-gray-100 focus:border-cyan-500" } rounded p-2 focus:outline-none hover:outline-none`}/>
            {
                Utils.checkErrorInput(errors) ? (
                    <p className={'text-xs text-red-500'}>{Utils.getMessageError(errors)}</p>
                ):null
            }
            {
                typeof(fieldState) !== "undefined" && typeof(fieldState)==="object" && Object.keys(fieldState).length > 0 && (
                    <React.Fragment>
                        {
                            typeof(fieldState.isTouched) !== "undefined" &&(
                                <p>{fieldState.isTouched && "Touched"}</p>
                            )
                        }
                        {
                            typeof(fieldState.isDirty) !== "undefined" &&(
                                <p>{fieldState.isDirty && "Dirty"}</p>
                            )
                        }
                        {
                            typeof(fieldState.invalid) !== "undefined" &&(
                                <p>{fieldState.invalid ? "invalid" : "valid"}</p>
                            )
                        }
                    </React.Fragment>
                )
            }

        </div>
    )
}

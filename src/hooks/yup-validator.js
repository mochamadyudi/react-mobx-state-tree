import React,{useCallback} from "react";

export const useYupValidationResolver = validationSchema =>
    useCallback(
        async data => {
            try {
                const values = await validationSchema.validate(data, {
                    abortEarly: false
                });

                return {
                    values,
                    errors: {}
                };
            } catch (errors) {
                return {
                    values: {},
                    errors: errors.inner.reduce(
                        (allErrors, currentError) => {
                            // console.log({allErrors,currentError})
                            return {
                                ...allErrors,
                                [currentError.path]: {
                                    type: typeof(currentError.type) !== "undefined" ? currentError.type : "validation",
                                    message: currentError.message
                                }
                            }
                        },
                        {}
                    )
                };
            }
        },
        [validationSchema]
    );
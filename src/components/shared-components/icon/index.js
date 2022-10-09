import React from 'react'
import PropTypes from 'prop-types'

export const TrashIcon = (props) => {
    return (
        <svg {...props} className={[' w-5 h-5', props.className].join(" ")} xmlns="http://www.w3.org/2000/svg"
             fill="#000000" viewBox="0 0 24 24" width="24px" height="24px">
            <path
                d="M 10 2 L 9 3 L 5 3 C 4.4 3 4 3.4 4 4 C 4 4.6 4.4 5 5 5 L 7 5 L 17 5 L 19 5 C 19.6 5 20 4.6 20 4 C 20 3.4 19.6 3 19 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 20 C 5 21.1 5.9 22 7 22 L 17 22 C 18.1 22 19 21.1 19 20 L 19 7 L 5 7 z M 9 9 C 9.6 9 10 9.4 10 10 L 10 19 C 10 19.6 9.6 20 9 20 C 8.4 20 8 19.6 8 19 L 8 10 C 8 9.4 8.4 9 9 9 z M 15 9 C 15.6 9 16 9.4 16 10 L 16 19 C 16 19.6 15.6 20 15 20 C 14.4 20 14 19.6 14 19 L 14 10 C 14 9.4 14.4 9 15 9 z"/>
        </svg>
    )
}

TrashIcon.propTypes = {
    className: PropTypes.string
}
TrashIcon.defaultProps = {
    className: ""
}

export const PlusIcons = (props) => {
    return (
        <svg {...props}
             className={[' w-5 h-5', props.className].join(" ")}
             xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 50 50" width="50px" height="50px">
            <path
                d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 24 13 L 24 24 L 13 24 L 13 26 L 24 26 L 24 37 L 26 37 L 26 26 L 37 26 L 37 24 L 26 24 L 26 13 L 24 13 z"/>
        </svg>
    )
}
PlusIcons.propTypes = {
    className: PropTypes.string
}
PlusIcons.defaultProps = {
    className: ""
}


export const MaleIcons = () => {
    return (
        <img src="/img/icon/icon-male.png" alt="icon-male" className={'w-5 h-5'} title={'gender male'}/>
    )
}
export const FemaleIcons = () => {
    return (
        <img src="/img/icon/icon-female.png" alt="icon-male" className={'w-5 h-5'} title={'gender female'}/>
    )
}


export const EyeIcons = (props) => {
    return (
        <svg {...props} className={`${typeof (props.className) !== "undefined" ? props.className : ""} w-5 h-5`}
             xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
            <path
                d="M447.1 256.2C401.8 204 339.2 144 256 144c-33.6 0-64.4 9.5-96.9 29.8C131.7 191 103.6 215.2 65 255l-1 1 6.7 6.9C125.8 319.3 173.4 368 256 368c36.5 0 71.9-11.9 108.2-36.4 30.9-20.9 57.2-47.4 78.3-68.8l5.5-5.5-.9-1.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"/>
            <path
                d="M250.4 226.8c0-6.9 2-13.4 5.5-18.8-26.5 0-47.9 21.6-47.9 48.2s21.5 48.1 47.9 48.1 48-21.5 48-48.1c-5.4 3.5-11.9 5.5-18.8 5.5-19.1-.1-34.7-15.7-34.7-34.9z"/>
        </svg>
    )
}

export const PencilIcons = (props) => {
    return (
        <svg
            className={` w-4 h-4 ${typeof(props.className) !== "undefined" ? props.className : ""}`} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1"
             x="0px" y="0px" width="528.899px" height="528.899px" viewBox="0 0 528.899 528.899"
            style={{enableBackground:"new 0 0 528.899 528.899"}}

            xmlSpace="preserve"
        >
            <g><path d="M328.883,89.125l107.59,107.589l-272.34,272.34L56.604,361.465L328.883,89.125z M518.113,63.177l-47.981-47.981   c-18.543-18.543-48.653-18.543-67.259,0l-45.961,45.961l107.59,107.59l53.611-53.611   C532.495,100.753,532.495,77.559,518.113,63.177z M0.3,512.69c-1.958,8.812,5.998,16.708,14.811,14.565l119.891-29.069   L27.473,390.597L0.3,512.69z"/></g></svg>
    )
}
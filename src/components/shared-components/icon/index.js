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


export const MaleIcons = ()=> {
    return (
        <img src="/img/icon/icon-male.png" alt="icon-male" className={'w-5 h-5'} title={'gender male'}/>
    )
}
export const FemaleIcons = ()=> {
    return (
        <img src="/img/icon/icon-female.png" alt="icon-male" className={'w-5 h-5'} title={'gender female'}/>
    )
}
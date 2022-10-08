import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Utils from "../../../utils";

const Pagination = (props) => {
    const [active, setActive] = useState(() => {
        if (typeof (props.current) !== "undefined") {
            return props.current
        }
        return 1
    })

    const [pages] = useState(() => {
        if (typeof (props.total_page) !== "undefined") {
            return Utils.configPagination(props.total_page)
        }
        return []
    })

    const onChangePage = (page) => {
        setActive(page)
        if (typeof (props.onChange) !== "undefined" && typeof (props.onChange) === "function") {
            props.onChange({page: page})
        }
    }


    return (
        <div className="w-full flex items-center gap-4">
            {
                pages.map((item, index) => {
                    return (
                        <div
                            onClick={() => onChangePage(index + 1)}
                            className={`
                        transition duration-200
                         ${(index + 1) === active ? "bg-cyan-500 text-white" : "bg-gray-50 text-cyan-500 hover:bg-cyan-400 hover:text-white "}
                        w-10 h-10 text-sm rounded-xl flex items-center justify-center cursor-pointer`}>
                            <span>{index + 1}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

Pagination.propTypes = {
    current: PropTypes.number.isRequired,
    total_page: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}
Pagination.defaultProps = {
    current:1,
    total_page: 0,
    onChange: (page) => {
        console.log({page})
    }
}

export default Pagination
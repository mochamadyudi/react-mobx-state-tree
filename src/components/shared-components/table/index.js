import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Utils from "../../../utils";

const Table = (props) => {
    const [header, setHeader] = useState(() => {
        if (Array.isArray(props.columns) && props.columns.length > 0) {
            let newArr = []
            for (let i = 0; i < props.columns.length; i++) {
                newArr.push({
                    title: typeof (props.columns[i].title) !== "undefined" ? props.columns[i].title : "",
                    icon: typeof (props.columns[i].icon) !== "undefined" ? props.columns[i].icon : "",
                    span: typeof (props.columns[i].span) !== "undefined" ? props.columns[i].span : 1
                })
            }
            return newArr
        }
        return []
    })
    return (
        <div className="w-full bg-white p-4 rounded-xl">
            <div className="flex items-center justify-between px-4 mb-4">
                {
                    typeof(props.title) !== "undefined" ? (
                        <h3 className={'text-lg font-bold font-poppins'}>{props.title}</h3>
                    ):<div className={'w-full'}/>
                }

                {
                    typeof(props.extra) !== "undefined" && props.extra
                }
            </div>
            <div className={`grid ${Utils.getGridCol(props.col)} ${Utils.getGap(props.gap)} border-b py-2`}>
                {
                    Array.isArray(header) && header.map((item) => {
                        return (
                            <div
                                className={`${Utils.getSpan(typeof (item.span) !== "undefined" ? item.span : 3)}  border-r px-4`}>
                                <span>{typeof (item.title) !== "undefined" ? item.title : ""}</span>
                            </div>
                        )
                    })
                }
            </div>

            <div className="w-full">
                {
                    typeof(props.dataSource) !== "undefined" && Array.isArray(props.dataSource) && props.dataSource.map((data,index)=> {
                        return (
                            <div className={`grid ${Utils.getGridCol(props.col)} ${Utils.getGap(props.gap)} py-2 border-b border-gray-50 hover:bg-gray-50 transition duration-200`}>
                                {

                                    Array.isArray(props.columns) && props.columns.map((item) => {
                                        return (
                                            <div
                                                className={`${Utils.getSpan(typeof (item.span) !== "undefined" ? item.span : 3)} px-4`}>
                                                <span>{typeof (item.render) !== "undefined" ? item.render(data,index) : ""}</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        )
                    })
                }
            </div>


        </div>

    )
}

Table.propTypes = {
    columns: PropTypes.array.isRequired,
    col: PropTypes.number.isRequired,
    gap: PropTypes.number.isRequired
}
Table.defaultProps = {
    col: 12,
    gap: 0.5,
    columns: []
}

export default Table
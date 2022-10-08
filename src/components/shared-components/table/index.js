import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Utils from "../../../utils";
import Loading from "../loading";
import Pagination from "../pagination/Pagination";

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
    console.log(props.pagination,'PAGINATION TABLE')
    return (
        <div className="w-full bg-white p-4 rounded-xl relative overflow-hidden font-lexend">
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
                                className={`${Utils.getSpan(typeof (item.span) !== "undefined" ? item.span : 3)}  border-r px-2 text-sm lowercase`}>
                                <span>{typeof (item.title) !== "undefined" ? item.title : ""}</span>
                            </div>
                        )
                    })
                }
            </div>

            {
                typeof(props.loading) !== "undefined" && props.loading === true ? (
                    <Loading cover={'table'}/>
                ): (
                    <div className="w-full">
                        {
                            typeof(props.dataSource) !== "undefined" && Array.isArray(props.dataSource) && props.dataSource.map((data,index)=> {
                                return (
                                    <div className={`grid ${Utils.getGridCol(props.col)} ${Utils.getGap(props.gap)} py-2 border-b border-gray-50 hover:bg-gray-50 transition duration-200 overflow-hidden`}>
                                        {

                                            Array.isArray(props.columns) && props.columns.map((item) => {
                                                return (
                                                    <div
                                                        className={`${Utils.getSpan(typeof (item.span) !== "undefined" ? item.span : 3)} px-2 text-sm lowercase`}>
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
                )
            }

            {
                typeof(props.loading) !== "undefined" && props.loading !== true && (
                    <div className="w-full flex items-center justify-end py-4">
                        {
                            typeof(props.pagination) !== "undefined" && typeof(props.pagination) === "object" && Object.keys(props.pagination).length > 0 && (
                                <Pagination
                                    current={props.pagination.current}
                                    total_page={props.pagination.total_page} onChange={props.pagination.onChange}/>
                            )
                        }

                    </div>
                )
            }

        </div>

    )
}

Table.propTypes = {
    pagination: PropTypes.shape({
        current:PropTypes.number.isRequired,
        total_page:PropTypes.number.isRequired,
        onChange:PropTypes.func.isRequired
    }),
    columns: PropTypes.array.isRequired,
    col: PropTypes.number.isRequired,
    gap: PropTypes.number.isRequired
}
Table.defaultProps = {
    col: 12,
    gap: 0.5,
    columns: [],
    pagination: {
        current:1,
        total_page:0,
        onChange: (page)=> {
            console.log({page})
        }
    }
}

export default Table
import React, {useEffect, useRef, useState} from 'react'
import PropTypes from 'prop-types'
import Utils from "../../../utils";
import Loading from "../loading";
import Pagination from "../pagination/Pagination";
import {PlusIcons} from "../icon";


const TableRow = (props) => {
    let {data, index, expandable} = props

    const [height, setHeight] = useState(0)
    const [collapse, setCollapse] = useState(false)
    const refRow = useRef(null)
    const refCollapse = useRef(null)

    useEffect(() => {
        if (refRow && refRow.current) {
            setHeight(refRow.current.offsetHeight)
        }
    })


    const onCollapse = (collapsed) => {
        setCollapse(collapsed)
        if (refCollapse && refCollapse.current) {

            if (collapsed) {
                if (typeof (refCollapse.current.firstChild) !== "undefined" && typeof (refCollapse.current.firstChild.offsetHeight) !== "undefined") {
                    refCollapse.current.style.height = [refCollapse.current.firstChild.offsetHeight, 'px'].join("")
                }
            } else {
                if (typeof (refCollapse.current.firstChild) !== "undefined" && typeof (refCollapse.current.firstChild.offsetHeight) !== "undefined") {
                    refCollapse.current.style.height = "0px"
                }
            }
        }
    }


    return (
        <div className={'w-full relative '}>

            {
                typeof (props.expandable) !== "undefined" && typeof (props.expandable) === "function" && true &&  (
                    height > 0 && (
                        <div style={{height: height, width: 25, left: -25}} className={' flex items-center absolute top-0'}>
                            <PlusIcons className={'cursor-pointer'} onClick={() => onCollapse(!collapse)}/>
                        </div>

                    )
                )
            }

            <div
                className={`grid ${Utils.getGridCol(props.col)} ${Utils.getGap(props.gap)} py-2 border-b border-gray-50 hover:bg-gray-50 transition duration-200 overflow-hidden`}
                ref={refRow}>
                {

                    Array.isArray(props.columns) && props.columns.map((item) => {
                        return (
                            <div
                                className={`${Utils.getSpan(typeof (item.span) !== "undefined" ? item.span : 3)} px-2 text-sm lowercase flex items-center`}>
                                <span>{typeof (item.render) !== "undefined" ? item.render(data, index) : ""}</span>
                            </div>
                        )
                    })
                }

            </div>

            {
                typeof (props.expandable) !== "undefined" && typeof (props.expandable) === "function" && true &&  (
                    <div className="w-full overflow-hidden " style={{height: 0, transition: ".2s"}} ref={refCollapse}>
                        <div className="w-full p-4 border border-gray-200">
                            {props.expandable(data,index)}
                        </div>
                    </div>
                )
            }
        </div>
    )
}
TableRow.propTypes = {}
TableRow.defaultProps = {}

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
        <div className="w-full bg-white p-8 rounded-xl relative overflow-hidden font-lexend">
            <div className="flex items-center justify-between mb-4">
                {
                    typeof (props.title) !== "undefined" ? (
                        <h3 className={'text-lg font-bold font-poppins'}>{props.title}</h3>
                    ) : <div className={'w-full'}/>
                }

                {
                    typeof (props.extra) !== "undefined" && props.extra
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
                typeof (props.loading) !== "undefined" && props.loading === true ? (
                    <Loading cover={'table'}/>
                ) : (
                    <div className="w-full">
                        {
                            typeof (props.dataSource) !== "undefined" && Array.isArray(props.dataSource) && props.dataSource.map((data, index) => {
                                return (
                                    <TableRow
                                        expandable={typeof (props.expandable) !== "undefined" && typeof(props.expandable) === "function" ? props.expandable : null}
                                        columns={props.columns} {...props} data={data} index={index}
                                        key={typeof (data.key) !== "undefined" ? data.key : `table-row-${index}`}/>
                                )
                            })
                        }
                    </div>
                )
            }

            {
                typeof (props.loading) !== "undefined" && props.loading !== true && (
                    <div className="w-full flex items-center justify-end py-4">
                        {
                            typeof (props.pagination) !== "undefined" && typeof (props.pagination) === "object" && Object.keys(props.pagination).length > 0 && (
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
    expandable: PropTypes.any.isRequired,
    pagination: PropTypes.shape({
        current: PropTypes.number.isRequired,
        total_page: PropTypes.number.isRequired,
        onChange: PropTypes.func.isRequired
    }),
    columns: PropTypes.array.isRequired,
    col: PropTypes.number.isRequired,
    gap: PropTypes.number.isRequired
}
Table.defaultProps = {
    expandable:null,
    col: 12,
    gap: 0.5,
    columns: [],
    pagination: {
        current: 1,
        total_page: 0,
        onChange: (page) => {
            console.log({page})
        }
    }
}

export default Table
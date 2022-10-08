import React from 'react'
import {withRouter} from "react-router-dom";
import {inject, observer} from "mobx-react";
import Loading from "../../../components/shared-components/loading";
import {FemaleIcons, MaleIcons} from "../../../components/shared-components/icon";
import moment from "moment";

@inject("PeopleStore")
@withRouter
@observer
export default class PeopleDetail extends React.Component{
    store = this.props.PeopleStore
    componentDidMount() {
        this.props.PeopleStore.getSingle(this.props.match.params.id)
    }



    render() {
        let store = this.store
        let { detail ,loading } = store
        let ObjectStr = {}
        let item = []
        if(detail !== null && typeof(detail) !== 'undefined' && typeof(detail) === "object" && Object.keys(detail).length > 0){
            Object.keys(detail).forEach((key)=> {
                Reflect.set(ObjectStr,key,detail[key])
            })

            delete ObjectStr.films
            delete ObjectStr.species
            delete ObjectStr.starships
            delete ObjectStr.vehicles

            if(Object.keys(ObjectStr).length > 0){
                Object.keys(ObjectStr).forEach((key)=> {
                    item.push({
                        label:key,
                        value: ObjectStr[key]
                    })
                })
            }

        }

        console.log({detail,ObjectStr})
        return loading ? <Loading cover={'page'} />: detail === null ? "tidak ada":(
            <div className={'w-full'}>
                <div className="h-40 w-full bg-cyan-400 rounded rounded overflow-hidden relative">
                    <img
                        src="https://images.unsplash.com/photo-1517732306149-e8f829eb588a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"
                        alt="image-unsplash"
                        className={'w-full object-cover h-full'}
                    />

                </div>
                <div style={{width:"90%"}} className="mx-auto relative -top-10 bg-white  rounded-xl flex gap-6 py-6 flex-nowrap px-10 h-40">
                    <div className="min-w-60 w-60 h-48 rounded-xl bg-white shadow -top-20 p-2 relative">
                        <div className="w-full overflow-hidden rounded-xl h-full">
                            <img
                                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                alt="image-unsplash"
                                className={'w-full object-cover h-full'}
                            />
                        </div>
                    </div>
                    <div className="w-full  space-y-4">
                        <div className={'flex items-center gap-2'}>
                            <h1 className={'text-2xl font-lexend font-bold'}>{typeof(detail.name) !== "undefined" ? detail.name : "-"}</h1>
                            {typeof(detail.gender) !== "undefined" && (
                                detail.gender === "male" ? <MaleIcons/> : <FemaleIcons/>
                            )}
                        </div>
                        <div>
                            {typeof(detail.created) !== "undefined" && (
                            <div className="flex items-center gap-6 font-poppins font-semibold text-sm">
                              <span className={'font-bold font-lexend'} style={{minWidth:80}}>Created At</span>
                                {detail.created !== "" && detail.created !== null && (
                                    moment(detail.created).format("DD MMMM YYYY, HH:mm a")
                                )}
                            </div>
                            )}
                            {typeof(detail.edited) !== "undefined" && (
                            <div className="flex items-center gap-6 font-poppins font-semibold text-sm">
                              <span className={'font-bold font-lexend'} style={{minWidth:80}}>Edited At</span>
                                {detail.edited !== "" && detail.edited !== null && (
                                    moment(detail.edited).format("DD MMMM YYYY, HH:mm a")
                                )}
                            </div>
                            )}

                        </div>
                        {/*{*/}
                        {/*    Array.isArray(item) && item.length > 0 &&  (*/}
                        {/*        <div className="w-full grid grid-cols-3">*/}
                        {/*            {*/}
                        {/*                item.map((item)=> {*/}
                        {/*                    return (*/}
                        {/*                        <div className="col-span-3 flex items-center gap-4">*/}
                        {/*                            {[`${item.label}`.replace(/_/g,' '),':',item.value].map((child,cidx)=> {*/}
                        {/*                                return (*/}
                        {/*                                    <span key={`col-span-1-${child}`} style={{minWidth:cidx === 0 ? "100px":0}}>{child}</span>*/}
                        {/*                                )*/}
                        {/*                            })}*/}
                        {/*                        </div>*/}
                        {/*                    )*/}
                        {/*                })*/}
                        {/*            }*/}

                        {/*        </div>*/}
                        {/*    )*/}
                        {/*}*/}
                    </div>
                </div>
                <div style={{width:"90%"}} className="mx-auto rounded-xl relative -top-4">
                    <div className="grid grid-cols-12 gap-6 w-full h-full">
                        <div className="col-span-4 w-full h-60 bg-white rounded-xl"></div>
                        <div className="col-span-8 w-full h-60 bg-white rounded-xl"></div>
                    </div>
                </div>
            </div>
        );
    }
}
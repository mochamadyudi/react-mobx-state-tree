import React from 'react'
import Table from "../../../components/shared-components/table";
import {inject, observer} from "mobx-react";
import {Link, withRouter} from "react-router-dom";
import Loading from "../../../components/shared-components/loading";
import ModalDefault from "../../../components/shared-components/modal/modal-default";
import {TrashIcon} from "../../../components/shared-components/icon";


@inject('PlanetStore')
@withRouter
@observer
export default class PlanetList extends React.Component {
    state = {
        added: false
    }

    componentDidMount() {
        this.props.PlanetStore.getPlanetList({page: 1})
        if (window) {
            let tab = new URLSearchParams(window.location.search).get("visible")
            if(tab){
                this.setState({
                    added:tab === "true"
                })
            }
        }
    }

    render() {
        const {loading, result, count, pagination, deletePlanet} = this.props.PlanetStore
        let data = this.props.PlanetStore.list()
        const {added} = this.state

        const openModalAdded = (val) => {
            if (window) {
                const urlSearch = new URLSearchParams(window.location.search)
                if (urlSearch.get('visible')) {
                    urlSearch.delete('visible')
                    urlSearch.append('visible',val)
                } else {
                    urlSearch.append('visible', val)
                }
                let query = []
                urlSearch.forEach((value, key) => {
                    query.push(`${key}=${value}`)
                })
                let newUrl = [window.origin, window.location.pathname].join("")
                window.history.pushState({article: 'read-all'}, 'Read All Article', [newUrl, query.join("&")].join("?"));
            }
            this.setState({added: val === "true"})
        }

        return (
            <div className="w-full py-10">
                <ModalDefault
                    title={'Add Planet'}
                    visible={this.state.added} onClose={({visible})=> {
                    openModalAdded(visible ? "true":"false")
                }}/>
                <Table
                    loading={loading}
                    title={'People List'}
                    extra={<div className={'flex items-center gap-4'}>
                        <button
                            type={'button'}
                            onClick={() => {
                                this.props.PlanetStore.getPlanetList({page: pagination.page})
                            }}
                            className={'px-4 py-2 transition duration-200 hover:bg-cyan-500 hover:text-white text-sm border border-cyan-500 text-cyan-500 rounded-xl'}
                        >Refresh
                        </button>
                        <button
                            onClick={()=> openModalAdded(!this.state.added ? "true":"false")}
                            type={'button'}
                                className={'px-4 py-2 transition duration-200 text-sm border border-purple-500 text-purple-500 transition duration-200 hover:bg-purple-500 hover:text-white rounded-xl'}>Add
                            Planets
                        </button>
                    </div>}
                    col={12}
                    gap={1}
                    dataSource={Array.isArray(data) && data.length > 0 ? data : []}
                    columns={[
                        {
                            key: "user",
                            title: "Name",
                            span: 1,
                            render: (item, index) => {
                                return (
                                    <div className="w-full">
                                        <span>{typeof (item.name) !== "undefined" ? item.name : "-"}</span>
                                    </div>
                                )
                            }
                        },
                        {
                            key: "climate",
                            title: "Climate",
                            span: 2,
                            render: (item, index) => {
                                return (
                                    <div className="w-full">
                                        <span>{typeof (item.climate) !== "undefined" ? item.climate : "-"}</span>
                                    </div>
                                )
                            }
                        },
                        {
                            key: "diameter",
                            title: "Diameter",
                            span: 1,
                            render: (item, index) => {
                                return (
                                    <div className="w-full">
                                        <span>{typeof (item.diameter) !== "undefined" ? item.diameter : "-"}</span>
                                    </div>
                                )
                            }
                        },
                        {
                            key: "terrain",
                            title: "Terrain",
                            span: 2,
                            render: (item, index) => {
                                return (
                                    <div className="w-full">
                                        <span>{typeof (item.terrain) !== "undefined" ? item.terrain : "-"}</span>
                                    </div>
                                )
                            }
                        },
                        {
                            key: "user",
                            title: "Gravity",
                            span: 2,
                            render: (item, index) => {
                                return (
                                    <div className="w-full">
                                        <span>{typeof (item.gravity) !== "undefined" ? item.gravity : "-"}</span>
                                    </div>
                                )
                            }
                        },
                        {
                            key: "population",
                            title: "Population",
                            span: 2,
                            render: (item, index) => {
                                return (
                                    <div className="w-full">
                                        <span>{typeof (item.population) !== "undefined" ? item.population : "-"}</span>
                                    </div>
                                )
                            }
                        },
                        {
                            key: "action",
                            title: <div className={'text-center'}>Action</div>,
                            span: 2,
                            render: (item, index) => {
                                return (
                                    <div className="flex items-center gap-2 justify-end">
                                        <button
                                            disabled={item._loading ? item._loading : false}
                                            onClick={() => this.props.PlanetStore.deletePlanet(item._id)}
                                            type={'button'} className={`
                                            ${item._loading ?
                                            "text-gray-500 border border-gray-500 bg-gray-200 hover:bg-gray-100 hover:text-gray-400 hover:border-gray-400 cursor-not-allowed"
                                            :
                                            "hover:bg-red-500 hover:text-white border border-red-500 text-red-500"
                                        }
                                            px-2 py-2 transition duration-200 text-sm rounded-lg group
                                            `}>
                                            <div className="flex items-center gap-2">
                                                {item._loading ? <Loading cover={'icon'}/> : <TrashIcon className={'fill-red-500 text-red-500 stroke-red-200 transition duration-200 group-hover:fill-white group-hover:text-white group-hover:stroke-white'}/>}
                                            </div>
                                        </button>
                                    </div>
                                )
                            }
                        },

                    ]}
                />
            </div>
        )
    }
}
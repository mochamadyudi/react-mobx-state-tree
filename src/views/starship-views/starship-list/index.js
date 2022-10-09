import React from 'react'
import PropTypes from 'prop-types'
import {inject, observer} from "mobx-react";
import {Link, withRouter} from "react-router-dom";
import Table from "../../../components/shared-components/table";
import Loading from "../../../components/shared-components/loading";
import {EyeIcons, TrashIcon} from "../../../components/shared-components/icon";
import moment from "moment";
import Container from "../../../components/layout-components/Container";
import FormAddPlanet from "../../../components/layout-components/form-custom/FormAddPlanet";
import ModalDefault from "../../../components/shared-components/modal/modal-default";

@inject("StarshipStore")
@withRouter
@observer
export default class StarshipList extends React.Component {
    store = this.props.StarshipStore
    state = {
        added: false
    }

    componentDidMount() {
        this.store.getList({page: 1})

        if (window) {
            let tab = new URLSearchParams(window.location.search).get("visible")
            if(tab){
                this.setState({
                    added:tab === "true"
                })
            }
        }

    }

    getData() {
        return this.store._list()
    }

    handlePagination(page) {
        this.store.getList({page})
    }

    onRefresh(page) {
        this.store.getList({page})
    }

    onChangeAdded() {
        this.setState({
            added: !this.state.added
        })
    }

    openModal(val) {
        if (window) {
            const urlSearch = new URLSearchParams(window.location.search)
            if (urlSearch.get('visible')) {
                urlSearch.delete('visible')
                urlSearch.append('visible', val)
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

    onDelete(id) {
        this.store.delete(id)
    }

    render() {
        let data = this.getData()
        let {loading, pagination} = this.store

        return (
            <Container size={'xl'}>

                <ModalDefault
                    title={'Add Starship'}
                    visible={this.state.added}
                    onClose={({visible})=> this.openModal(visible ? "true":"false")}
                >
                    <div>
                        <FormAddPlanet onSuccess={()=> {
                            this.openModal("false")
                        }}/>
                    </div>
                </ModalDefault>
                <div className="w-full py-10">
                    <Table
                        loading={loading}
                        title={'Starship List'}
                        pagination={{
                            current: typeof (pagination.page) !== "undefined" ? pagination.page : 1,
                            total_page: typeof (pagination.total_page) !== "undefined" ? pagination.total_page : 0,
                            onChange: ({page}) => {
                                this.handlePagination(page)
                            }
                        }}
                        expandable={function (val, index) {
                            return (
                                <div>
                                    <Table
                                        className={'w-full border border-gray-300 p-4 rounded-xl overflow-hidden'}
                                        loading={loading}
                                        title={''}
                                        expandable={null}
                                        col={12}
                                        gap={1}
                                        dataSource={Array.isArray([{...val}]) && [{...val}].length > 0 ? [{...val}] : []}
                                        columns={[
                                            {
                                                key: "model",
                                                title: "Model",
                                                span: 2,
                                                render: (item, index) => {
                                                    return (
                                                        <div className="w-full">
                                                            <span>{typeof (item.model) !== "undefined" ? item.model : "-"}</span>
                                                        </div>
                                                    )
                                                }
                                            },
                                            {
                                                key: "MGLT",
                                                title: "MGLT",
                                                span: 1,
                                                render: (item, index) => {
                                                    return (
                                                        <div className="w-full">
                                                            <span>{typeof (item.MGLT) !== "undefined" ? item.MGLT : "-"}</span>
                                                        </div>
                                                    )
                                                }
                                            },
                                            {
                                                key: "max_atmosphering_speed",
                                                title: "Speed",
                                                span: 1,
                                                render: (item, index) => {
                                                    return (
                                                        <div className="w-full">
                                                            <span>{typeof (item.max_atmosphering_speed) !== "undefined" ? item.max_atmosphering_speed : "-"}</span>
                                                        </div>
                                                    )
                                                }
                                            },
                                            {
                                                key: "pilots",
                                                title: "Pilots",
                                                span: 1,
                                                render: (item, index) => {
                                                    return (
                                                        <div className="w-full">
                                                            <span>{typeof (item.pilots) !== "undefined" ? Array.isArray(item.pilots.toJSON()).length > 0 ? item.pilots.toJSON().length :0 : "-"}</span>
                                                        </div>
                                                    )
                                                }
                                            },
                                            {
                                                key: "created",
                                                title: "Created At",
                                                span: 3,
                                                render: (item, index) => {
                                                    return (
                                                        <div className="w-full">
                                                            <span>{typeof (item.created) !== "undefined" ? item.created !== null && item.created !== "" ? moment(item.created).format("DD MMMM YYYY, HH:mm a") : "-" : "-"}</span>
                                                        </div>
                                                    )
                                                }
                                            },
                                            {
                                                key: "edited",
                                                title: "Edited At",
                                                span: 3,
                                                render: (item, index) => {
                                                    return (
                                                        <div className="w-full">
                                                            <span>{typeof (item.edited) !== "undefined" ? item.edited !== null && item.edited !== "" ? moment(item.edited).format("DD MMMM YYYY, HH:mm a") : "-" : "-"}</span>
                                                        </div>
                                                    )
                                                }
                                            },
                                        ]}
                                    />
                                </div>
                            )
                        }}
                        extra={<div className={'flex items-center gap-4'}>
                            <button
                                type={'button'}
                                onClick={() => {
                                    this.onRefresh({page: pagination.page})
                                }}
                                className={'px-4 py-2 transition duration-200 hover:bg-gray-500 hover:text-white text-sm border border-gray-500 text-gray-500 rounded-xl'}
                            >Refresh
                            </button>
                            <button
                                onClick={() => this.openModal(!this.state.added ? "true" : "false")}
                                type={'button'}
                                className={'px-4 py-2 transition duration-200 text-sm border border-yellow-500 text-yellow-500 transition duration-200 hover:bg-yellow-500 hover:text-white rounded-xl'}>Add
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
                                span: 2,
                                render: (item, index) => {
                                    return (
                                        <div className="w-full">
                                            <span>{typeof (item.name) !== "undefined" ? item.name : "-"}</span>
                                        </div>
                                    )
                                }
                            },
                            {
                                key: "manufacturer",
                                title: "Manufacture",
                                span: 2,
                                render: (item, index) => {
                                    return (
                                        <div className="w-full">
                                            <span>{typeof (item.manufacturer) !== "undefined" ? item.manufacturer : "-"}</span>
                                        </div>
                                    )
                                }
                            },
                            {
                                key: "crew",
                                title: "Crew",
                                span: 1,
                                render: (item, index) => {
                                    return (
                                        <div className="w-full">
                                            <span>{typeof (item.crew) !== "undefined" ? item.crew : "-"}</span>
                                        </div>
                                    )
                                }
                            },
                            {
                                key: "starship_class",
                                title: "Class",
                                span: 2,
                                render: (item, index) => {
                                    return (
                                        <div className="w-full">
                                            <span>{typeof (item.starship_class) !== "undefined" ? item.starship_class : "-"}</span>
                                        </div>
                                    )
                                }
                            },
                            {
                                key: "consumables",
                                title: "Consumables",
                                span: 2,
                                render: (item, index) => {
                                    return (
                                        <div className="w-full">
                                            <span>{typeof (item.consumables) !== "undefined" ? item.consumables : "-"}</span>
                                        </div>
                                    )
                                }
                            },
                            {
                                key: "hyperdrive_rating",
                                title: "Rating",
                                span: 1,
                                render: (item, index) => {
                                    return (
                                        <div className="w-full">
                                            <span>{typeof (item.hyperdrive_rating) !== "undefined" ? item.hyperdrive_rating : "-"}</span>
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
                                            <Link to={`/starship/p/${item.id}`}>
                                                <button
                                                    type={'button'}
                                                    className={'px-2 py-2 transition duration-200 text-sm rounded-lg group border border-gray-400'}
                                                >
                                                    <EyeIcons className={'fill-gray-400 w-6 h-6'}/>
                                                </button>
                                            </Link>
                                            <button
                                                disabled={item._loading ? item._loading : false}
                                                onClick={() => this.onDelete(item._id)}
                                                type={'button'} className={`
                                            ${item._loading ?
                                                "text-gray-500 border border-gray-500 bg-gray-200 hover:bg-gray-100 hover:text-gray-400 hover:border-gray-400 cursor-not-allowed"
                                                :
                                                "hover:bg-red-500 hover:text-white border border-red-500 text-red-500"
                                            }
                                            px-2 py-2 transition duration-200 text-sm rounded-lg group
                                            `}>
                                                <div className="flex items-center gap-2">
                                                    {item._loading ? <Loading cover={'icon'}/> : <TrashIcon
                                                        className={'fill-red-500 text-red-500 stroke-red-200 transition duration-200 group-hover:fill-white group-hover:text-white group-hover:stroke-white'}/>}
                                                </div>
                                            </button>
                                        </div>
                                    )
                                }
                            },

                        ]}
                    />

                </div>
            </Container>

        )
    }
}
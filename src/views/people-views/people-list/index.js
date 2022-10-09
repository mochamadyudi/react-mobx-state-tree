import React, {useEffect, useState} from 'react'
import Table from "../../../components/shared-components/table";
import {inject, observer} from "mobx-react";
import {Link, useHistory, withRouter} from "react-router-dom";
import Loading from "../../../components/shared-components/loading";
import {EyeIcons, PencilIcons, TrashIcon} from "../../../components/shared-components/icon";
import ModalDefault from "../../../components/shared-components/modal/modal-default";
import FormAddPlanet from "../../../components/layout-components/form-custom/FormAddPlanet";
import FormAddPeople from "../../../components/layout-components/form-custom/FormAddPeople";

@inject("PeopleStore")
@withRouter
@observer
export default class PeopleList extends React.Component{
    state = {
        added:false,
        selected:null,
        mode:"add"
    }
    componentDidMount() {
        this.props.PeopleStore.getPeopleList({page:1})

        if (window) {
            let tab = new URLSearchParams(window.location.search).get("visible")
            if(tab){
                this.setState({
                    added:tab === "true"
                })
            }
        }

    }

    onDeletePeople (id){
        this.props.PeopleStore.deletePeople(id)
    }
    onChangePagination(page){
        this.props.PeopleStore.getPeopleList({page:page})
    }

    onRefresh(page){
        this.props.PeopleStore.getPeopleList({page:page})
    }

    onOpenModal(val){
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




    render(){
        let { pagination,loading} = this.props.PeopleStore
        let data = this.props.PeopleStore._getList()

        console.log(this.state)

        return (
            <div className="w-full py-10">
                <ModalDefault
                    title={this.state.mode === "add"? `Add People` : 'Update People'}
                    visible={this.state.added}
                    onClose={({visible})=> this.onOpenModal(visible ? "true":"false")}
                >
                    {
                        this.state.added && (
                            <div>
                                <FormAddPeople
                                    mode={this.state.mode}
                                    initialValue={this.state.selected !== null ? this.state.selected : null}
                                    onSuccess={()=> {
                                        this.setState({
                                            ...this.state,
                                            selected:null
                                        })
                                        this.onOpenModal("false")
                                    }}/>
                            </div>
                        )
                    }

                </ModalDefault>


                <Table
                    loading={loading}
                    title={'People List'}
                    expandable={(val,index)=> {
                        return (
                            <div className="w-full">
                                <h1>testing</h1>
                            </div>
                        )
                    }}
                    pagination={{
                        current:typeof(pagination.page) !== "undefined" ? pagination.page : 1,
                        total_page:typeof(pagination.total_page) !== "undefined" ? pagination.total_page : 0,
                        onChange: ({page})=> {
                            this.onChangePagination(page)
                        }
                    }}
                    extra={<div className={'flex items-center gap-4'}>
                        <button
                            type={'button'}
                            onClick={() => {
                                this.onRefresh(pagination.page)
                            }}
                            className={'px-4 py-2 transition duration-200 hover:bg-gray-500 hover:text-white text-sm border border-gray-500 text-gray-500 rounded-xl'}
                        >Refresh
                        </button>
                        <button
                            onClick={()=> {
                                this.setState({
                                    mode:"add",
                                })
                                this.onOpenModal(!this.state.added ? "true":"false")
                            }}
                            type={'button'}
                            className={'px-4 py-2 transition duration-200 text-sm border border-cyan-500 text-cyan-500 transition duration-200 hover:bg-cyan-500 hover:text-white rounded-xl'}>Add
                            People
                        </button>
                    </div>}
                    col={12}
                    gap={1}
                    dataSource={Array.isArray(data) && data.length > 0 ? data : []}
                    columns={[
                        {
                            key: "user",
                            title: "Name",
                            span: 3,
                            render: (item, index) => {
                                return (
                                    <div className="w-full">
                                        <span>{typeof (item.name) !== "undefined" ? item.name : "-"}</span>
                                    </div>
                                )
                            }
                        },
                        {
                            key: "gender",
                            title: "Gender",
                            span: 1,
                            render: (item, index) => {
                                return (
                                    <div className="w-full">
                                        <span>{typeof (item.gender) !== "undefined" ? item.gender : "-"}</span>
                                    </div>
                                )
                            }
                        },
                        {
                            key: "eye-color",
                            title: "Eye Color",
                            span: 1,
                            render: (item, index) => {
                                return (
                                    <div className="w-full">
                                        <span>{typeof (item.eye_color) !== "undefined" ? item.eye_color : "-"}</span>
                                    </div>
                                )
                            }
                        },
                        {
                            key: "hair-color",
                            title: "Hair Color",
                            span: 2,
                            render: (item, index) => {
                                return (
                                    <div className="w-full">
                                        <span>{typeof (item.hair_color) !== "undefined" ? item.hair_color : "-"}</span>
                                    </div>
                                )
                            }
                        },
                        {
                            key: "skin-color",
                            title: "Skin Color",
                            span: 2,
                            render: (item, index) => {
                                return (
                                    <div className="w-full">
                                        <span>{typeof (item.skin_color) !== "undefined" ? item.skin_color : "-"}</span>
                                    </div>
                                )
                            }
                        },
                        {
                            key: "mass",
                            title: "Mass",
                            span: 1,
                            render: (item, index) => {
                                return (
                                    <div className="w-full">
                                        <span>{typeof (item.mass) !== "undefined" ? item.mass : "-"}</span>
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
                                    <div className="flex items-center gap-2 justify-end w-full">
                                        <div className="flex items-center gap-2">
                                            <Link to={`/people/p/${item.id}`}>
                                                <button
                                                    type={'button'}
                                                    className={'px-2 py-2 transition duration-200 text-sm rounded-lg group border border-gray-400'}
                                                >
                                                    <EyeIcons className={'fill-gray-400 w-6 h-6'}/>
                                                </button>
                                            </Link>
                                            <button
                                                type={'button'}
                                                onClick={()=> {
                                                    this.setState({
                                                        ...this.state,
                                                        selected:item,
                                                        mode:'update'
                                                    })
                                                    this.onOpenModal('true')

                                                }}
                                                className={'px-2 py-2 transition duration-200 text-sm rounded-lg group border border-gray-400'}
                                            >
                                                <PencilIcons className={'fill-gray-500'}/>
                                            </button>


                                            <button
                                                disabled={item._loading ? item._loading : false}
                                                onClick={() => this.onDeletePeople(item._id)}
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

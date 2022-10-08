import React, {useEffect, useState} from 'react'
import Table from "../../../components/shared-components/table";
import {inject, observer} from "mobx-react";
import {withRouter} from "react-router-dom";
import Loading from "../../../components/shared-components/loading";
import {TrashIcon} from "../../../components/shared-components/icon";

@inject("PeopleStore")
@withRouter
@observer
export default class PeopleList extends React.Component{
    state = {
        added:false
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
        console.log({data})
        return (
            <div className="w-full py-10">
                <Table
                    loading={loading}
                    title={'Planet List'}
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
                            className={'px-4 py-2 transition duration-200 hover:bg-cyan-500 hover:text-white text-sm border border-cyan-500 text-cyan-500 rounded-xl'}
                        >Refresh
                        </button>
                        <button
                            onClick={()=> this.onOpenModal(!this.state.added ? "true":"false")}
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
                            key: "action",
                            title: <div className={'text-center'}>Action</div>,
                            span: 2,
                            render: (item, index) => {
                                return (
                                    <div className="flex items-center gap-2 justify-end">
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
                                )
                            }
                        },

                    ]}
                />
            </div>
        )
    }
}

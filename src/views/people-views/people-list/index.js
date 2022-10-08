import React from 'react'
import Table from "../../../components/shared-components/table";


// const PeopleList = ()=> {
//
// }

export default class PeopleList extends React.Component{
    state={
        loading:true
    }

    componentDidMount() {
        setTimeout(()=> {
            this.setState({loading:false})
        },2000)
    }

    render(){
        return (
            <div className="w-full py-10">
                <Table
                    loading={this.state.loading}
                    title={'People List'}
                    extra={<div className={'flex items-center gap-4'}>
                        <button type={'button'} className={'px-4 py-2 transition duration-200 hover:bg-cyan-500 hover:text-white text-sm border border-cyan-500 text-cyan-500 rounded-xl'}>Add People</button>
                    </div>}
                    col={12}
                    gap={2}
                    dataSource={[
                        {name:'yudi',age:22},
                        {name:'andri',age:23},
                        {name:'dini',age:18},
                        {name:'dini',age:18},
                        {name:'dini',age:18},
                        {name:'dini',age:18},
                        {name:'dini',age:18},
                        {name:'dini',age:18},
                        {name:'dini',age:18},
                    ]}
                    columns={[
                        {
                            key:"user",
                            title:"No",
                            span:1,
                            render: (item,index)=> {
                                return (
                                    <div className="w-full">
                                        <span>{index + 1}</span>
                                    </div>
                                )
                            }
                        },
                        {
                            key:"user",
                            title:"Name",
                            span:2,
                            render: (item,index)=> {
                                return (
                                    <div className="w-full">
                                        <span>{item.name}</span>
                                    </div>
                                )
                            }
                        },
                        {
                            key:"user",
                            title:"Age",
                            span:2,
                            render: (item,index)=> {
                                return (
                                    <div className="w-full">
                                        <span>{item.age}</span>
                                    </div>
                                )
                            }
                        },
                        {
                            key:"user",
                            title:"",
                            span:5,
                        },
                        {
                            key:"user",
                            title:"Action",
                            span:2,
                            render: ()=> {
                                return (
                                    <div className="flex items-center gap-2">
                                        <button type={'button'} className={'px-4 py-2 transition duration-200 hover:bg-red-500 hover:text-white text-sm border border-red-500 text-red-500 rounded-xl'}>Delete</button>
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
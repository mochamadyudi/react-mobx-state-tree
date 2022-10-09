import React, {useEffect, useRef} from 'react'
import Container from "../../../components/layout-components/Container";
import {inject, observer} from "mobx-react";
import {withRouter} from "react-router-dom";
import moment from "moment";
@inject("StarshipStore")
@withRouter
@observer
export default class StarshipDetail extends React.Component {

    componentDidMount() {
        this.props.StarshipStore.getDetail(this.props.match.params.id)
    }

    render() {
        let {detail,loading } = this.props.StarshipStore

        return (
            <div className="w-full bg-black yid-theme-space relative" style={{minHeight: "calc(100vh - 60px)"}}>
                <div className="yid-theme-space-images overflow-hidden">
                    <img src="/img/earth.png" alt="image earth" className={'w-96 object-contain'}/>
                </div>
                <Container size={'lg'}>
                    <div className={'relative z-10 h-full pt-60 space-y-6 text-center '}>
                        <div className={'w-full space-y-4'}>
                            <h1 className={'text-white text-5xl font-bold font-worksans'}>{typeof (detail.name) !== "undefined" ? detail.name :"-"}</h1>
                            <p className={'text-white'}>{typeof(detail.model) !== "undefined" ? detail.model : "-"}</p>
                        </div>
                        <div className="">
                            <div className="grid grid-cols-3 gap-6">
                                <div className="col-span-1 p-4 border border-white rounded-xl h-40 space-y-2 flex flex-col">
                                    <h3 className={'font-bold font-poppins text-lg text-white'}>Crew</h3>
                                    <div className={'h-full w-full flex items-center justify-center'}>
                                        <span className={'text-white text-lg'}>{typeof(detail.crew) !== "undefined" ? detail.crew : "-"}</span>
                                    </div>
                                </div>
                                <div className="col-span-1 p-4 border border-white rounded-xl h-40 space-y-2 flex flex-col">
                                    <h3 className={'font-bold font-poppins text-lg text-white'}>Max Atmosphering Speed</h3>
                                    <div className={'h-full w-full flex items-center justify-center'}>
                                        <span className={'text-white text-lg'}>{typeof(detail.max_atmosphering_speed) !== "undefined" ? detail.max_atmosphering_speed : "-"}</span>
                                    </div>
                                </div>
                                <div className="col-span-1 p-4 border border-white rounded-xl h-40 space-y-2 flex flex-col">
                                    <h3 className={'font-bold font-poppins text-lg text-white'}>Starship Class</h3>
                                    <div className={'h-full w-full flex items-center justify-center'}>
                                        <span className={'text-white text-lg'}>{typeof(detail.starship_class) !== "undefined" ? detail.starship_class : "-"}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 w-full py-4">
                            <span className={"text-white font-worksans text-lg"}>{typeof(detail.created) !== "undefined" && detail.created !== "" && detail.created !== null ? moment(detail.created).format('DD MMMM YYYY, HH:mm a'):"-"}</span>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
}
import React from 'react'
import PropTypes from 'prop-types'
import CardAnalytics from '../../components/shared-components/card/card-analytics'
import Container from '../../components/layout-components/Container'
import {Link} from "react-router-dom";

const Home = (props) => {
    return (
        <div className='w-full bg-white min-h-[calc(100vh-60px)]'>
            <Container size={'xl'}>
                <div className='flex flex-col h-[700px] w-full justify-center'>
                    <div className='grid grid-cols-12 gap-4 h-full w-full'>
                        <div className='col-span-6 h-full flex items-center justify-center'>
                            <div className={'space-y-4'}>
                                <h1 className={'font-lexend !font-bold text-5xl'}>Moonlay Academy</h1>
                                <h3 className={'font-poppins !font-semibold text-xl'}>Mid Frontend Technical Test</h3>



                                <ul className="text-sm text-gray-500 font-worksans">
                                    {
                                        [
                                            {
                                                label: "Author",
                                                value: "Mochamad Yudi Sobari",
                                                url: null,
                                                target: null
                                            },
                                            {
                                                label: "Email",
                                                value: "myudisobari12@gmail.com",
                                                url: "mailto:myudisobari12@gmail.com",
                                                target: "_self"
                                            },
                                            {
                                                label: "Github",
                                                value: "mochamadyudi",
                                                url: "https://github.com/mochamadyudi",
                                                target: "_blank"
                                            },
                                            {
                                                label: "Phone Number",
                                                value: "+6285718851007",
                                                url: "https://wa.me/085718851007",
                                                target: "_blank"
                                            }
                                        ].map((item)=> {
                                            return(
                                                <li className={'flex items-center gap-4 mb-1'}>
                                                    <div style={{minWidth:"120px"}}>
                                                        <span>{item.label}</span>
                                                    </div>
                                                    <div><span>:</span></div>
                                                    <div>
                                                        {
                                                            item.url !== null ?
                                                                (
                                                                    <a href={item.url} target={item.target}>
                                                                        <span className={'text-cyan-500'}>{item.value}</span>
                                                                    </a>
                                                                ):
                                                                <span>{item.value}</span>
                                                        }
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>



                                <div className={'flex items-center gap-4 py-4'}>
                                    <Link to={'/people/add?visible=true'}>
                                        <button title={'add-people'}
                                                className={'lowercase border border-cyan-500 text-cyan-500 transition duration-200 hover:bg-cyan-500 hover:text-white font-poppins  px-4 py-2 rounded-xl'}>Add
                                            People
                                        </button>
                                    </Link>
                                    <Link to={'/planet/add?visible=true'}>
                                        <button title={'add-planet'}
                                                className={'lowercase border border-purple-500 text-purple-500 transition duration-200 hover:bg-purple-500 hover:text-white font-poppins  px-4 py-2 rounded-xl'}>Add
                                            Planet
                                        </button>
                                    </Link>
                                    <Link to={'/starship/add?visible=true'}>
                                        <button title={'add-starship'}
                                                className={'lowercase border border-yellow-500 text-yellow-500 transition duration-200 hover:bg-yellow-500 hover:text-white font-poppins  px-4 py-2 rounded-xl'}>Add
                                            Starship
                                        </button>
                                    </Link>
                                </div>



                            </div>
                        </div>
                        <div className='col-span-6 h-full flex items-center justify-center'>
                            <img
                                src='/img/developer.png'
                                alt='image-unsplash' className={'w-full object-contain'}/>
                        </div>
                    </div>
                </div>
            </Container>
            {/*<div className='grid grid-cols-3 gap-4 w-full'>*/}
            {/*  {[0,1,3].map((item,index)=> {*/}
            {/*    return (*/}
            {/*      <div className='col-span-1'>*/}
            {/*        <CardAnalytics*/}
            {/*          title={'People'}*/}
            {/*          subTitle={'Total People'}*/}
            {/*          total={100}*/}
            {/*        />*/}
            {/*      </div>*/}
            {/*    )*/}
            {/*  })}*/}
            {/*</div>*/}
        </div>
    )
}

export default Home
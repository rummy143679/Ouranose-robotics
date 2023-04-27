import React from 'react'
import './Content.css'
import ContentLeft from '../contentLeft/ContentLeft'
import ContentRight from '../contentRight/ContentRight'
import SearchBar from '../searchbar/SearchBar'


export default function Content() {
    return (
        <div className='content row m-0'>
            <div className='col-md-4'>
                <div className="col-md-12 col-sm-12">
                    <SearchBar />
                </div>
                <div className='content-left'>
                    <ContentLeft />
                </div>
            </div>
            <div className='col-md-8 m-0'>
                <ContentRight />
            </div>
        </div>
    )
}
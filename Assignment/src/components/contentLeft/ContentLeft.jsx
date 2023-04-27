import React from 'react'
import './ContentLeft.css'
import SearchBar from '../searchbar/SearchBar'
import CategoryList from '../categoryList/CategoryList'
import TopPosts from '../topPosts/TopPosts'

export default function ContentLeft() {
    return (
        <div className='row'>
            <div className='col-md-12 col-sm-12'>
                <CategoryList />
            </div>
            <div className='col-md-12 col-sm-12'>
                <TopPosts />
            </div>
        </div>
    )
}

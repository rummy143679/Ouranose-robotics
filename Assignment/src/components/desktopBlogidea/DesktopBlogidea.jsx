import React from 'react'
import ShareOrBack from '../ShareOrBack/ShareOrBack'
import ContentLeft from '../contentLeft/ContentLeft'
import Blogs from '../blogs/Blogs'
import Comments from '../comments/Comments'
import CategoryList from '../categoryList/CategoryList'
import TopPosts from '../topPosts/TopPosts'

export default function DesktopBlogidea() {
    return (
        <div className='row'>
            <div className="col-md col-sm-12">
                <ShareOrBack />
            </div>
            <div className="col-md-8">
                <Blogs />
            </div>
            <div className='col-md-4'>
                <div className='skip-on-mob'>
                    < CategoryList />
                    <TopPosts />
                </div>
                <div>
                    <Comments />
                </div>
            </div>
        </div >
    )
}

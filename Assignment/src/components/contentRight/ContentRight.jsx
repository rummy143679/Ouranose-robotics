import React, { useEffect, useState } from 'react'
import data from '../data/data'
import './ContentRight.css'
import RecentPost from '../recentPost/RecentPost'
import Pagination from '../pagination/Pagination'

export default function ContentRight() {
    const [cardData, setCardData] = useState(data)
    const [perPage, setPerPage] = useState([])

    useEffect(() => {
        setPerPage(() => cardData.slice(0, 6))

    }, [cardData])

    function pageHandler(pageNumber) {
        
    }

    const cardElements = perPage.map(card => <RecentPost key={card.id} {...card} />)
    return (
        <div className="row">
            {
                cardElements
            }
            <div className='col-md-12 ms-4'>
                <Pagination totalData={cardData.length} pageHandler={pageHandler} />
            </div>
        </div>
    )
}

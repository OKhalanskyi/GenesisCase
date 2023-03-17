import React, { useContext, useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'app/store/store'
import { PaginationContext } from 'utils/context/pagination.context'

const PaginationBar = () => {
    const context = useContext(PaginationContext)
    const navigate = useNavigate()

    return (
        <div style={{ marginTop: '200px', backgroundColor: 'black' }}>
            <Pagination
                page={context.currentPage}
                onChange={(event, page) => {
                    navigate(`?page=${page}`)
                }}
                count={context.totalPages}
                size="large"
            />
        </div>
    )
}

export default PaginationBar

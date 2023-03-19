import React, { useContext, useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store/store'
import { PaginationContext } from '../../utils/context/pagination.context'
import styles from './paginationBar.module.scss'

const PaginationBar = () => {
    const context = useContext(PaginationContext)
    const navigate = useNavigate()

    return (
        <div className={styles.paginationBarBlock}>
            <Pagination
                color="primary"
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

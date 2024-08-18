import React from 'react'
import cx from 'classnames'
import s from '../../FoodPlan.js/FoodPlan.module.css'

const DateTabCard = ({ data }) => {
    return (
        <>
            {data?.day && <div className={cx(s.dateBox,'dateBox')}>
                <span className={s.dayName}>{data?.day}</span>
                <span className={s.date}>{data?.date}</span>
            </div>
            }
        </>
    )
}

export default DateTabCard

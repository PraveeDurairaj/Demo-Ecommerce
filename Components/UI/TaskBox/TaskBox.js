import React from 'react'
import cx from 'classnames'
import s from './TaskBox.module.css'

const TaskBox = ({data}) => {
    return (
        <div className={cx(s.taskBox,data?.status == 'done' ? s.doneBox : data?.status == 'InProcess' ? s.inprocessBox : s.defaultBox)}>
            <h6 className={s.taskTitle}>{data?.day}</h6>
            <p className={cx(s.taskDay,data?.status == 'done' ? s.doneHeader : data?.status == 'InProcess' ? s.inprocessHeader : s.defaultHeader)}>{data?.class}</p>
            <ul className={s.taskList}>
                {
                    data?.workoutList?.map((item) => {
                        return (
                            <li className={cx(s.listItem,data?.status == 'done' ? s.success : data?.status == 'InProcess' ? s.inprocessListItem : s.defaultListItem,[item?.faild && s.faild])} key={item?.id}><span>{item.workoutName}</span><span className={s.setCount}>{item.set}</span></li>
                        )
                    })
                }

            </ul>
        </div>
    )
}

export default TaskBox

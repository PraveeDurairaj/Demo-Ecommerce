import React from 'react'
import cx from 'classnames'
import s from './TodoCard.module.css';
const TodoCard = ({ foodData }) => {
  let total = 0;
  const arry = foodData?.foodListItem;
  arry?.forEach(element => {
    total += element.colories
    if (element.failed) {
      total -= element.colories
    }

  });
  console.log(foodData?.total)

 return (
    <div className={cx(s.todoBox, [foodData?.status == 'InProcess' ? s.inProcess : foodData?.status == 'Done' ? s.done : s.todo])}>
      <p className={s.todoHeader}>{foodData?.Lanch}</p>
      <ul className={s.taskList}>
        {
          foodData?.foodListItem?.map((data) => {
            return (
              <li className={cx(s.listItem, [data?.failed && s.faildTask])}>
                <span>{data?.item}</span>
                <span className={s.setCount}>{data?.quntity}</span>
                <span className={cx(s.setCount, s.calColor)}>{data?.colories}cal</span>
              </li>
            )
          })
        }
      </ul>
      <span className={s.total}>{total}cal</span>
    </div>
  )
}

export default TodoCard

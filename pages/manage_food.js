import AdminHeader from '@/Components/AdminHeader/AdminHeader'
import FoodPlan from '@/Components/FoodPlan.js/FoodPlan'
import React from 'react'


const Manage_food = () => {
  return (
    <div>
      <AdminHeader>
        <FoodPlan/>
      </AdminHeader>
    </div>
  )
}

export default  Manage_food

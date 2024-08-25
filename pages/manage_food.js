import React from 'react'
import AdminHeader from '@/Components/AdminHeader/AdminHeader'
import FoodPlan from '@/Components/FoodPlan.js/FoodPlan'
import client from "../config/contentful"

export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: 'foodPlanTable' })
  return {
    props: {
      foodPlanTable: response.items
    }
  }
}

const Manage_food = ({foodPlanTable}) => {
  console.log(foodPlanTable)
  return (
    <div>
      <AdminHeader>
        {
          foodPlanTable?.map((data)=>{
            return(
              <FoodPlan foodPlan={data?.fields?.foodPlan} date={data?.fields?.date}/>
            )
          })
        }
       
      </AdminHeader>
    </div>
  )
}

export default  Manage_food

import React from 'react'
import AdminHeader from '@/Components/AdminHeader/AdminHeader'
import Admin from '@/Components/Admin/Admin';
import client from "../config/contentful"

export const getStaticProps = async () => {
    const response = await client.getEntries({ content_type: 'workoutPlanTable' })
    return {
      props: {
        workoutPlanTable: response.items
      }
    }
  }
const Manage_food = ({workoutPlanTable}) => {

    return (
        <div>
            <AdminHeader>
            <h1 className='AdminHeading marginLeft12'>Manage Workout</h1>
                {
                   workoutPlanTable?.map((data)=>{
                    return(
                        <Admin planData={data?.fields?.dayWorkout[0]} /> 
                    )
                   }) 
                }
            </AdminHeader>
        </div>
    )
}

export default Manage_food
import React from 'react'
import AdminHeader from '@/Components/AdminHeader/AdminHeader'
import Admin from '@/Components/Admin/Admin';
import weekly from '../Helper/WeeklyPlan.json';


const Manage_food = () => {
    const [week1, week2] = weekly;
    return (
        <div>
            <AdminHeader>
                <Admin planData={week1} />
            </AdminHeader>
        </div>
    )
}

export default Manage_food
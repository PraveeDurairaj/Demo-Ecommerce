import React from 'react'
import AdminHeader from "@/Components/AdminHeader/AdminHeader";
import Dashboard from "@/Components/Dashboard/Dashboard";

const dashboard = () => {
  return (
    <div>
      <AdminHeader>
          <Dashboard/>
        </AdminHeader>
    </div>
  )
}

export default dashboard

import React from 'react';
import Table from 'react-bootstrap/Table';
import s from './Admin.module.css'
import { Container } from 'react-bootstrap';
import TaskBox from '../UI/TaskBox/TaskBox';
import weekly from '../../Helper/weeklyPlan';

function Admin({planData}) {

    return (
        <Container>
            <div className={s.workoutMainContainer}>
            <h2 className={s.workOutPlanHeader}>{planData[0]?.date}</h2>
            <Table striped responsive>
                <thead>
                    <tr>
                { planData[0]?. headingList?.map((data,index)=>  <th key={index} className={s.taskHeading}>{data}</th> )}
                       
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={s.taskBoxContainer}>
                                {
                                    planData?.map((data) => data?.status == "Todo" && <TaskBox data={data} key={data?.id} />)
                                }
                            </div>
                        </td>
                        <td>
                            <div className={s.taskBoxContainer}>
                                {
                                    planData?.map((data) => data?.status == "InProcess" && <TaskBox data={data} key={data?.id} />)
                                }
                            </div>
                        </td>
                        <td>
                            <div className={s.taskBoxContainer}>
                                {
                                    planData?.map((data) => data?.status == "done" && <TaskBox data={data} key={data?.id} />)
                                }
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>
            </div>
        </Container>
    );
}

export default Admin;
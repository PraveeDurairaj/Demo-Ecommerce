import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import s from './Admin.module.css'
import { Container, Row, Col } from 'react-bootstrap';
import TaskBox from '../UI/TaskBox/TaskBox';

function Admin({ planData }) {

    return (
        <Container>
            <div className={s.workoutMainContainer}>
                <h2 className={s.workOutPlanHeader}>{planData[0]?.date}</h2>
                <Row className='rowGap'>
                    <Col xs={12} sm={12} md={4} lg={4}> <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Todo</Accordion.Header>
                            <Accordion.Body>
                            <div className={s.taskBoxContainer}>
                                    {
                                        planData?.map((data) => data?.status == "Todo" && <TaskBox data={data} key={data?.id} />)
                                    }
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion></Col>
                    <Col xs={12} sm={12}  md={4} lg={4}> <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>InProcess</Accordion.Header>
                            <Accordion.Body>
                            <div className={s.taskBoxContainer}>
                                    {
                                        planData?.map((data) => data?.status == "InProcess" && <TaskBox data={data} key={data?.id} />)
                                    }
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion></Col>
                    <Col xs={12} sm={12} md={4} lg={4}> <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Done</Accordion.Header>
                            <Accordion.Body>
                            <div className={s.taskBoxContainer}>
                                    {
                                        planData?.map((data) => data?.status == "done" && <TaskBox data={data} key={data?.id} />)
                                    }
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion></Col>

                </Row>
            </div>
        </Container>
    );
}

export default Admin;
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import cx from 'classnames'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import DateTabCard from '../UI/DateTabCard/DateTabCard';
import TodoCard from '../UI/TodoCard/TodoCard';
import s from './FoodPlan.module.css'

const FoodPlan = ({foodPlan,date}) => {
    const day = new Date();
    let total = 0
    const getDay = day.getDay()
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return (
        <div >
            <Container fluid>
                <div className={cx(s.FoodHeaderContanier, 'foodtabContainer', s.bg)}>
                    <h2 className={s.foodPlanHeader}>{date}</h2>
                    <Tabs
                        defaultActiveKey={daysOfWeek[getDay >= 1 && getDay]}
                        id="uncontrolled-tab-example"
                    >
                        {
                            foodPlan.map((x) => {
                                return (
                                    <Tab eventKey={x?.day} title={<DateTabCard data={x} />}>
                                        <Row className={s.rowGap}>
                                            {
                                                x?.foodList?.map((data) => {
                                                    return (
                                                        <Col xs={12} sm={6} md={4} lg={3} xl={3}><TodoCard foodData={data} /></Col>
                                                    )
                                                })

                                            }
                                        </Row>

                                    </Tab>
                                )
                            })
                        }
                    </Tabs>
                </div>
            </Container>
        </div>

    )
}

export default FoodPlan

import React from 'react'
import { Container } from 'react-bootstrap'
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import s from './Dashbord.module.css'
const dashboardData = [
    {
        "id": 1,
        "text": "Weight",
        "no": " 45kg",
        "date": "August 31"
    },
    {
        "id": 2,
        "text": "Current Weight",
        "no": "45kg",
        "date": "August 31"
    },
    {
        "id": 3,
        "text": "Maintenance Colories",
        "no": 1386,
        "date": "August 31"
    },
    {
        "id": 4,
        "text": "Consumed Colories",
        "no": 1800,
    },
]
const Dashboard = () => {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
        ':first-child t': {
            width: 120
        }
    }));

    function createData(Date, Day, MaintenanceColories, ConsumedColories, AddonColories) {
        return { Date, Day, MaintenanceColories, ConsumedColories, AddonColories };
    }

    const rows = [
        createData('August 31', 1, 1386, 1795),
        createData('September 01', 2, 1386,1750),
        createData('September 02', 3, 1386,1840),
        createData('September 03', 3, 1386,1982),
        createData('September 04', 3, 1386,1847),
    ];
    return (
        <Container>
            <div className='bottom20'>
                <h1 className='AdminHeading'>Dashboard</h1>
                <div className={s.dashbordCardContainer}>
                    {
                        dashboardData?.map((data) => {
                            return (
                                <div className={s.dashbordCard} key={data?.id}>
                                    <span>{data?.text}</span>
                                    <h5>{data?.no}</h5>
                                    {data?.date && <span>{data?.date}</span>}
                                </div>
                            )
                        })}
                </div>
            </div>
            <div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Date</StyledTableCell>
                                <StyledTableCell align="center">Day</StyledTableCell>
                                <StyledTableCell align="center">Maintenance Colories</StyledTableCell>
                                <StyledTableCell align="center">Consumed Colories</StyledTableCell>
                                <StyledTableCell align="center">Addon Colories</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <StyledTableRow key={row.Date}>
                                    <StyledTableCell component="th" scope="row">
                                        <Link href='/manage_food'><span style={{ "color": "#000000de" }}>{row.Date}</span></Link>
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row.Day}</StyledTableCell>
                                    <StyledTableCell align="center">{row.MaintenanceColories}</StyledTableCell>
                                    <StyledTableCell align="center">{row.ConsumedColories}</StyledTableCell>
                                    <StyledTableCell align="center"><span style={{ "color": "green" }}>{row.ConsumedColories - row.MaintenanceColories}</span></StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Container>


    )
}

export default Dashboard

import React from 'react'
import {Card, CardContent, Grid, Typography} from '@material-ui/core'
import CountUp from 'react-countup'
import cx from 'classname'
import styles from './Card.module.css'

const Cards=({ data: { confirmed, recovered, deaths, lastUpdate } })=>{
    if(!confirmed){
        return 'Loading...'
    }

    return (
        <div className='styles.container'> 
            <Grid container spacing={3} justifyContent="centre" >
                <Grid item component={Card}  xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infected</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={confirmed.value} duration={4} separator=','/>
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body'>Number of  active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}  xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={recovered.value} duration={4} separator=','/>
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body'>Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}  xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography variant='h5'>
                            <CountUp start={0} end={deaths.value} duration={4} separator=','/>
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body'><span>Number of  deaths caused by COVID-1</span></Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
     
    )
}

export default Cards
import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { BACKGROUNDCOLOR, HEADERCOLOR } from '../../../constants'


function FriendsGivingServer({classes}) {
    return (
        <div>
            <div>
                <h1 className={classes.header}>Welcome to Friendsgiving!</h1>
            </div>
            <div className={classes.startButtonContainer}>
                <Button className={classes.startButton}>Start</Button>
            </div>
        </div>
    )
}

const styles = theme => ({
    header: {
        color: '#f5f5f5',
        textAlign: 'center',
        fontSize: 60
    },
    startButtonContainer: {
        textAlign: 'center',
        marginTop: 320
    },
    startButton: {
        'color': 'white',
        backgroundColor: HEADERCOLOR,
        height: 100,
        width: 200,
        fontSize: 40,
        borderRadius: 10
    }
})

export default withStyles(styles, { withTheme: true})(FriendsGivingServer)
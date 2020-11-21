import React from 'react'
import { withStyles } from '@material-ui/core/styles'

function FriendsGivingPhone({classes}) {
    return (
        <div>
            <h3 className={classes.header}>Hi!  </h3>
        </div>
    )
}

const styles = theme => ({
    header: {
        color: '#f5f5f5',
        textAlign: 'center',
        fontSize: 25
    },
})

export default withStyles(styles, { withTheme: true})(FriendsGivingPhone)
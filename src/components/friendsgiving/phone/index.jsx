import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { BACKGROUNDCOLOR, HEADERCOLOR } from '../../../constants'

const names = [
    'anna-kedron',
    'dustin',
    'daniel',
    'joey',
    'makenzi',
    'kaylee',
    'danny'
]

const goodHeader = `Hi! What's your first name?`
const badHeader = `Sorry! I don't recognize your name.`
const url = 'http://192.168.1.7:8080/name'

function FriendsGivingPhone({classes}) {
    const [submitted, hasSubmitted] = useState(false) 
    const [headerIsGood, setHeaderIsGood] = useState(true)
    const [name, setName] = useState('')
    const [secretSanta, setSecretSanta] = useState('')
    
    const handleNameChange = (e) => {
        setName(e.target.value?e.target.value.toLowerCase():'')
    }

    const handleSubmit = async () => {
        if (names.indexOf(name) === -1) {
            setHeaderIsGood(false)
            return 
        }
        await fetch(url + `?name=${name}`, {
            method: 'GET',
        }).then(res =>res.text())
        .then(data => {
            setSecretSanta(data)
            hasSubmitted(true)
        })
    }
    return (
        <div stlye={{height: '90%'}}>
        {(submitted === false) && (
            <div>
                <div style={{height: 50}}>
                    <h3 className={classes.header}>{headerIsGood?goodHeader:badHeader}</h3>
                </div>
                <div style={{textAlign: 'center', marginTop: 150, marginBottom: 25, height: 50}}>
                    <TextField onChange={handleNameChange} color="secondary" label="First Name" className={classes.textField} style={{width: 300}} InputProps={{style: {color: 'white'}}} InputLabelProps={{style: {color: 'white'}}} /> 
                </div> 
                <div style={{marginLeft: '70%'}}>
                    <Button onClick={handleSubmit} color="secondary" style={{backgroundColor: HEADERCOLOR, color: '#f5f5f5'}}>Submit</Button>
                </div>
            </div>
        )}
        {submitted && (
            <div>
                <div style={{height: 50}}>
                    <h3 className={classes.header}>You are {secretSanta}'s secret santa</h3>
                </div>
            </div>
        )}
        </div>
    )
}

const styles = theme => ({
    header: {
        color: '#f5f5f5',
        textAlign: 'center',
        fontSize: 25,
        marginTop: 50
    },
    textField: {
        fontSize: 20,
        width: 150,
        color: '#f5f5f5'
    }
})

export default withStyles(styles, { withTheme: true})(FriendsGivingPhone)
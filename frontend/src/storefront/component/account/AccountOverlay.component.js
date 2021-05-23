import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Popover from '@material-ui/core/Popover'
import IconButton from '@material-ui/core/IconButton'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state'
import { Button } from '@material-ui/core'
import SignUpForm from './SignUpForm.component'
import SignInForm from './SignInForm.component'
import { useSelector } from 'react-redux'

export function AccountOverlay() {
    const [step, setStep] = useState('SIGN_IN')
    const account = useSelector((state) => state.AccountReducer)

    const onCreateAccountClick = () => {
        setStep('SIGN_UP')
    }

    const onLoginIntoAccountClick = () => {
        setStep('SIGN_IN')
    }

    const renderSignIn = () => {
        return (
            <div>
                <SignInForm />
                <Typography>
                    Don't haven an account?
                </Typography>
                <Button
                    onClick={ onCreateAccountClick }
                    variant="contained"
                    color="primary"
                >
                    Create an account
                </Button>
            </div>
        )
    }

    const renderSignUp = () => {
        return (
            <div>
                <SignUpForm />
                <Typography>
                    Already have an account?
                </Typography>
                <Button
                    onClick={ onLoginIntoAccountClick }
                    variant="contained"
                    color="primary"
                >
                    Login into account
                </Button>
            </div>
        )
    }

    const stepRenderMap = {
        'SIGN_IN': renderSignIn,
        'SIGN_UP': renderSignUp
    }

    console.log(account)

    const renderPopup = () => {
        return (
            <PopupState variant="popover" popupId="demo-popup-popover">
                {(popupState) => (
                    <div>
                        <IconButton { ...bindTrigger(popupState) } aria-label="account" color="inherit">
                            <AccountCircleIcon />
                        </IconButton>
                        <Popover
                            { ...bindPopover(popupState) }
                            anchorReference="anchorPosition"
                            anchorPosition={{ top: 0, left: window.innerWidth }}
                            marginThreshold={ 0 }
                            PaperProps={{ style: { width: '500px', height: '100%', maxHeight: 'none' } }}
                        >
                            { stepRenderMap[step]() }
                        </Popover>
                    </div>
                )}
            </PopupState>
        )
    }

    const renderButton = () => {
        return (
            <IconButton href="/account" aria-label="account" color="inherit">
                <AccountCircleIcon />
            </IconButton>
        )
    }

    return account ? renderButton() : renderPopup()
}

export default AccountOverlay

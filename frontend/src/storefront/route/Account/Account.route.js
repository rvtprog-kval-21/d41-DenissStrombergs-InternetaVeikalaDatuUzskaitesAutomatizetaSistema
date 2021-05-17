import { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import { Button } from '@material-ui/core'
import SignUpForm from '../../component/SignUpForm/SignUpForm.component'
import SignInForm from '../../component/SignInForm/SignInForm.component'
import { useSelector } from 'react-redux'

export function Account() {
    const [step, setStep] = useState('SIGN_IN')
    const { isSignedIn } = useSelector(state => state.customer) || {}

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

    return (
        <div>
            { stepRenderMap[step]() }
        </div>
    )
}

export default Account

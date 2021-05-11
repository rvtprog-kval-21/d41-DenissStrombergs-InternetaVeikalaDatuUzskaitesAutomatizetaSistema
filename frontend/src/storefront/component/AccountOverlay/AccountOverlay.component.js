import React from 'react'
import Typography from '@material-ui/core/Typography'
import Popover from '@material-ui/core/Popover'
import IconButton from '@material-ui/core/IconButton'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state'

export function AccountOverlay() {
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
                    >
                        <Typography>Account</Typography>
                    </Popover>
                </div>
            )}
        </PopupState>
    )
}

export default AccountOverlay

import React from 'react'
import Typography from '@material-ui/core/Typography'
import Popover from '@material-ui/core/Popover'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state'

export function SearchOverlay() {
    return (
        <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
                <div>
                    <IconButton { ...bindTrigger(popupState) } aria-label="search" color="inherit">
                        <SearchIcon />
                    </IconButton>
                    <Popover
                        { ...bindPopover(popupState) }
                        anchorReference="anchorPosition"
                        anchorPosition={{ top: 0, left: window.innerWidth }}
                        marginThreshold={ 0 }
                    >
                        <Typography>Search</Typography>
                    </Popover>
                </div>
            )}
        </PopupState>
    )
}

export default SearchOverlay

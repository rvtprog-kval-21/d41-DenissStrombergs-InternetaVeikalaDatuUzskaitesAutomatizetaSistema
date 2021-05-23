import React from 'react'
import Typography from '@material-ui/core/Typography'
import Popover from '@material-ui/core/Popover'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state'
import SearchForm from './SearchForm.component'

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
                        PaperProps={{ style: { width: '500px', height: '100%', maxHeight: 'none' } }}
                    >
                        <SearchForm />
                    </Popover>
                </div>
            )}
        </PopupState>
    )
}

export default SearchOverlay

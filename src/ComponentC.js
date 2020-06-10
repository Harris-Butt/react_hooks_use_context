import React, {useContext} from 'react'
import {UserContext, ChannelContext} from './ComponentA';

export function ComponentC(){    
    const user = useContext(UserContext);
    const channel = useContext(ChannelContext);
    return (
        <div>
            {user} - {channel}
        </div>
    ); 
}

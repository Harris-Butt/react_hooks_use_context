import React from 'react'
import {ComponentB} from './ComponentB'

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();
export function ComponentA(){
    return (
        <div>
            <UserContext.Provider value={"haris"}>
                <ChannelContext.Provider value={"Sama"}>
                    <ComponentB />
                </ChannelContext.Provider>

            </UserContext.Provider>
            
        </div>
    );
}
import React from "react"
import { useSelector } from 'react-redux';

export default () => {
    const user: any = useSelector((state:any) => state.auth)

    return (
      <React.Fragment>
        {user.user.name ? <h1>welcome {user.user.name}</h1> : <h1>user.displayName</h1>}
      </React.Fragment>
    )
}
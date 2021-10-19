const GlobalState = () => {
    const refreshUserState = async ()  => {
         return 'hello Im global'
        }
    return {refreshUserState}   
}

export default GlobalState

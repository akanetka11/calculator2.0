import React from 'react'
class ThemeSwitch extends React.Component {
    changeTheme(theme) {
        this.state.theme = ''
    }
    render() {
        return <h2 onClick={() => {this.changeTheme()}}>lol</h2>;
    }
}
export default ThemeSwitch
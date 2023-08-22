// #1 React : CreateElement
const a = React.createElement('a', { href:"#", class:"nav_menu_link"}, "account")
const li = React.createElement('li', {class:"nav_menu_item"}, a)
// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root')
const root = ReactDOM.createRoot(domRoot)
// #3 ReactDOM : TakeOver for Render Task
root.render(li);
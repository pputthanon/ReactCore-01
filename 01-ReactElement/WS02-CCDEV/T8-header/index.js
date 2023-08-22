// #1 React : CreateElement
const a1 = React.createElement('a', {href:"#", class:"nav_menu_link"},"account" )
const li1 = React.createElement('li', {className:"nav_menu_item"},a1)
const a2 = React.createElement('a', {href:"#" ,class:"nav_menu_link"}, "about" )
const li2 = React.createElement('li', {className:"nav_menu_item"}, a2)
const a3 = React.createElement('a', {href:"#", class:"nav_menu_link"}, "service")
const li3 = React.createElement('li', {className:"nav_menu_item"}, a3)
const a4 = React.createElement('a',{href:"#", class:"nav_menu_link"}, "contact")
const li4 = React.createElement('li',{className:"nav_menu_item"}, a4 )
const ul = React.createElement('ul', {className:"nav_menu_list"},li1,li2,li3,li4)
const div2 = React.createElement('div', {className:"nav_menu", id:"nav_menu"},ul)
const h2 = React.createElement('h2',null,"Devkit.")
const div1 = React.createElement('div', {className:"logo"},h2)
const nav = React.createElement('nav', {className:"nav"},div1,div2)
const header = React.createElement('header', { className:"container header"}, nav)
// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root')
const root = ReactDOM.createRoot(domRoot)
// #3 ReactDOM : TakeOver for Render Task
root.render(header);
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

// DRY : Don't Repeat Yourself
// FN : (text) => ReactElement

/////////////// ของพี่วี แต่บีงง @_@ /////////////// 

// function createNavElement(text) {
//     const anchorTag = React.createElement('a', { href: '#', className: 'nav_menu_link' }, text);
//     // const navItemElement = React.createElement('li', { className: 'nav_menu_item' }, anchorTag);
//     // return navItemElement
//     return React.createElement('li', { className: 'nav_menu_item' }, anchorTag);
// }

// const navItemElement_1 = createNavElement('account');
// const navItemElement_2 = createNavElement('about');
// const navItemElement_3 = createNavElement('service');
// const navItemElement_4 = createNavElement('contact');
// const lists = [navItemElement_1, navItemElement_2, navItemElement_3, navItemElement_4];

// const navListElement = React.createElement('ul', { className: 'nav_menu_list' }, ...lists);

// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root')
const root = ReactDOM.createRoot(domRoot)
// #3 ReactDOM : TakeOver for Render Task
root.render(ul);
// #1 React : CreateElement
const span = React.createElement('span', null, " Codecamp.");
const br = React.createElement('br', null);

const h1 = React.createElement('h1', { class:"main-heading" },"Welcome to" , span, br, "Develop anything.")
// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root')
const root = ReactDOM.createRoot(domRoot)
// #3 ReactDOM : TakeOver for Render Task
root.render(h1);

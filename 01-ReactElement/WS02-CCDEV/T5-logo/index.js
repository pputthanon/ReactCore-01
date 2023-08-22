// #1 React : CreateElement
const h2 = React.createElement('h2', null, "CodeCamp")
const div = React.createElement('div', {class:"logo"}, h2)
// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root')
const root = ReactDOM.createRoot(domRoot)
// #3 ReactDOM : TakeOver for Render Task
root.render(div);
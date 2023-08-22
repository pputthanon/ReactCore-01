// #1 React : CreateElement

// Task3
const task3Span = React.createElement('span', null, " Codecamp.");
const task3Br = React.createElement('br', null);
const task3H1 = React.createElement('h1', { class:"main-heading" },"Welcome to" , task3Span, task3Br, "Develop anything.")
// Task1
const task1P = React.createElement('p', { className : 'info-text' }, " Build a beautiful, modern website with flexible components built from scratch.")
// Task2
const task2Button1 = React.createElement('button', { className:"btn view_more_btn" }, "view all pages");
const task2Button2 = React.createElement('button', { className:"btn documentation_btn" }, "documentation" );
const task2Div = React.createElement('div',{ className:"btn_wrapper" }, task2Button1, task2Button2);

// innerDiv1
const innerDiv1 = React.createElement('div', {className:"grid-item-1"}, task3H1,task1P,task2Div)

// photo
const photoImg = React.createElement('img', {src:"https://img.freepik.com/free-vector/team-business-people-putting-hands-up-together_74855-19906.jpg?w=1380&amp;t=st=1692544217~exp=1692544817~hmac=6253a9b25f1f86e30715b25c4b736446b802dc9bd3c4990c9ffa640f327f1f04",
alt:"team-photo"})
const photoImgDiv = React.createElement('div', { className:"team_img_wrapper" }, photoImg)
const innerDiv2 = React.createElement('div', {className:"grid-item-2"},photoImgDiv)


const gridDiv = React.createElement('div', {className:"grid-cols-2"},innerDiv1, innerDiv2)


const conDiv = React.createElement('div', {className:"container"},gridDiv)
const section = React.createElement('div', {className:"wrapper"}, conDiv)
// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root')
const root = ReactDOM.createRoot(domRoot)
// #3 ReactDOM : TakeOver for Render Task
root.render(section);
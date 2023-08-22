// #1 React : CreateElement

// Parents ต้องอยู่ล่างสุด : ต้องประกาศ Children ก่อน

const button1 = React.createElement('button', { className:"btn view_more_btn" }, "view all pages");
const button2 = React.createElement('button', { className:"btn documentation_btn" }, "documentation" );

const div = React.createElement('div',{ className:"btn_wrapper" }, button1, button2 );


// #2 ReactDOM : createRoot
const domRoot = document.getElementById('root')
const root = ReactDOM.createRoot(domRoot)
// #3 ReactDOM : TakeOver for Render Task
root.render(div);
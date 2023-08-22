// #1 React : CreateElement
const click = () => alert("Successfully Register")

// ใน React ต้องเปลี่ยนเป็น camelCase
// class => className
// onclick => onClick
// ตัวที่หนึ่ง = tag ที่พิมพ์ในแบบ string (parents), ตัวที่สอง = {obj} ใน React เรียกว่า Props, ตัวที่ 3 = Text (children ของ parents : จริงๆแล้วมันเก็บเป็น Array ด้วย / เขียนต่อกันยาวๆได้เล้ย)
const btnEl = React.createElement('button', { className : 'btn', onClick : click }, 'Register'); 



// #2 ReactDOM : createRoot

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);

// #3 ReactDOM : TakeOver for Render Task
root.render(btnEl);

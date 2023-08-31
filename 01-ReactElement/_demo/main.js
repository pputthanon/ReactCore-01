console.log('Learning React')

// # Vanula (JS DOM API)
// Create element
// const btn = document.createElement('button');
// console.dir(btn);
// btn.classText = 'cart';
// btn.classList = 'red';

// Render
// const root = document.getElementById('root')
// root.appendChild(btn);

// ## React
// React == Global Object (via CDN Link)
// console.log(React);

// ################################# React : Create React Element #################################
// <button class="red">cart</button>

// ตัวที่หนึ่ง = tag ที่พิมพ์ในแบบ string (parents), ตัวที่สอง = {obj} ใน React เรียกว่า Props, ตัวที่ 3 = Text (children ของ parents : จริงๆแล้วมันเก็บเป็น Array ด้วย => เขียนต่อกันยาวๆได้เล้ย)
// ใน React ต้องเปลี่ยนเป็น camelCase
// class => className ** ใน React ใช้แบบนี้ เนื่องจาก class เป็นคำสงวน

// ********** React.createElement => ReactElement == Node == HTML element (V-DOM) == JS Object ที่เอาไป render ใน Browser ได้ ********** 

const reactElement = React.createElement('button', { className : 'blue' }, 'cart'); // ประเภทของ tag ที่อยากสร้าง

// console.log(reactElement);

// ################################# ReactDOM : Render to browser #################################
// Pick DOM
const domRoot = document.getElementById('root');
// Take Over
const root = ReactDOM.createRoot(domRoot); // take over
// Render
root.render(reactElement);
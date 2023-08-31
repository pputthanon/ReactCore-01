// - ให้สร้างตัวแปรชื่อ height(m) และ weight(kg) เก็บข้อมูลส่วนสูงและน้ำหนักตามลำดับ
// - ให้สร้างฟังก์ชัน calcBMI เพื่อคำนวณค่า BMI (BMI = M / H^2)
// - ให้ render หน้า web เพื่อแสดงค่า BMI ใน tag <h3>



// #1 React : JSX

// let inpHeight = +prompt("Enter your Height(m)")
// let inpWeight = +prompt("Enter your Weight(kg)")

const weight = 40
const height = 1.47

function calcBMI(h, w) {
    return w/h**2;
} 

const BMI = (
    <div>
        <h3>BMI = {calcBMI(height,weight).toFixed(2)}</h3>
    </div>
);

// #2 ReactDOM : createRoot
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);
// #3 ReactDOM : TakeOver for Render Task
root.render(BMI);
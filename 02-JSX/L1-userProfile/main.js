// ให้สร้างตัวแปรชื่อ fullName เก็บชื่อจริง นามสกุลของตัวเอง
// ให้สร้างตัวแปรชื่อ birthYear เก็บปีที่เกิดของตัวเอง
// ให้ render หน้า web โดยใช้ JSX ดังนี้
// แสดงชื่อ fullName ใน tag <h1>
// แสดงอายุใน tag <p> (ให้เอาปีปัจจุบันลบด้วยปีเกิด)




// #1 React : JSX

const fullName = "Pawinee Putthanon";
const birthYear = 1999
let textColor = 'text-blue'

const userProfile = (
    <div>
        <h1 className='text-red'> Full Name : {fullName}</h1>
        <p className={textColor}>Age : {2023 - birthYear}</p>
    </div>
)


// #2 ReactDOM : createRoot

const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task

root.render(userProfile);

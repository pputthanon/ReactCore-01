// ให้สร้างตัวแปร Array เก็บข้อมูล Post ที่เป็น Object มี key คือ id, message, วันที่ Post, ชื่อคนโพสต์
// นำ ArrayPost มา Render ใน list แล้วแสดงบนหน้า UI

// const arr =[
//     {
//         id: "bee555",
//         message: "hello",
//         date: "24 Aug",
//         name: "bee"
//     }
// ]


function ArrayPost(props) {
    return (
        <div>
            <h1>id : {props.arr.id}</h1>
            <h1>message : {props.arr.message}</h1>
            <h1>date : {props.arr.date}</h1>
            <h1>name : {props.arr.name}</h1>
        </div>
    )
}



function App() {
    return (
        <div>
            <ArrayPost arr={
                {id: "bee555",
                message: "hello",
                date: "24 Aug",
                name: "bee"}
                } />
        </div>
    )
}




const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />)


// ให้สร้าง Component ชื่อ Profile
// ใน Component ประกอบด้วย 
// tag <h1> แสดงชื่อ John Doe
// tag <h2> แสดงอายุมีค่าเท่ากับ 27
// - ให้ render Profile ในหน้า web

function Profile(props) {
    return (
    <div >
        <h1>Name : {props.name}</h1>
        <h2>Age : {props.age}</h2>
    </div>
    )
}




function ProfileGroup() {
    return (
        <div>
            <Profile name='John Doe' age={27} />
        </div>
    )
}


const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<ProfileGroup />)
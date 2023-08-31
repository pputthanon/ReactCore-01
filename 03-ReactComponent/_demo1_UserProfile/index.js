const userProfile = (
    <div className='profile__card'>
        <h1>FullName : John Doe</h1>
        <h2>Age : 30</h2>
    </div>
);

const appComponent = (
    <>
        {userProfile}
        {userProfile}
        {userProfile}
    </>
)


//////////////////////////////////////////////////////
//                    Component
//////////////////////////////////////////////////////
// 1. Function Component (implement 2018-present)
// 2. Class Component (since 2013-present)

// Review JS-Function : Reuse logic(== Call == Generate value)
// #### 1. JS-FN() : (data) => data
function randomInRange(min, max) {
    let result = min + Math.floor(Math.random() * (max - min + 1));
    return result;
}

// Syntax Call : FN()
let r = randomInRange(1, 10);
let r2 = randomInRange(1, 10);
console.log(r, r2);

// #### 2. Function Component : () => return ReactElement | JSX
// การเรียกใช้ Function Component === Reuse JSX === Reuse UI
// การประกาศชื่อฟังก์ชันขึ้นต้นด้วยตัวใหญ่ (react + dav จะรู้โดยทั่วกันว่าเป็น component ไม่ใช่ JS-Function)
// F.C. == Function Component == <FnName />

function UserProfileComponent() {
    return <h1>FullName : John Doe</h1>
}
function UserProfile() {
    return <h1>FullName : John Doe</h1>
}

// let user1 = userProfileComponent()
// user1 = <h1>FullName : John Doe</h1>

// *************************************************************************
// userProfileComponent() === <UserProfileComponent/>
// SYNTAX : <UserComponent/> == การ call,invoke,เรียกใช้ Function Component
// *************************************************************************


const app = (
    <div>
        {UserProfileComponent()}
        <UserProfileComponent/>
        {/* <UserProfile/> // ปกติการใช้component เราจะรู้กันอยู่แล้วดังนั้นสามารถละ component ได้ **** แต่ต้องเปลี่ยนตัวหน้าให้เป็นตัวใหญ่ **** */}
    </div>
);


///////// Biggest Component
function App() {
    return (
        <div className="app">
            <UserProfile />
        </div>
    );
}


// #2 ReactDOM : createRoot
const domNode = document.getElementById('root');
const root = ReactDOM.createRoot(domNode);

// #3 ReactDOM : TakeOver for Render Task
// root.render(<UserProfile/>);

root.render(<App/>); // == root.render(App())


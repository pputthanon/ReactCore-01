// จงสร้าง App Todo List

const list = [
    {
        task: "Task 1"
    },
    {
        task: "Task 2"
    }
]


function Add () {
    return (
        <div className="add">
            <input />
            <button>Add</button>
        </div>
    )
}

function ToDo (props) {
    return (
        <div className="todo">
            <h1> {props.task} </h1>
            <button> Edit </button>
            <button> Delete </button>
        </div>
    )
}


function App () {
    return (
        <>
          <div className="add">
                <Add />
          </div>
          <div>
                {list.map ((object) => 
                <ToDo 
                task={object.task}
                edit={object.edit}
                delete={object.delete}
                />
                )}
          </div>
        </>
      

    )
}



const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />)


// พี่วีเฉลยแบบลึกมากขึ้น กลับไปดูโค้ดที่เขา push ใหม่ด้วยจ้า

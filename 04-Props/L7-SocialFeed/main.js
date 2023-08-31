// จงสร้างหน้า UI ดังรูป


const list = [
    { 
        header: "Happy New Year",
        author: "John",
        date: "1/1/2021",
        time: "00.01 AM."
    },
    {
        header: "Programming is Fun",
        author: "Jack",
        date: "30/6/2021",
        time: "10.23 AM."
    },
    {
        header: "Oh amazing !!!",
        author: "Sarah",
        date: "23/7/2021",
        time: "08.17 AM."
    }
]

// #1 รับ Props
function Card(props) {
    return (
        <div className="contain">
            <div className="header">
                <h1> {props.header}</h1> 
            </div>
            <div className='footer'>
                <p>Author : {props.author}</p>
                <p>{props.date} {props.time}</p>
           </div>
        </div>
    )
}


// // #2 รับ Props แล้วมา Destructure
// function Card(props) {
//     const { header,author,date,time } = props;
//     return (
//         <div className="contain">
//             <div className="header">
//                 <h1> {header}</h1> 
//             </div>
//             <div className='footer'>
//                 <p>Author : {author}</p>
//                 <p>{date} {time}</p>
//            </div>
//         </div>
//     )
// }


// #3
// function Card({header,author,date,time}) {

//     return (
//         <div className="contain">
//             <div className="header">
//                 <h1> {header}</h1> 
//             </div>
//             <div className='footer'>
//                 <p>Author : {author}</p>
//                 <p>{date} {time}</p>
//            </div>
//         </div>
//     )
// }



function App () {
    return (
        <div>
            {list.map ((object) =>
            <Card 
            header={object.header} 
            author={object.author}
            date={object.date}
            time={object.time}/>
            )} 
        </div>
    )
}





const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />)
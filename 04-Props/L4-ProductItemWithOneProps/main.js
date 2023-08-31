// จาก Lab ที่แล้วให้ส่ง props เข้าไปได้ค่าเดียว ชื่อ product 
// โดยที่ props ตัวนี้จะมี data type เป็น Object
// ให้ render ProductItem ในหน้า web 

// คนเขียน component
// const = productDetail = {price : 30000, des : "This is the newest Iphone"}
// <ProductItem data ={productDetail} />
// <ProductItem data ={price : 30000, des : "This is the newest Iphone"} />
function Product(props) {
    // const props = { data : {price : 30000, des : "This is the newest Iphone"}}
    return (
        <div>
            <h1>Iphone 15</h1>
            <h2>{props.data.price}</h2>
            <p>{props.data.description}</p>
        </div>
    )
}


// คนเรียกใช้ component
function ProductItem() {
    return (
       <div>
            <Product data={{price:'30_000', 
            description:"This is the newest Iphone"}} />
       </div>
    )
}


const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<ProductItem />)
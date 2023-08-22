const header = <h1>Hello</h1>;

// #################### 1. Vanila (JS-DOM)
// Imparative way : พรรณา อธิบายทีละบรรทัด
// const header = React.createElement("h1")
// header.innerText = "Hello"

// ##################### 2A : Vanila (React)
// const header = React.createElement("h1", {className:'header'}, "Hello")

// #################### 2B : JSX (JavaScript Syntax Extension + Babel)
// Declarative : อยากได้อะไรให้บอก เดี๋ยวจัดการที่เหลือเอง
// const header = <h1>Hello</h1>; // ReactElement
// สามารถแทรกค่า Expression โดยการใส่ {}
// ***** ไม่ display Boolean && null,undefined *****
// ***** ไม่ render : Object *****
// create ได้แค่ one root element
// JSX : HTML likes Syntax == ReactElement
// สร้างตัวแปรข้างนอก ใส่ style ใน inline แล้วก็แทรก Obj ex: <p style={styleObj}>DOG : {userPets.dog}</p>

const userAge = 30;
const fullName = "John Doe";
const movie = "Aventure End Game";
const isMarried = "true";
const exp = ["Driver", "Dev", "Prime Minister"];
// ORG : ["Driver", "Dev", "Prime minister"]
// New : [<li>Driver</li>,<li>Dev</li>, <li>Prime Minister</li> ]

const expList = exp.map((career) => <li>{career}</li>);
const userPets = {
  dog: "Jum-meng",
  cat: "Kai",
};

function myLuckyNumber() {
  return 1 + Math.floor(Math.random() * 10);
}

const styleObj = {
  color: "blue",
  textAlign: "center",
};

const userProfile = //ReactElement
  (
    <div>
      <h1 className="header">FullName : {fullName}</h1>
      <h4>age : {userAge}</h4>
      <h4>Hobby : {movie}</h4>
      <h4>isMarried : {isMarried ? "true" : "false"}</h4>
      <h4>Experience </h4>
      <ul>{expList}</ul>
      <h4>Pets</h4>
      <p style={styleObj}>DOG : {userPets.dog}</p>
      <p>CAT : {userPets.cat}</p>
      <h4>myLuckyNumber : {myLuckyNumber()}</h4>
    </div>
  );

// ReactDOM
const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);

root.render(userProfile);

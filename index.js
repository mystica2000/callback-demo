// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<button>Click me!</button>`;
appDiv.addEventListener('click',()=> console.log("Clicked!!"
))

function callclick() {
  console.log("CLICKED!!")
}

add(1,2,B);

function add(a,b,callback) {
  console.log(callback)
  callback(a,b,a+b)
}

add(2,3,(a,b,res)=>console.log("Result of ",a,"+",b,"=",res))
// add(5,5,alert)
add(2,3, console.log)

A(B)

function B(data) {
  console.log("Hello ",data)
}

function A(B) {
  B("data")
}


login("mystica","password123",(data)=> {
    loadData(data,(data1)=> {
      loadMoreData(data1,(data2)=> {
        loadAgainData(data2,()=> {
          console.log('CALLBACK HELL!')
        })
      })
    })
})

function loadData(data1,callback) {
  callback(data1);
}

function loadMoreData(data1,callback) {
  callback(data1);
}

function loadAgainData(data1,callback) {
  callback(data1);
}


function login(user,password,callback) {
  callback(true)
}



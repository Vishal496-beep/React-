import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import React from 'react'

function MyApp(){
    return (
        <div>
            <h1>hello custom</h1>
        </div>
    )
}

// const ReactElement = {
//     type: 'a',   //what typ of tag we are using
//     props: {     //we can add multiple properties
//         href: 'https://google.com',
//         target:'_blank'

//     },
//     children: 'Google'
// }

const userElement ='chai aur python'

const anotherElement = (
    <a href="https://google.com" target="_blank">visit google</a>
)

const reactElement = React.createElement(  //ye babel means transpiler inject krta h react m
    'a',
    {href:"https://youtube.com", target:"_blank"},
    'click here to visit google',
    userElement
)            //this is the right syntax for react

createRoot(document.getElementById('root')).render(

   reactElement
  
)


//javascript m html mix hoti h or simple html react ko smjh nhi aati isliye files ja naam JSX hota h
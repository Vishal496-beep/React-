function render(reactElement, Container) {
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHtml = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href) 
    // domElement.setAttribute('target' , reactElement.props.target)

    // Container.appendChild(domElement)

     const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    Container.appendChild(domElement)
}




const reactElement = {
    type: 'a',   //what typ of tag we are using
    props: {     //we can add multiple properties in props
        href: 'https://google.com',
        target:'_blank'

    },
    children: 'Google'
}

const Container = document.querySelector('#root')

render(reactElement, Container)
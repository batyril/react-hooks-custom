const useState = (initalValue)=>{
    let _state = initalValue

    const setValue = (newValue)=> _state = newValue

    return [ _state, setValue ]
}

const Component = () =>{
    const [name,setName] = useState('Andrey')
    console.log(name)
    return {
        click: () =>  setName('Olga')
    }
}

const componentInstance = Component()


console.log(componentInstance.click())

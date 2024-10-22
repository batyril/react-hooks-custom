
const MyReact = (() => {
  let _state;
  return {
    useState: (initalValue) => {
      _state = _state || initalValue;
      const setValue = (newValue) => (_state = newValue);
      return [_state, setValue];
    },
    getState: () => _state,
  };
})();

const ButtonComponent = () => {
  //PROBLEMS: значение не меняется, после кликов 
  const [name, setName] = MyReact.useState('Andrey');

  return {
    click: (inputValue) => setName(inputValue),
    getName: () => name,
  };
};

const componentInstance = ButtonComponent();

console.log(componentInstance.getName());
console.log(componentInstance.click('Olga'));
console.log(componentInstance.getName());

console.log(MyReact.getState());

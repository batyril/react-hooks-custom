const React = (() => {
  let _state;
  return {
    useState: (initalValue) => {
      _state = _state || initalValue;
      const setValue = (newValue) => (_state = newValue);
      return [_state, setValue];
    },
    render: (Component) => {
      const C = Component();
      C.render();
      return C;
    },
    getState: () => _state,
  };
})();

const ButtonComponent = () => {
  const [name, setName] = React.useState('Andrey');

  return {
    click: (inputValue) => setName(inputValue),
    render: () => console.log('render', { name }),
  };
};

let litleReact = React.render(ButtonComponent);

litleReact.click('Ilnaz');

litleReact = React.render(ButtonComponent);

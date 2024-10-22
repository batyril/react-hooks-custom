const React = (() => {
  let hooks = [];
  let currentHookIndex = 0;
  return {
    useState: (initalValue) => {
      const hookIndex = currentHookIndex;
      hooks[hookIndex] = hooks[hookIndex] || initalValue;
      const setValue = (newValue) => (hooks[hookIndex] = newValue);

      currentHookIndex++;

      return [hooks[hookIndex], setValue];
    },
    render: (Component) => {
      const instance = Component();
      instance.render();
      currentHookIndex = 0;
      return instance;
    },
    getState: () => hooks,
  };
})();

const ButtonComponent = () => {
  const [name, setName] = React.useState('Andrey');
  const [age, setAge] = React.useState(14);

  return {
    clickName: (inputValue) => setName(inputValue),
    clickAge: (inputValue) => setAge(inputValue),
    render: () => console.log('render', { name, age }),
  };
};

let litleReact = React.render(ButtonComponent);

litleReact.clickName('Ilnaz');
litleReact.clickAge(234);
litleReact.clickAge(234);
litleReact.clickName('Ivan');
litleReact = React.render(ButtonComponent);
console.log(React.getState());

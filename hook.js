//TODO: add useEffect

const SimpleReact = (() => {
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
  const [name, setName] = SimpleReact.useState('Andrey');
  const [age, setAge] = SimpleReact.useState(14);

  return {
    clickName: (inputValue) => setName(inputValue),
    clickAge: (inputValue) => setAge(inputValue),
    render: () => console.log('render', { name, age }),
  };
};

let root = SimpleReact.render(ButtonComponent);

root.clickName('Ilnaz');
root.clickAge(234);
root.clickAge(234);
root.clickName('Ivan');
root = SimpleReact.render(ButtonComponent);

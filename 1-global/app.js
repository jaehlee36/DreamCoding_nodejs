console.log(global);
global.hello = () => {
  console.log('global hello!');
};

hello();
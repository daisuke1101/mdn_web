var employee = {
  name: 'Daisuke Morita',
  designation: 'Novice',
  address: {
    streer: 'Rohini',
    city: 'New Delhi'
  }
};

Object.freeze(employee);

employee.name = 'Dummy';
employee.address.city = 'Noida';

console.log(employee.address.city);

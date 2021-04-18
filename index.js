// Write your solution in this file!
function updateEmployeeWithKeyAndValue (obj, key, value) {
    return Object.assign ({}, obj, { [key]: value });
}
const employee = { name: 'sam',
    sstreetAdress: '11 Broadway'
};
function destructivelyUpdateEmployeeWithKeyAndValue (obj, key, value) {
    obj[key] = value;
    
    }
    const updateEmployeeWithKeyAndValue = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'Jon', '12 Broadway');
        return employee;
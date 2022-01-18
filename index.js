const employee = {
    name: 'Josh',
    streetAddress: 'East 14th'
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee}
    newEmployee[key] = value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newObject = Object.assign({}, employee);
    delete newObject[key];
    return newObject;
}
function destructiveDeleteFromEmployeeByKey (employee, key) {
    const newObject = Object.assign(employee, key)
    newObject [employee = '']
    return newObject[key]
}
function destructivelyDeleteFromEmployeeByKey (employee, key) {
    delete employee[key];
    return employee;
}
export class Employee {

  constructor(_id = '', name = '', role = '', office = '', salary = 0){
    this._id = _id;
    this.name = name;
    this.role = role;
    this.office = office;
    this.salary = salary;
  }
  _id!: string;
  name!: string;
  role!: string;
  office!: string;
  salary!: number;
}

export interface EmployeeDetails {
  items: Employee[];
  total_count: number;
}

export interface Employee {
  id: string;
  employee_name: string;
  employee_salary: string;
  employee_age: string;
}
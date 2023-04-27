namespace KnitWitt_G35_Project.Models
{
<<<<<<< HEAD
    public class Employee_Roles:Person_interface, Roles_interface
    {
        public int Person_Id { get; set; }
=======
    public class Employee_Roles:Employees_interface, Roles_interface
    {
        public int Employee_Id { get; set; }
>>>>>>> main
        public int Role_Id { get; set; }
        public DateOnly Start_Date { get; set; }
        public DateOnly End_Date { get; set; }
    }
}

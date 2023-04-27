namespace KnitWitt_G35_Project.Models
{
    public class Employee_Roles:Person_interface, Roles_interface
    {
        public int Person_Id { get; set; }
        public int Role_Id { get; set; }
        public DateOnly Start_Date { get; set; }
        public DateOnly End_Date { get; set; }
    }
}

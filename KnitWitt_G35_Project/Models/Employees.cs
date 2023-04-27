namespace KnitWitt_G35_Project.Models
{
   
        public class Employees:Department, Person_interface
    {
        public int Person_Id { get; set; }
        public DateOnly Hire_Date { get; set; }
    }
}

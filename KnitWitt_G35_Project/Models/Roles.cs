namespace KnitWitt_G35_Project.Models
{
    interface Roles_interface
    {
        public int Role_Id { get; set; }
    }
    public class Roles:Roles_interface
    {
        public int Role_Id { get; set; }
<<<<<<< HEAD
        public string? Role_Name { get; set; }
=======
        public string Role_Name { get; set; }
>>>>>>> main
        public int Salary { get; set; }
    }
}

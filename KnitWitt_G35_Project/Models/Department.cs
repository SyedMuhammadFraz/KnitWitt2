namespace KnitWitt_G35_Project.Models
{
    public abstract class Department
    {
        public int Id { get; set; }
        public string? Depatment_Name { get; set; }
        public int Manager_id { get; set; }
    }
}

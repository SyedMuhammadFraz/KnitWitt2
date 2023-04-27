namespace KnitWitt_G35_Project.Models
{
    public class Courier_Service:Finished_Product
    {
        public int Transport_Id { get; set; }
        public string? From_Location { get; set; }
        public string? To_Location { get; set; }
        public int Quantity_Delivered { get; set; }
        public string? Transport_Company { get; set; }
        public string? Transport_Name { get; set; }
        public DateTime Transport_Date { get; set; }
    }
}

namespace ExpenseManagerAPI.DTOs
{
    public class ExpenseDTO
    {
        public int CategoryId { get; set; }
        public string Title { get; set; } // New Field
        public double Amount { get; set; }
        public string Description { get; set; }
    }
}

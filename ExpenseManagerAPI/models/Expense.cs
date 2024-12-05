namespace ExpenseManagerAPI.data
{
    public class Expense
    {
        public int Id { get; set; }
        public int CategoryId { get; set; }
        public string Title { get; set; } // New Field
        public double Amount { get; set; }
        public string Description { get; set; }

        // Navigation Property
        public Category Category { get; set; }
    }
}

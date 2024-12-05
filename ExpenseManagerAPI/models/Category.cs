namespace ExpenseManagerAPI.data
{
    public class Category
    {
        public int Id { get; set; }
        public string Name { get; set; }

        // Navigation Property
        public ICollection<Expense> Expenses
        {
            get; set;
        }
    }
}

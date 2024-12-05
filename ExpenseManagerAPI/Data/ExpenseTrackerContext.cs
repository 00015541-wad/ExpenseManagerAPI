using ExpenseManagerAPI.data;
using Microsoft.EntityFrameworkCore;

namespace ExpenseManagerAPI.Data
{
    public class ExpenseTrackerContext : DbContext
    {
        public ExpenseTrackerContext(DbContextOptions<ExpenseTrackerContext> options)
            : base(options) { }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Expense> Expenses { get; set; }
    }
}

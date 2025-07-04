using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApplicationEvent.Models;

namespace WebApplicationEvent.Data
{
    public class WebApplicationEventContext : DbContext
    {
        public WebApplicationEventContext (DbContextOptions<WebApplicationEventContext> options)
            : base(options)
        {
        }

        public DbSet<WebApplicationEvent.Models.Event> Event { get; set; } = default!;
    }
}

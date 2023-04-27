<<<<<<< HEAD
using KnitWitt_G35_Project.Controllers;
using KnitWitt_G35_Project.Models;
using Microsoft.EntityFrameworkCore;

=======
>>>>>>> main
namespace KnitWitt_G35_Project
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
<<<<<<< HEAD
            builder.Services.AddDbContext<PersonContext>(options =>
            options.UseSqlServer(builder.Configuration.GetConnectionString("CRUDCS")));

=======
>>>>>>> main

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
<<<<<<< HEAD
            builder.Services.AddCors();
=======
>>>>>>> main

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

<<<<<<< HEAD
            
            app.UseCors(builder =>
            {
                builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
            });

=======
>>>>>>> main
            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
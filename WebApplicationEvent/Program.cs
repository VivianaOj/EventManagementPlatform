﻿using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using WebApplicationEvent.Data;

var builder = WebApplication.CreateBuilder(args);

// DB Context
builder.Services.AddDbContext<WebApplicationEventContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("WebApplicationEventContext")
    ?? throw new InvalidOperationException("Connection string 'WebApplicationEventContext' not found.")));

// Controllers, Swagger
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo { Title = "Event API", Version = "v1" });
});

// ✅ CORS
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularDev", policy =>
    {
        policy.WithOrigins("http://localhost:4200")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Event API V1");
    });
}

app.UseHttpsRedirection();

// ✅ CORS debe ir antes de Authorization
app.UseCors("AllowAngularDev");

app.UseAuthorization();

app.MapControllers();

app.Run();

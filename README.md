# EventManagementPlatform

Full-stack app to manage events, built with:

.NET 9 Web API

Angular 17 + Angular Material

PostgreSQL 
1. Backend Setup (ASP.NET Core)
Location: /EventManagementPlatformAPI

Prerequisites:
.NET 9 SDK

PostgreSQL (connection info below)

Install dependencies:
dotnet restore

Configure DB:
"ConnectionStrings": {
  "DefaultConnection": "Host=aws-0-us-east-1.pooler.supabase.com;Port=5432;Database=postgres;Username=postgres.wsipuucilchdaxdelnpd;Password=admin123.$"
}


Apply migrations:
dotnet ef migrations add InitialCreate
dotnet ef database update


Run the API:
dotnet run

Runs on http://localhost:{port}/swagger

2. Frontend Setup (Angular)
Location: /front-end/event-management-app

Prerequisites:
Node.js 18+

Angular CLI: npm install -g @angular/cli

Install dependencies:
npm install

Start app:
ng serve
Runs on http://localhost:4200

3. Create Event - API Endpoint
POST /api/event
Example request body:
{
  "title": "Sample Event",
  "description": "Test event",
  "eventDate": "2025-07-31T19:00:00Z",
  "status": "Scheduled"
}
Returns created event object.


![image](https://github.com/user-attachments/assets/e528b946-f819-41fd-af88-2bdf2bf88a61)

4. PostgreSQL Info 
Host: aws-0-us-east-1.pooler.supabase.com
Port: 5432
Database: postgres
User: postgres.wsipuucilchdaxdelnpd
Password: admin123.$


URL Deployment: 
Frontend: http://punchiq-frontend-bucket-qa.s3-website.us-east-2.amazonaws.com
![image](https://github.com/user-attachments/assets/a0851855-65e2-49fb-925e-17773ba47c77)

Backend: [http://railway.app](https://dashboard.render.com/)
https://eventmanagementplatform-ijju.onrender.com/event

BD: Supabase | The Postgres Development Platform.

 



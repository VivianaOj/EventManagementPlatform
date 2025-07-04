# EventManagementPlatform

Full-stack event management platform built with:

- **.NET 9 Web API**
- **Angular 17 + Angular Material**
- **PostgreSQL (via Supabase)**

---

## Project Structure

| Layer     | Stack                         | Location                          |
|-----------|-------------------------------|-----------------------------------|
| Backend   | .NET 9 + EF Core              | `/EventManagementPlatformAPI`     |
| Frontend  | Angular 17 + Angular Material | `/front-end/event-management-app` |
| Database  | PostgreSQL (Supabase)         | External                          |

---

##  1. Backend Setup – ASP.NET Core

**Location:** `/EventManagementPlatformAPI`

### 🔧 Prerequisites

- [.NET 9 SDK](https://dotnet.microsoft.com/en-us/download)
- PostgreSQL (DB info below)

### Install Dependencies

```bash
dotnet restore
```

### Configure DB Connection

Edit `appsettings.json`:

```json
"ConnectionStrings": {
  "WebApplicationEventContext": "Host=aws-0-us-east-1.pooler.supabase.com;Port=5432;Database=postgres;Username=postgres.wsipuucilchdaxdelnpd;Password=admin123.$"
}
```

### Apply Migrations

```bash
dotnet ef migrations add InitialCreate
dotnet ef database update
```

### Run the API

```bash
dotnet run
```

Open Swagger UI:  
[http://localhost:{port}/swagger](http://localhost:{port}/swagger)

---

## 2. Frontend Setup – Angular

**Location:** `/front-end/event-management-app`

### 🔧 Prerequisites

- Node.js 18+
- Angular CLI

```bash
npm install -g @angular/cli
```

###  Install Dependencies

```bash
npm install
```

###  Run the App

```bash
ng serve
```

Open in browser:  
[http://localhost:4200](http://localhost:4200)

---

## 3. Create Event – API Example

**Endpoint:** `POST /event`

###  Sample Request Body

```json
{
  "title": "Sample Event",
  "description": "Test event",
  "location": "New York",
  "eventDate": "2025-07-31T19:00:00Z"
}
```

###  Returns

```json
{
  "id": 1,
  "title": "Sample Event",
  "description": "Test event",
  "location": "New York",
  "eventDate": "2025-07-31T19:00:00Z"
}
```

---

##  4. PostgreSQL (Supabase)

- **Host**: `aws-0-us-east-1.pooler.supabase.com`  
- **Port**: `5432`  
- **Database**: `postgres`  
- **User**: `postgres.wsipuucilchdaxdelnpd`  
- **Password**: `admin123.$`  

---

##  5. Live Deployments

###  Frontend

[http://punchiq-frontend-bucket-qa.s3-website.us-east-2.amazonaws.com](http://punchiq-frontend-bucket-qa.s3-website.us-east-2.amazonaws.com)

![Frontend Screenshot](https://github.com/user-attachments/assets/a0851855-65e2-49fb-925e-17773ba47c77)

###  Backend

[https://eventmanagementplatform-ijju.onrender.com/event](https://eventmanagementplatform-ijju.onrender.com/event)

![Backend Screenshot](https://github.com/user-attachments/assets/e528b946-f819-41fd-af88-2bdf2bf88a61)

---

##  Status

-  Backend & API running
-  Frontend deployed (S3)
-  Supabase used for PostgreSQL hosting
-  Includes CRUD operations via Angular UI

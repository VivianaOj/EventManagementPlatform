# Stage 1: Build
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src

# Copy everything in the current directory into the container
COPY . .

# Restore and publish using the .csproj file
RUN dotnet restore "WebApplicationEvent.csproj"
RUN dotnet publish "WebApplicationEvent.csproj" -c Release -o /app/publish

# Stage 2: Runtime
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS runtime
WORKDIR /app
COPY --from=build /app/publish .

EXPOSE 80
ENTRYPOINT ["dotnet", "WebApplicationEvent.dll"]

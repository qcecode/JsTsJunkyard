FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS base
WORKDIR /app
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src
COPY ["SlidingWindow/SlidingWindow.csproj", "SlidingWindow/"]
RUN dotnet restore "SlidingWindow/SlidingWindow.csproj"
COPY . .
WORKDIR "/src/SlidingWindow"
RUN dotnet build "SlidingWindow.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "SlidingWindow.csproj" -c Release -o /app/publish /p:UseAppHost=false

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "SlidingWindow.dll"]

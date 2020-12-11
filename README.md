# API REST F1 To GraphQL 
First configuration using package of <a href="https://github.com/mugan86/graphql-project-cli"> Mugan86 (github)</a>

> #### Installation
>
> - npm install
> - npm run build:dev
>

**Spa.**

Esta API, fue creada con el fin de aprender a utilizar apollo-datasource-rest y poder convertir una API REST en una API de GraphQL.
Para esto utilicé una <a href="https://ergast.com/mrd/"> API REST sobre F1 </a>. Toda la información necesaria sobre la misma puede ser consultada directamente en la API REST, para este traspaso no se cubrieron todas las variables y posibilidades que allí existían. 

En GraphQL podemos consultar : 
```
SeasonsList: [Season!]!
RacesByYear(year: String!): [Race!]!
RaceSelect(year: String!, round: Int!): Race
HistoryDrivers(pageElement: Int, page: Int): [Driver!]!
DriversByYear(year: String!): [Driver!]!
DriversByYearAndRound(year: String!, round: Int!): [Driver!]!
DriverById(id: String!): Driver
StandingData(year: String!): [DriverStanding]!
HistoryCircuits(pageElement: Int, page: Int): [Circuit!]!
CircuitsById(id: String!): Circuit
````

Nota: para mayor información sobre que datos recibe y devuelve cada query al correr el programa podes observar toda la documentación en el apartado correspondiente de Apollo Server

**Eng.**

This API was created in order to learn how to use apollo-datasource-rest and be able to convert a REST API into a GraphQL API.
For this I used a <a href="https://ergast.com/mrd/"> REST API over F1 </a>.
All the necessary information about it can be consulted directly in the REST API, for this transfer not all the variables and possibilities that existed there were covered. 

In GraphQL we can consult: 
```
SeasonsList: [Season!]!
RacesByYear(year: String!): [Race!]!
RaceSelect(year: String!, round: Int!): Race
HistoryDrivers(pageElement: Int, page: Int): [Driver!]!
DriversByYear(year: String!): [Driver!]!
DriversByYearAndRound(year: String!, round: Int!): [Driver!]!
DriverById(id: String!): Driver
StandingData(year: String!): [DriverStanding]!
HistoryCircuits(pageElement: Int, page: Int): [Circuit!]!
CircuitsById(id: String!): Circuit
````

Note: for more information on what data each query receives and returns when running the program, you can see all the documentation in the corresponding section of Apollo Server
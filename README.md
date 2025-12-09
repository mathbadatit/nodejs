implementare un microservizio backend che espone un'API (con mwtodo POST, con endpoint /somma) che accetta in ingresso (nelbody) due parametri interi "a","b" e restituisce la somma quid il risultato è "a+b"

   -- il backend, e quindi l'api, può essere implentata usando qualunqu ìe lingaggio/frameqork

   -- consilgio di utulizzare javascript, quindi node.js
   -- per l'esposizione delL'API 


POST http: //localhost:3000/somma
con body:
{
    "a": 5,
    "b": 10
    }
Risultato: 
200
{
    "result": 15
}


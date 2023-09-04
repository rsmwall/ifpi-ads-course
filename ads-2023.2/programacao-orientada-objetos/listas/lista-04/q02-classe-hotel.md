2. Suponha uma classe Hotel que sirva apenas para guardar a quantidade de
   solicitações de reservas feitas conforme abaixo:

```typescript

    class Hotel {
        quantReservas : number;
        adicionarReserva() : void {
            quantReservas++;
        }
    }

```

   Podemos afirmar que haverá um problema de compilação, pois a variável inteira não
   foi inicializada previamente? Justifique.

    - Sim, haverá um problema de compilação neste caso.
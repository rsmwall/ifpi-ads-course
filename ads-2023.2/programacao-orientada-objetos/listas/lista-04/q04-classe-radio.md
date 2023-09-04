4. Considere a classe Radio e as instruções que fazem seu uso abaixo:

```typescript 

    class Radio {
        volume : number;
        constructor(volume : number) {
            this.volume = volume;
        }
    }
    let r : Radio = new Radio();
    r.volume = 10;

```

   Justifique o erro de compilação e proponha uma solução.

    - O constructor pede o valor de parametro para inicializar o parametro 'volume'.
      Para corrigir, basta inserir um valor quando criar o objeto 'r'.
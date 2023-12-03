5. Não podemos aplicar o operador new em FiguraGeometrica, mas porque então
podemos realizar o seguinte código de instanciação:

```ts
abstract class FiguraGeometrica {
    //...
}

let figuras: FiguraGeometrica[] = new Array();
```

- Cria um array vazio do tipo FiguraGeometrica[]cque pode conter objetos de classes que herdam de FiguraGeometrica. Isso é possível porque em TypeScript, e possivel criar arrays para armazenar referências a objetos de classes abstratas ou interfaces.
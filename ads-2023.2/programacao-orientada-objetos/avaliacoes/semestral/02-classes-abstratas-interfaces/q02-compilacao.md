2. Explique o que é necessário para que a compilação da ClasseConcreta ocorra
sem erros:

```ts
abstract class ClasseAbstrata {
    abstract imprimaAlgo(): void ;
}

class ClasseConcreta extends ClasseAbstrata {
}
```

- Para que ocorra corretamente, eh preciso que ClasseConcreta contenha a implementacao do metodo imprimaAlgo()
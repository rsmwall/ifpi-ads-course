5. Pesquise e, se encontrar, um exemplo onde o tipo any seria benéfico.

    parsing de JSON:

    ```ts
        const myObject = JSON.parse("{}");
        myObject.x.y.z;

        declare function debug(value: any): void;

        debug("a string");
        debug(23);
        debug({ color: "blue" });

        declare function swap(x: [number, string]): [string, number];

        declare const pair: [any, any];
        swap(pair);
    ```
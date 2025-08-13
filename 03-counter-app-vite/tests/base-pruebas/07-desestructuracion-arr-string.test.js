import { retornaArreglo } from "../../src/bases-pruebas/07-desestructuracion-arr";

describe("Prebas en 07-desestructuracion-arr", () => {
  test("Debe retornar un string y un numero", () => {
    const [letters, numbers] = retornaArreglo();
    expect(letters).toBe("ABC");
    expect(numbers).toBe(123);
  });
});

import { getSaludo } from "../../src/bases-pruebas/02-template-string";

describe("Pruebas en 02-template-string", () => {
  test('getSaludo debe de retornar "Hola Aslly"', () => {
    const name = "Aslly";
    const message = getSaludo(name);
  });
});

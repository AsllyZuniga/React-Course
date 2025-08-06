import {
  getUser,
  getUsuarioActivo,
} from "../../src/bases-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "Usuario1",
    };
    const user = getUser();
    expect(testUser).toEqual(user);
  });
  test("getUsuarioActivo debe retornar un objeto", () => {
    const name = "Aslly";
    const user = getUsuarioActivo(name);

    expect(user).toStrictEqual({
      uid: "DEF456",
      username: name,
    });
  });
});

const{classificarAlerta}=require('../src/alerta')
test("alerta alto",()=>{expect(classificarAlerta(70)).toBe("Alto")})
test("teste com erro",()=>{expect(classificarAlerta(90)).toBe("Alto")}) // ERRO PROPOSITAL
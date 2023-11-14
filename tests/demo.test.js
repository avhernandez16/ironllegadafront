describe('Pruebas en <DemoComponent />', ()=>{
    test('esta prueba no debe fallar', ()=>{

        const mess1 = 'hola mundo';
        const mess2 = mess1.trim();
        expect(mess1).toBe(mess2);

    })
}) 


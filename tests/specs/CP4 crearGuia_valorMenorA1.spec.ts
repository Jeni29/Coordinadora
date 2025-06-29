import { test } from '@playwright/test';
import { actor } from '../actors/actor';
import { CrearGuia } from '../tasks/CrearGuia';
import { LastResponse } from '@serenity-js/rest';
import { Ensure, equals } from '@serenity-js/assertions';
import * as tarea from '../tasks/CrearGuia';
console.log('Contenido de CrearGuia.ts:', tarea);

test('NO crear la guía retornar 400', async () => {
    const datosGuia = {
        identificacion: "890904713",
        divisionCliente: "00",
        idProceso: 100001,
        codigoPais: 170,
        valoracion: "200000",
        tipoCuenta: 3,
        contenido: "reloj",
        codigoProducto: "123",
        nivelServicio: 22,
        detalle: [
            {
                pesoReal: 1,
                largo: 5,
                ancho: 5,
                alto: 3,
                unidades: 1,
                ubl: 0,
                referencia: "ref detalle"
            }
        ],
        datosRemitente: {
            //identificacion: "1020304044",
            detalleRemitente: "Casa",
            tipoViaRemitente: "7",
            viaRemitente: "15",
            numeroRemitente: "53 48",
            codigoCiudadRemitente: "76001000",
            descripcionTipoViaRemitente: "Calle",
            direccionRemitente: "Calle 53 # 53 48",
            nombreRemitente: "Remitente Prueba",
            indicativoRemitente: "57",
            celularRemitente: "3007876543",
            correoRemitente: "pruebaremitente@coo.com"
        },
        datosDestinatario: {
            //identificacion: "1254511109",
            detalleDestinatario: "Casa",
            tipoViaDestinatario: "5",
            viaDestinatario: "15",
            numeroDestinatario: "45 93",
            descripcionTipoViaDestinatario: "Calle",
            direccionDestinatario: "calle 45 93",
            codigoCiudadDestinatario: "76001000",
            nombreDestinatario: "Destinatario Prueba",
            indicativoDestinatario: "57",
            celularDestinatario: "3216549825",
            correoDestinatario: "pruebadestinatario@coor.com"
        },
        valorRecaudar: 0,
        referenciaRecaudo: "Pago 123",
        tipoGuia: 1,
        referenciaGuia: "Ref guia",
        usuario: "prueba@coordinadora.com",
        fuente: "envios",
        observaciones: "prueba RCE"
    };
    console.log(CrearGuia);

    await actor.attemptsTo(
        CrearGuia.conDatos(datosGuia),
        Ensure.that(LastResponse.status(), equals(400))
    );
});
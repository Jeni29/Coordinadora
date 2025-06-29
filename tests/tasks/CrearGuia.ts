import { Task } from '@serenity-js/core';
import { PostRequest, Send } from '@serenity-js/rest';

export const CrearGuia = {
    conDatos: (datos: object): Task =>
        Task.where(`#actor crea una guía con datos`,
            Send.a(PostRequest.to('/guias/cm-guias-ms/guia').with(datos))
        )
};

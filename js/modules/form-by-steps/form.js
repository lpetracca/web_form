import FormEvents from './form_events.js';
import FormValidation from './form_validation.js';

export default class Form {

    constructor() {
        this.formEvents = new FormEvents();
        this.initSendFormAction();
        this.formValidation = new FormValidation();
    }

    initSendFormAction() {
        this.formEvents.initSendFormEvent(this.sendForm.bind(this));
    }
     
    initValidForm() {
        this.formValidation.initValidForm(this.sendForm.bind(this));
    }

    sendForm() {
        console.log('Sending form data...');
        
        // Escribir aquí el código para enviar todos los datos del formulario.
        // enviar a https://reqres.in/api/users (Esta web sirve para realizar pruebas REST API, por lo tanto NO ENVIAR DATOS REALES)
        // la API retorna un JSON con el id del usuario creado y la info guardada.
        // Para mas info ver en https://reqres.in
        
        let data = {};
        $("#form1").serializeArray().forEach(element=>data[element.name]=element.value);
        
        console.log(data);
        
        fetch('https://reqres.in/api/users', {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then( resp => {
            console.log(resp.json().then( rp => console.log(rp)));
            //debugger
        })
    }
    
}
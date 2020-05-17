export default class Form_Events {

    constructor() {
        this.initPrevNextButtons();
        
    }
    preventDefaultAction(evt){
            evt.preventDefault();
        }

    initPrevNextButtons() {
        let $prevButton = $('.js-previous');
        let $nextButton = $('.js-next');
        let $finishButton = $('.js-finish');

        $prevButton.click(this.previousAction.bind(this));
        $nextButton.click(this.nextAction.bind(this));
        $finishButton.click(this.preventDefaultAction)
    }
    
    
    initSendFormEvent(callback) {
        let $sendForm = $('.js-sendForm');
        $sendForm.click(callback);
    }
    goToStep(step, direction = 'next') {
        let currentStep = +step.replace(/^step\-/, '');
        let goToStep = '.step-';
        let nextStep;
        if (direction=== 'next') nextStep = currentStep + 1;
        else nextStep = currentStep - 1;
        goToStep += nextStep;
        this.progressBar(Math.round(nextStep*33.33));
        return goToStep;
    }
 
/*     goToStep(step, direction = 'next') {
        // 2) Simplifica esta función para que sean menos líneas.
        let currentStep = step.replace(/^step\-/, '');
        let goToStep = '.step-';
        switch (currentStep) {
            case '1':
                goToStep += '2';
                break;
            case '2':
                if ('prev' === direction) {
                    goToStep += '1';
                } else {
                    goToStep += '3';
                }
                break;
            case '3':
                goToStep += '2';
                break;
            default:
                break;
        }
        return goToStep;
    } */

  /*
    previousAction(evt) {
        let $current = $(evt.currentTarget);
        let $formStep = $current.parents('.form-step');
        
        $formStep.addClass('d-none');

        let $prevStep = $(this.goToStep($formStep[0].classList[1], 'prev'));
        $prevStep.removeClass('d-none');
    }

    nextAction(evt) {
        // 3) ¿Se puede evitar repetir mismas líneas que en previousAction?
        let $current = $(evt.currentTarget);
        let $formStep = $current.parents('.form-step');
        
        $formStep.addClass('d-none');

        let $nextStep = $(this.goToStep($formStep[0].classList[1]));
        $nextStep.removeClass('d-none');
    } */
 
    changeAction(evt,direction='next'){
        let $current = $(evt.currentTarget);
        let $formStep = $current.parents('.form-step');
        
        $formStep.addClass('d-none');
        this.preventDefaultAction(evt);

        let $step = $(this.goToStep($formStep[0].classList[1], direction));
        $step.removeClass('d-none');
    }

    previousAction(evt) {this.changeAction(evt,'prev');}

    nextAction(evt) {this.changeAction(evt);}

    progressBar(percent) {
        // 1) Escribir aqui como sería la lógica para incrementar la barra de porcentaje.
        let $progressBar = $(".progress-bar");
        $progressBar.css("width", percent + "%");
        $progressBar.html(percent + "%");
        }
    }
    
   function getFormData(formId){
        let formValues = {};
        var form1Inputs = document.forms[formId].getElementsByTagName("input");
        for(let i=0; i<form1Inputs.length; i++){
            formValues[form1Inputs[i].name]=form1Inputs[i].value;
        }; 

    }
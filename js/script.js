import Form from './modules/form-by-steps/form.js';

class Main extends Form {

    constructor() {
        super();
        console.log('Script init');
        let $select = $(".children");

        function toggler (){
            console.log('aca estoy');
            
            let $childrenData = $('.childrenData');
            let childValue = $select.val();
            
            switch(childValue) {
            case '0':
              $childrenData.hide();
              break;                  
                
            case '1':
                $('.child2').hide();  
                $('.child3').hide();
                $('.child4').hide();
            break;
            case '2':
                $('.child3').hide();
                $('.child4').hide();
                break;  
            case '3':
                $('.child4').hide();
                break;
            case '4':
                break;
            }
                       
        };

    }

}

let main = new Main();
(function () {
    const results = [];
    let lastRecall;

    const display = document.querySelector('.display');
    const numberButtons = document.querySelectorAll('.btn-number');
    const operatorButtons = document.querySelectorAll('.btn-op');
    const cancelButton = document.querySelector('.btn-cancel');
    const evalButton = document.querySelector('.btn-eval');
    const recallButton = document.querySelector('.btn-recall');


    const onNumberPress = (event) => {
        display.value += event.target.textContent; 
    };
    const onOperatorPress = (event) => {
        if(!['+', '-', '*'].includes(display.value[display.value.length - 1])){
            display.value += event.target.textContent;
        }
    }
    const onCancelButtonPress = () => {
        display.value = '';
        lastRecall = results.length - 1;
    }
    const onEvalButtonPress = () => {
        const result = eval(display.value);
        display.value = result;
        results.push(result);
        lastRecall = results.length - 1;
    }
    const onRecallPress = () => {
        display.value = results[lastRecall] || '';
        lastRecall--;
    };
    
    numberButtons.forEach(button => {
        button.addEventListener('click', onNumberPress );
    });
    operatorButtons.forEach(button => {
        button.addEventListener('click', onOperatorPress);
    });
    cancelButton.addEventListener('click', onCancelButtonPress);
    evalButton.addEventListener('click', onEvalButtonPress);
    recallButton.addEventListener('click', onRecallPress);

})();
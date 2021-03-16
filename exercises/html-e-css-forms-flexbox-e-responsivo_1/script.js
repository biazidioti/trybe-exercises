let states = document.getElementById('state');
function createStatesOptions(){
    let getState = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
    let value = 1;
    for (let index; index < getState.length; index += 1) {
        let createOptions = document.createElement('option');
        states.appendChild(createOptions).innerText = getState[index];
        states.appendChild(createOptions).value = getState[index];
  }
}

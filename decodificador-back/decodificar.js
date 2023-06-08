function senhaValidar(password) {
    const digits = password.toString().split('');

    let adjacente = false;
    let isCrescente = true;
    let repeteAdjacente = 1;
  
    for (let i = 1; i < digits.length; i++) {
      if (digits[i] === digits[i - 1]) {
        repeteAdjacente++;
      } else {
        if (repeteAdjacente === 2) {
          adjacente = true;
        }
        repeteAdjacente = 1;
      }
  
      if (digits[i] < digits[i - 1]) {
        isCrescente = false;
        break;
      }
    }
  
  
    return adjacente && isCrescente;
}

module.exports = senhaValidar;
class Bob {
  isSilentTreatment(input) {
    return input.trim() === '';
  }

  isShouting(input) {
    return input.toUpperCase() === input && input.toLowerCase() !== input
  }

  isQuestion(input) {
    return input.charAt(input.length - 1) === '?';
  }

  hey(message) {
    if (this.isSilentTreatment(message)) {
      return 'Fine. Be that way!';
    }

    if (this.isShouting(message)) {
      return 'Whoa, chill out!';
    }

    if (this.isQuestion(message)) {
      return 'Sure.';
    }

    return 'Whatever.';
  }
}

export default Bob;


export class ValidatorService {
  static min(inputValue, minLength) {
    if (inputValue.trim().length < minLength)
      return `Cannot be less than ${minLength} characters`;
  }

  static max(inputValue, maxLength) {
    if (inputValue.trim().length > maxLength)
      return `Cannot be greater than ${maxLength} characters`;
  }
}

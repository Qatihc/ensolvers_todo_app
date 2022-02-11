import BaseError from "./BaseError";

class InputError extends BaseError {
  constructor(message: string) {
    super(message);
  }
}

export default InputError;
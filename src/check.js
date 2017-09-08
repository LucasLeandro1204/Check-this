import Rules from './core/rules';
import Errors from './core/errors';

class Check {
  constructor (data) {
    this._data = Object.assign({}, data);
    this._errors = new Errors();
  }

  fails () {
    return this._validate();
  }

  get errors () {
    return this._errors;
  }

  static make (data, rules) {
    return new this();
  }
}

export default Check;

import Rules from './core/rules';
import Errors from './core/errors';

class Check {
  constructor (data) {
    this._rules = new Rules();
    this._errors = new Errors();
    this._data = Object.assign({}, data);
  }

  fails () {
    return this._validate();
  }

  _parse () {

  }

  _validate () {
    const parsed = Object.keys(this._data).map(key => this._parse(this._data[key]));
    // ??????
  }

  get errors () {
    return this._errors;
  }

  static make (data, rules) {
    return new this();
  }
}

export default Check;

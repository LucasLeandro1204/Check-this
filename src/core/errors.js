class Errors {
  constructor () {
    this._errors = {};
  }

  add (field, value) {
    if (! this.has(field)) {
      this._errors[field] = [];
    }
    this._errors[field].push(value);
  }

  has (field) {
    return !! this._errors[field];
  }

  first (field) {
    return this._errors[field].shift();
  }
}

export default Errors;

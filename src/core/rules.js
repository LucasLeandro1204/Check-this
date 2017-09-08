import AbstractRule from './abstractRule';

import required from '../rules/required';

const rules = [
  required,
];

class Rules {
  constructor () {
    this._rules = rules;
  }

  static add (rule) {
    if (rules[rule.name]) {
      throw new Error('This rule already exists.');
    }
    rules[rule.name] = AbstractRule._extendsToMe(rule);
  }
}

export default Rules;

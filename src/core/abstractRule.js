class AbstractRule {
  constructor () {
  }

  static run (args) {
    throw new Error('This function must be overwrite');
  }

  static _extendsToMe (rule) {
    if (! (rule instanceof this)) {
      throw new Error(`Rule should be an instance of Abstract rule`);
    }

    return rule;
  }
}

export default AbstractRule;

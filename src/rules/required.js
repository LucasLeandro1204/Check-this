import AbstractRule from '../core/abstractRule';

class Required extends AbstractRule {
  constructor () {
    super();
  }

  name () {
    return 'required';
  }

  run () {

  }
}

export default Required;

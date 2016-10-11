/**
 * Created by jahansj on 11/09/2016.
 */

class dotProductify {
  constructor(vectors) {
    // nth array finder to see what we're dealing with
    // hand off to multiplier fn
    // return the dot product of the passed vectors/matrix

    if (!(vectors instanceof Array)) {
      console.warn('dotProductify expects at least one array.');
      return;
    }
  }

  // Assumes an array or square matrix
  nthArrayFinder(array, depth) {
    depth = depth || 0;

    if (array[0] instanceof Array) {
      depth++;

      return this.nthArrayFinder(array[0], depth);
    }
    else {
      return depth;
    }
  }
}


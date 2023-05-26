import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import product from './product';
import banner from './banner';
import best_seller from './best_seller';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([ product, banner, best_seller ]),
})
  
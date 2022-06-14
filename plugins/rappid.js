import 'jointjs/dist/joint.core.css'

import { dia } from 'jointjs/src/core.mjs'
import * as standard from 'jointjs/src/shapes/standard.mjs'

const joint = { dia }
joint.shapes = { standard }
export default ({ app }, inject) => {
  inject('joint', joint)
}

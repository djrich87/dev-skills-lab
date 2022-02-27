import { Router } from 'express'
import * as skillCtrl from '../controllers/skills.js'
const router = Router()

/* GET users listing. */

router.get('/', skillCtrl.index)
router.get('/new', skillCtrl.new)
router.get('/:id', skillCtrl.show)


export {
  router
}

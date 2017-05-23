import test from 'ava'
import nock from 'nock'

import * as api from '../../client/api'

test.cb('deleteWidget', t => {
  var scope = nock('http://localhost:3000')
    .delete('/widgets/1')
    .reply(204)

  api.deleteWidget({id: 1}, (err) => {
    t.is(err, null)
    scope.done()
    t.end()
  })
})

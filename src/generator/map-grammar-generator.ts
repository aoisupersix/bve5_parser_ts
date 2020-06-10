import { getDafaultMapData } from 'b5g'

getDafaultMapData()
  .then((mapData) => {
    console.log(mapData)
  })
  .catch((err) => {
    console.error(err)
  })

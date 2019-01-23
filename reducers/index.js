import { combineReducers } from 'redux';
// importar reducer
import videos from './videos';
import navigation from './navigation';
import user from './user';
// ruta principal
const reducer = combineReducers({
  navigation,
  videos,
  user,
})

export default reducer;

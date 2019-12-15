import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

import CartDropDown from './cart-dropdown.component';

const CartDropdownContainer = compose(withRouter)(CartDropDown);

export default CartDropdownContainer;

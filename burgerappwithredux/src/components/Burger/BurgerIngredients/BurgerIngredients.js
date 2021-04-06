import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './BurgerIngredients.css';

import BunTop from '../../../assets/burger/bun-top.png';
import Mushroom from '../../../assets/burger/maitake-mushroom.png';
import RomanieLettuce from '../../../assets/burger/romaine-lettuce.png';
import Tomato from '../../../assets/burger/tomato.png';
import Cheese from '../../../assets/burger/cheese.png';
import Beef from '../../../assets/burger/beef.png';
import BunBottom from '../../../assets/burger/bun-bottom.png';

class BurgerIngredient extends Component {

    render(){
        let ingredient = null;  

        switch (this.props.type) {
            case('bun-top'):
            ingredient = <div><img src={BunTop} alt="bun-top"></img> </div>;
            break;
            
            case('mushroom'):
            ingredient = <div><img src={Mushroom} alt="mushroom"></img></div>;
            break;
    
            case('romanieLettuce'):
            ingredient = <div><img src={RomanieLettuce} alt="romanieLettuce"></img></div>;
            break;
    
            case('tomato'):
            ingredient = <div><img src={Tomato} alt="tomato"></img></div>;
            break;
    
            case('cheese'):
            ingredient = <div><img src={Cheese} alt="cheese"></img></div>;
            break;
    
            case('beef'):
            ingredient = <div><img src={Beef} alt="beef"></img></div>;
            break;
    
            case('bun-bottom'):
            ingredient = <div><img src={BunBottom} alt="bun-bottom"></img></div>;
            break;
    
            default: 
            ingredient = null;
        }

        return ingredient;
    }
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient;
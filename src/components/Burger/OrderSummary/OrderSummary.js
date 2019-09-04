import React from 'react';

// HOC
import Aux from '../../../hoc/Auxilliary';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            if(props.ingredients[igKey] > 0) {
                return <li key={igKey}>{props.ingredients[igKey]} of {igKey}</li>
            }
        // In order to only have one array of items
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);
    
    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicius burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
        </Aux>
    );
};

export default orderSummary;
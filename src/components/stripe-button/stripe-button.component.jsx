import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const PriceForStripe = price * 100;
    const publishableKey = 'pk_test_IUhvZLWioXjoQUxh5DbasaYt008z5eVW5f';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Cwn Clothing Ltc.'
            billingAddress
            shippingAddress
            image='https://svgsharecom/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={PriceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;
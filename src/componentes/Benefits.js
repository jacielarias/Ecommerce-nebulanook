import '../style sheet/Benefits.css'

import benefit1 from '../imagenes/benefit-1.svg'
import benefit2 from '../imagenes/benefit-2.svg'
import benefit3 from '../imagenes/benefit-3.svg'

function Benefits (){

    const benefitsList = [
        {
            id: 1, 
            urlIcon: benefit1,
            text: 'Free shipping',
            description: 'Enjoy free shipping on U.S. orders over $100.'
        },
        {
            id: 2, 
            urlIcon: benefit2,
            text: 'Home delivery',
            description: 'Want hands-on plant expertise IRL? Stop by one of our stores in NYC, Bethesda, Chicago, or San Francisco to explore more plants, planters, & care accessories.'
        },
        {
            id: 3, 
            urlIcon: benefit3,
            text: '1 month Guarantee',
            description: 'Our team preps, prunes, & carefully packs every order—meaning lots of care goes into every step. If your plant arrives damaged or unhealthy, we replace it for free.'
        }
    ];
    
    return (
        <section className="benefits">
            <h2 className='benefits-title'>Our Benefits</h2>
            <div className='our-benefits'>
            {benefitsList.map((benefit) => (
                <article className='benefit-content' key={benefit.id}>
                    <img src={benefit.urlIcon} />
                    <h3>{benefit.text}</h3>
                    <p>{benefit.description}</p>
                </article>
            ))}
            </div>
        </section>
    )
}

export default Benefits
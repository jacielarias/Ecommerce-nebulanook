import '../style sheet/Benefits.css';

import benefit1 from '../imagenes/benefit-1.svg'
import benefit2 from '../imagenes/benefit-2.svg'
import benefit3 from '../imagenes/benefit-3.svg'

function Benefits (){

    const benefitsList = [
        {
            id: 1, 
            urlIcon: benefit1,
            text: 'Free shipping',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, semper justo laoreet ligula tortor placerat gravida, curabitur purus hendrerit nascetur sapien.'
        },
        {
            id: 2, 
            urlIcon: benefit2,
            text: 'Home delivery',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, semper justo laoreet ligula tortor placerat gravida, curabitur purus hendrerit nascetur sapien.'
        },
        {
            id: 3, 
            urlIcon: benefit3,
            text: '1 month Guarantee',
            description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit, semper justo laoreet ligula tortor placerat gravida, curabitur purus hendrerit nascetur sapien.'
        }
    ];
    
    return (
        <section id="benefits" className="benefits">
            <h2 className='title benefits-title'>Our Benefits</h2>
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
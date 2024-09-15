import { useState } from 'react';
import '../style sheet/Promotions.css'

//Jacket 
import jacket from '../imagenes/jacket.png'

function Promotions() {
    const [selectFeature, setSelectFeature] = useState(1);

    function openItem(id) {
        setSelectFeature(id);
    }

    const features = [
        {
            id: 1,
            text: '100% Polyester'
        },
        {
            id: 2,
            text: 'Skin Friendly'
        },
        {
            id: 3,
            text: 'Lightweigt'
        }
    ];



    return (
        <article className='promotions-content'>
            <div className='promo-info promo'>
                <h2>The best quality you can get</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
            </div>
            <div className='image-promo promo'>
                {features.map((feature) => (
                    <div                    
                        className={`feature feature--${feature.id} ${feature.id === selectFeature ? 'active-feature' : ''}`} 
                        key={feature.id}
                    >
                    <div className='circle-index' onClick={() => openItem(feature.id)}>{feature.id}</div>    
                    <div className={`feature-text-content ${feature.id === selectFeature ? 'feature-text-content--active' : ''}`}>
                        <div className={`text-feature ${feature.id === selectFeature ? 'text-feature--active' : ''}`}  >
                            <p>{feature.text}</p>
                        </div>
                    </div>
                    </div>     
                ))}
                <img src={jacket} />
            </div>
        </article>
    )
}

export default Promotions;
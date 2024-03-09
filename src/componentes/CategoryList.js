import '../style sheet/CategoryList.css';

import searchIcon from '../imagenes/search.svg';
import list from '../imagenes/list.svg'
import grid from '../imagenes/grid.svg'


function CategoryList({ 
    categories, 
    manejarClick, 
    selectedCategory, 
    displayInterface,
    displayInterfaceProduct,
  }){
    

    return (
      <nav className='categories-navbar'>
        <section className='nav-content'>
            <section >
              <h3 className='header-categories'>
                Categories
              </h3>
              <ul className='list-categories'>
                <li 
                  className={`category-li ${ selectedCategory === 'All' ? 'category--active' : '' }`}
                  onClick={() => manejarClick('All')}
                  key='All'
                >
                  All
                </li>
                {categories.map((category) => (
                  <li
                    className={`category-li ${ category === selectedCategory ? 'category--active' : '' }`}
                    key={ category.id }
                    onClick={() => manejarClick(category)}
                  >
                    { category.charAt(0).toUpperCase() + category.slice(1) }
                  </li>
                ))}
              </ul>
            </section>
            <section className='view-type--content'>
              <h3>View</h3>
              <div className='view-type'>
                <div
                  className={`icon-view ${displayInterface === 'interface#1' ? 'icon-view--active': ''}`} 
                  onClick={()=> displayInterfaceProduct('interface#1')}
                  title='Grid view'
                >
                  <img src={grid} />
                </div>
                <div 
                  className={`icon-view ${displayInterface === 'interface#2' ? 'icon-view--active': ''}`} 
                  onClick={()=> displayInterfaceProduct('interface#2')}
                  title='List view'
                >
                  <img src={list} />
                </div>
              </div>
            </section>

        </section>
      </nav>
    );
  }


export default CategoryList;

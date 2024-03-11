import React from 'react';
import CategoriesItem from './categoriesitem';

export default function Categories() {
  return (
    <div id="categories" className='p-2 md:p-8'>
        <h2 className="text-xl font-bold  px-2">
            <span className='capitalize'>categories </span>
            we  think you'll live
            
        </h2>
            {/* Categories */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-2  py-2">
            <CategoriesItem 
            img="https://static-cdn.jtvnw.net/ttv-boxart/512710-188x250.jpg"
            title="Call Duty:War"
            tag1="FPS"
            viewers='38K'
            tag2='Shooter'

            />
             <CategoriesItem 
            img="https://static-cdn.jtvnw.net/ttv-boxart/880825863_IGDB-188x250.jpg"
            title="Pacific Drive"
            tag1="Driving Racing Game"
            viewers='2.1K'
            tag2=''

            />
             <CategoriesItem 
            img="https://static-cdn.jtvnw.net/ttv-boxart/252812003_IGDB-188x250.jpg"
            title="market simulator 1"
            tag1="Simulation"
            viewers='38.4K'
            tag2=''

            />
            
             <CategoriesItem 
            img="https://static-cdn.jtvnw.net/ttv-boxart/255298418_IGDB-188x250.jpg"
            title="final fantasy  VII"
            tag1="RPG"
            viewers='33.7K'
            tag2=''

            />
           
             <CategoriesItem 
            img="https://static-cdn.jtvnw.net/ttv-boxart/766571430_IGDB-188x250.jpg"
            title="hell diver 2"
            tag1="Action"
            viewers='29,3K'
            tag2='Shooter'

            />
           
            </div>
    </div>
  );
}

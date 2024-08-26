
import CommonSlider from './commonSlider';
import Localimages from '../localImages';


function ServicesOfferd() {
    const ServicesOfferdData = [
        {
            name: 'Wheel Balancing',
            imgUrl: Localimages.service1,
        },
        {
            name: 'Wheel Alignment',
            imgUrl: Localimages.service2
        },
        {
            name: 'Wheel Fixing',
            imgUrl: Localimages.service3
        }
    ]
    const slideCardBg = '#dddddd47';
    const slidesPerView = [4];
    const buttonText = 'Book Now';

    return (
        <div className='ServicesOfferd sliderPagiBullets bg-gray-100 text-center pt-8 lg:pb-20 pb-8 relative lg:mt-0 mt-5'>
            <div className='container'>
                <h3 className='capitalize lg:text-3xl text-2xl font-bold text-center mb-6'>Services offered by this dealer</h3>
                <CommonSlider slidesData={ServicesOfferdData} slideCardBg={slideCardBg} slidesPerView={slidesPerView} buttonText={buttonText} />
            </div>
        </div>
    )
}

export default ServicesOfferd
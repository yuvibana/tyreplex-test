
import CommonSlider from './commonSlider';
import BrandLogo from '../../assets/images/others/b-logo.png'

function SellarDeals() {
    const SellarDealsData = [
        {
            name: 'MRF',
            imgUrl: BrandLogo
        },
        {
            name: 'CEAT',
            imgUrl: BrandLogo
        },
        {
            name: 'Goodyear',
            imgUrl: BrandLogo
        },
        {
            name: 'Apollo',
            imgUrl: BrandLogo
        },
        {
            name: 'Bridgestone',
            imgUrl: BrandLogo
        },
        {
            name: 'JK Tyre',
            imgUrl: BrandLogo
        },
        {
            name: 'Michelin',
            imgUrl: BrandLogo
        },
    ]
    const slideCardBg = '#eddcdd'
    return (
        <div className='SellarDealasDiv sliderPagiBullets text-center pt-8 lg:pb-20 pb-8 relative lg:mt-0 mt-5'>
            <div className='container'>
                <h3 className='capitalize text-3xl font-bold text-center mb-6'>We Deals in</h3>
                <CommonSlider slidesData={SellarDealsData} slideCardBg={slideCardBg} />
            </div>
        </div>
    )
}

export default SellarDeals
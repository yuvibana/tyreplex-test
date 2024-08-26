import React from 'react'

function SoldTyres() {

    const SoldData = [
        {
            brand_name: 'apollo',
            brand_type: 'amazer 4g life',
            sold_num: '145/85 RR2',
            sold_num: '145/85 RR2',
            rating: '4.9',
            review: '22222',
            price: '3,136',
            offer: 'Offer available',
            tyre_type: 'Tubeless',
            warranty: '5 Year Warranty'
        },
        {
            brand_name: 'apollo',
            brand_type: 'amazer 4g life',
            sold_num: '145/85 RR2',
            sold_num: '145/85 RR2',
            rating: '4.9',
            review: '22222',
            price: '3,136',
            offer: 'Offer available',
            tyre_type: 'Tubeless',
            warranty: '5 Year Warranty'
        },
        {
            brand_name: 'apollo',
            brand_type: 'amazer 4g life',
            sold_num: '145/85 RR2',
            sold_num: '145/85 RR2',
            rating: '4.9',
            review: '22222',
            price: '3,136',
            offer: 'No Offer',
            tyre_type: 'Tube Type',
            warranty: '2 Year Warranty'
        },
        {
            brand_name: 'apollo',
            brand_type: 'amazer 4g life',
            sold_num: '145/85 RR2',
            sold_num: '145/85 RR2',
            rating: '4.9',
            review: '22222',
            price: '3,136',
            offer: 'Offer available',
            tyre_type: 'Tubeless',
            warranty: '5 Year Warranty'
        },
        {
            brand_name: 'apollo',
            brand_type: 'amazer 4g life',
            sold_num: '145/85 RR2',
            sold_num: '145/85 RR2',
            rating: '4.9',
            review: '22222',
            price: '3,136',
            offer: 'No Offer',
            tyre_type: 'Tube Type',
            warranty: '2 Year Warranty'
        },
        {
            brand_name: 'apollo',
            brand_type: 'amazer 4g life',
            sold_num: '145/85 RR2',
            sold_num: '145/85 RR2',
            rating: '4.9',
            review: '22222',
            price: '3,136',
            offer: 'No Offer',
            tyre_type: 'Tube Type',
            warranty: '2 Year Warranty'
        },
    ]
    return (
        <div className='SoldTyres py-8 bg-gray-50'>
            <div className='container'>
                <h3 className='capitalize lg:text-3xl text-2xl font-bold text-center mb-6'>Services offered by this dealer</h3>
                <div className="flexingdiv flex flex-wrap gap-y-4 gap-x-4">
                    {SoldData?.map((data, index) => (
                        <div key={index} className='col-in lg:w-[24%] md:w-[33%] w-[100%] border border-gray-200 relative'>
                            <div className='Warranty absolute right-2 top-2 bg-red-500 text-white px-1 text-center'>{data.warranty}</div>
                            <div className='topdiv p-3 border-b border-gray-200 bg-gray-100'>
                                <div className='name text-3xl heading capitalize'>{data.brand_name}</div>
                                <div className='text-xl capitalize'>{data.brand_type}</div>
                            </div>
                            <p className='num text-gray-500 p-3 border-b border-gray-200'>{data.sold_num}</p>
                            <div className="review bg-gray-100 flex gap-2 items-center p-3 border-b border-gray-200">
                                <span className=" bg-green-600 text-white inline-block px-2 rounded h-[22px]"> {data.rating} </span>
                                <p className="flex reviewCount border-b border-gray-200">{data.review} Reviews</p>
                            </div>
                            <p className='price text-2xl text-red-500 font-bold p-3 border-b border-gray-200'> <span className=' text-3xl'>₹</span> {data.price}</p>
                            {data.offer === 'No Offer' ?
                                <p className='offer text-gray-600 line-through text-sm p-3 bg-gray-100 border-b border-gray-200'>{data.offer}</p>
                                :
                                <p className='offer text-green-600 text-sm p-3 bg-gray-100 border-b border-gray-200'>{data.offer}</p>}
                            <p className='t-type text-red-600 p-3'>{data.tyre_type}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SoldTyres;
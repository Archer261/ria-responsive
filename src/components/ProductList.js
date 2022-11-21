import React from 'react'
import ProductCard from './ProductCard'

const recList = [
    { product: '$10 Gift Certificate', id: 1, url: "https://www.amazon.com/Cosmetasa-Muscle-Massage-Tissue-Massager/dp/B09M7J7P2P/ref=sr_1_22?crid=3MBNT0GM2BX51&keywords=massage+oil&qid=1666990641&qu=eyJxc2MiOiI1LjI5IiwicXNhIjoiNC45OCIsInFzcCI6IjQuNzkifQ%3D%3D&sprefix=massage+oil%2Caps%2C91&sr=8-22", desc: "INDULGE YOUR LOVED ONES WITH THIS EXCLUSIVE AND EFFECTIVE GIFT SET Treat your husband or partner to this exclusive body massage gift set. Pamper each other while releasing stress and tension stored in your muscles and joints." },
    { product: 'Oils', id: 2, url: "https://www.amazon.com/Cosmetasa-Muscle-Massage-Tissue-Massager/dp/B09M7J7P2P/ref=sr_1_22?crid=3MBNT0GM2BX51&keywords=massage+oil&qid=1666990641&qu=eyJxc2MiOiI1LjI5IiwicXNhIjoiNC45OCIsInFzcCI6IjQuNzkifQ%3D%3D&sprefix=massage+oil%2Caps%2C91&sr=8-22", desc: "INDULGE YOUR LOVED ONES WITH THIS EXCLUSIVE AND EFFECTIVE GIFT SET Treat your husband or partner to this exclusive body massage gift set. Pamper each other while releasing stress and tension stored in your muscles and joints." },
    { product: 'Oils', id: 3, url: "https://www.amazon.com/Cosmetasa-Muscle-Massage-Tissue-Massager/dp/B09M7J7P2P/ref=sr_1_22?crid=3MBNT0GM2BX51&keywords=massage+oil&qid=1666990641&qu=eyJxc2MiOiI1LjI5IiwicXNhIjoiNC45OCIsInFzcCI6IjQuNzkifQ%3D%3D&sprefix=massage+oil%2Caps%2C91&sr=8-22", desc: "INDULGE YOUR LOVED ONES WITH THIS EXCLUSIVE AND EFFECTIVE GIFT SET Treat your husband or partner to this exclusive body massage gift set. Pamper each other while releasing stress and tension stored in your muscles and joints." },
    { product: 'Oils', id: 4, url: "https://www.amazon.com/Cosmetasa-Muscle-Massage-Tissue-Massager/dp/B09M7J7P2P/ref=sr_1_22?crid=3MBNT0GM2BX51&keywords=massage+oil&qid=1666990641&qu=eyJxc2MiOiI1LjI5IiwicXNhIjoiNC45OCIsInFzcCI6IjQuNzkifQ%3D%3D&sprefix=massage+oil%2Caps%2C91&sr=8-22", desc: "INDULGE YOUR LOVED ONES WITH THIS EXCLUSIVE AND EFFECTIVE GIFT SET Treat your husband or partner to this exclusive body massage gift set. Pamper each other while releasing stress and tension stored in your muscles and joints." },
    { product: 'Oils', id: 5, url: "https://www.amazon.com/Cosmetasa-Muscle-Massage-Tissue-Massager/dp/B09M7J7P2P/ref=sr_1_22?crid=3MBNT0GM2BX51&keywords=massage+oil&qid=1666990641&qu=eyJxc2MiOiI1LjI5IiwicXNhIjoiNC45OCIsInFzcCI6IjQuNzkifQ%3D%3D&sprefix=massage+oil%2Caps%2C91&sr=8-22", desc: "INDULGE YOUR LOVED ONES WITH THIS EXCLUSIVE AND EFFECTIVE GIFT SET Treat your husband or partner to this exclusive body massage gift set. Pamper each other while releasing stress and tension stored in your muscles and joints." },
    { product: 'Oils', id: 6, url: "https://www.amazon.com/Cosmetasa-Muscle-Massage-Tissue-Massager/dp/B09M7J7P2P/ref=sr_1_22?crid=3MBNT0GM2BX51&keywords=massage+oil&qid=1666990641&qu=eyJxc2MiOiI1LjI5IiwicXNhIjoiNC45OCIsInFzcCI6IjQuNzkifQ%3D%3D&sprefix=massage+oil%2Caps%2C91&sr=8-22", desc: "INDULGE YOUR LOVED ONES WITH THIS EXCLUSIVE AND EFFECTIVE GIFT SET Treat your husband or partner to this exclusive body massage gift set. Pamper each other while releasing stress and tension stored in your muscles and joints." },
    { product: 'Oils', id: 7, url: "https://www.amazon.com/Cosmetasa-Muscle-Massage-Tissue-Massager/dp/B09M7J7P2P/ref=sr_1_22?crid=3MBNT0GM2BX51&keywords=massage+oil&qid=1666990641&qu=eyJxc2MiOiI1LjI5IiwicXNhIjoiNC45OCIsInFzcCI6IjQuNzkifQ%3D%3D&sprefix=massage+oil%2Caps%2C91&sr=8-22", desc: "INDULGE YOUR LOVED ONES WITH THIS EXCLUSIVE AND EFFECTIVE GIFT SET Treat your husband or partner to this exclusive body massage gift set. Pamper each other while releasing stress and tension stored in your muscles and joints." },
    { product: 'Oils', id: 8, url: "https://www.amazon.com/Cosmetasa-Muscle-Massage-Tissue-Massager/dp/B09M7J7P2P/ref=sr_1_22?crid=3MBNT0GM2BX51&keywords=massage+oil&qid=1666990641&qu=eyJxc2MiOiI1LjI5IiwicXNhIjoiNC45OCIsInFzcCI6IjQuNzkifQ%3D%3D&sprefix=massage+oil%2Caps%2C91&sr=8-22", desc: "INDULGE YOUR LOVED ONES WITH THIS EXCLUSIVE AND EFFECTIVE GIFT SET Treat your husband or partner to this exclusive body massage gift set. Pamper each other while releasing stress and tension stored in your muscles and joints." },
    { product: 'Oils', id: 9, url: "https://www.amazon.com/Cosmetasa-Muscle-Massage-Tissue-Massager/dp/B09M7J7P2P/ref=sr_1_22?crid=3MBNT0GM2BX51&keywords=massage+oil&qid=1666990641&qu=eyJxc2MiOiI1LjI5IiwicXNhIjoiNC45OCIsInFzcCI6IjQuNzkifQ%3D%3D&sprefix=massage+oil%2Caps%2C91&sr=8-22", desc: "INDULGE YOUR LOVED ONES WITH THIS EXCLUSIVE AND EFFECTIVE GIFT SET Treat your husband or partner to this exclusive body massage gift set. Pamper each other while releasing stress and tension stored in your muscles and joints." },


]

function ProductList() {
    return (
        <div className='flex flex-wrap justify-center'>
            {recList.map((ele) => (
                <ProductCard rec={ele} />
            )
            )}
        </div>
    );
}

export default ProductList;
import Image from 'next/image'

const Star = () => {
    return (
      <Image
        src="/assets/common/star.svg"
        height={20}
        width={20}
        alt="A rank star"
      />
    );
};

const Rating = ({ rating }: { rating: 0 | 1 | 2 | 3 | 4 | 5 }) => {
    return (
      <div className='flex space-x-1'>
        {[...Array(rating)].map((_, index) => (
          <Star key={index} />
        ))}
      </div>
    );
  };

export default Rating

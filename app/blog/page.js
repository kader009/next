'use client';
import Image from 'next/image';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';

const Cards = ({ images, price, title, id }) => {
  return (
    <div className="col-lg-3 col-md-8 col-sm-12 mt-3 mb-2 ">
      <Card style={{ width: '18rem' }}>
        <div>
          <Image
            src={images[0]}
            alt="hellow"
            width={285}
            height={250}
            priority
          />
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <Link href={`/blog/${id}`} className="btn btn-outline-secondary">
            Go detail
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

const Getdata = async () => {
  const res = await fetch('https://dummyjson.com/products');
  return res.json();
};

const blog = async () => {
  const data = await Getdata();
  const products = data.products;
  return (
    <div className="container mt-2">
      <div className="row">
        {products.map((pro) => (
          <Cards
            key={pro.id}
            title={pro.title}
            price={pro.price}
            images={pro.images}
            id={pro.id}
          />
        ))}
      </div>
    </div>
  );
};

export default blog;

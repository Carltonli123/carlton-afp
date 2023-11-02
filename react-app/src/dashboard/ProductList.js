import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function ProductList() {
  return (
    <ImageList cols={3} sx={{ width: "80%" }}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={`${item.title} (${item.price}$)`}
            subtitle={<span>Lunch menu</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: '/product1.png',
    title: 'Special Tacos',
    price: '10.99',
  },
  {
    img: '/product1.png',
    title: 'Veggie Tacos',
    price: '11.99',
  },
  {
    img: '/product1.png',
    title: 'Nachos Large',
    price: '20.99',
  },
  {
    img: '/product1.png',
    title: 'Vegan burger',
    price: '8.99',
  },
  {
    img: '/product1.png',
    title: 'Orange Juice',
    price: '5.99',
  },
  {
    img: '/product1.png',
    title: 'Coffee',
    price: '3.99',
  },
];
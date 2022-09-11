import Typography from "@mui/material/Typography";
import type { NextPage } from "next";
import Head from "next/head";
import { ShopLayout } from "./../components/layout";
import { initialData } from "../database/products";
import { ProductList } from "../components/products";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Teslo shop</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <ShopLayout
        title='Teslo-shop - Home'
        pageDescription='Encuentra los mejores productos de Teslo aqui!'
      >
        <Typography variant='h1' component='h1'>
          Tienda
        </Typography>
        <Typography variant='h2' sx={{ mb: 1 }}>
          Todos los productos
        </Typography>
        <ProductList products={initialData.products as any}/>
      </ShopLayout>
    </div>
  );
};

export default Home;


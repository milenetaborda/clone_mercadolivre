import React from 'react';

import tshirtImage from "../../assets/tshirt.png";

import {
  Container, Row, Panel, Column,
  Gallery, Section, Description
} from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="# ">Compartilhar</a>
        <a href="# ">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-Shirt" src={tshirtImage} />
          </Gallery>

          <Info />
        </Column>

        <Column>
          {/* <ProductAction />
          <SellerInfo /> */}

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
}

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">Receba o produto que está esperando ou devolvemos o seu dinheiro.</p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">sem garantia</p>
      </span>
    </div>
      <a href="# ">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia pariatur laboriosam architecto consequatur maiores numquam, reprehenderit praesentium dolore impedit ab harum dolorum quas accusamus ratione voluptas minima soluta officiis recusandae.
      <br />
      <br />
      Itens inclusos: <br />
      -1x LED <br />
      -1x LED <br />
      -1x LED <br />
      <br />
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati impedit provident exercitationem cum minima eligendi iusto at inventore? Accusantium cum, facere ipsa perspiciatis harum ad commodi quae error magnam deleniti!
    </p>
  </Description>
);

export default Product;

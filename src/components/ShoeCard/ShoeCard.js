import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS } from '../../constants';
import { formatPrice, pluralize, isNewShoe } from '../../utils';
import Spacer from '../Spacer';

const ShoeCard = ({
  slug,
  name,
  imageSrc,
  price,
  salePrice,
  releaseDate,
  numOfColors,
}) => {
  // There are 3 variants possible, based on the props:
  //   - new-release
  //   - on-sale
  //   - default
  //
  // Any shoe released in the last month will be considered
  // `new-release`. Any shoe with a `salePrice` will be
  // on-sale. In theory, it is possible for a shoe to be
  // both on-sale and new-release, but in this case, `on-sale`
  // will triumph and be the variant used.
  // prettier-ignore
  const variant = typeof salePrice === 'number'
    ? 'on-sale'
    : isNewShoe(releaseDate)
      ? 'new-release'
      : 'default'

  const onSale = variant === 'on-sale'
  const PriceComponent = onSale? StrikePrice: Price

  return (
    <Link href={`/shoe/${slug}`}>
      <Wrapper>
        <ImageWrapper>
          <Image alt="" src={imageSrc} />
          {variant === 'on-sale' && <PrimaryTag>Sale!</PrimaryTag>}
          {variant === 'new-release' && <SecondaryTag>Just released!</SecondaryTag>}
        </ImageWrapper>
        <Spacer size={12} />
        <Row>
          <Name>{name}</Name>
          <PriceComponent>{formatPrice(price)}</PriceComponent>
        </Row>
        <Row>
          <ColorInfo>{pluralize('Color', numOfColors)}</ColorInfo>
          {salePrice && <SalePrice>{formatPrice(salePrice)}</SalePrice>}
        </Row>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: inherit;
`;

const Wrapper = styled.article`
  flex: 1;
  width: 340px;
`;

const Tag = styled.div`
  position: absolute;
  padding: 7px 10px;
  top: 12px;
  right: -4px;
  border-radius: 2px;
  font-weight: ${WEIGHTS.bold};
  color: ${COLORS.white};
`

const PrimaryTag = styled(Tag)`
  background-color: ${COLORS.primary};
`

const SecondaryTag = styled(Tag)`
  background-color: ${COLORS.secondary};
`


const ImageWrapper = styled.div`
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 16px 16px 4px 4px;
`;

const Row = styled.div`
  font-size: 1rem;
  display: flex;
`;

const Name = styled.h3`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
`;

const Price = styled.span`
  margin-left: auto;
`;

const StrikePrice = styled(Price)`
  text-decoration-line: line-through;
  color: ${COLORS.gray[700]};
`

const ColorInfo = styled.p`
  color: ${COLORS.gray[700]};
`;

const SalePrice = styled(Price)`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;

export default ShoeCard;

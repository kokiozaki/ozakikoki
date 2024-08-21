/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { vwPc, bpSp } from '../scripts/styleVariables';
import React from 'react';
import type { NewtColumnArticle } from '../lib/newt';
import { formatToJapaneseDate } from '../scripts/utility';

interface Props {
  data: NewtColumnArticle;
}

const columnCardStyle = css`
  border: 2px solid #000;
  background-color: #fff;
  transition: .25s;
  height: 100%;

  @media screen and (max-width: ${bpSp}) {
    border: 1px solid #000;
  }

    &:hover {
    .thumb img {
      transform: scale(1.05); 
    }
  }

  .thumb {
    overflow: hidden;
    width: 100%;
    height: ${vwPc(250)};

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }


  > a {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .top {
    position: relative;
  }

  .thumb-cate {
    position: absolute;
    content: "";
    top: 0;
    right: 0;
    line-height: 1.8;
    font-size: ${vwPc(16)};
    background: linear-gradient(145deg, #00B3FF 0%, #1FD1D1 100%);
    color: #fff;
    padding: 0 ${vwPc(20)};

    @media screen and (max-width:${bpSp}) {
        line-height: 1.4;
      font-size: 1.2rem;
      padding: 0 1rem;
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${vwPc(20)} ${vwPc(30)};
    height: 100%;

    @media screen and (max-width:${bpSp}) {
      padding: 1rem;
    }
  }

  .ttl {
    font-size: ${vwPc(20)};

    @media screen and (max-width:${bpSp}) {
      font-size: 1.4rem;
      padding-bottom: 1rem;
    }
  }

  .category li {
    background: #000;
    color: #fff;
    border-radius: 50px;
    font-size: ${vwPc(18)};
    display: inline-block;
    padding: 0 ${vwPc(20)};
  }

  .date {
    font-size: ${vwPc(16)};
    text-align: right;
    color: #ff9326;
    font-weight: bold;

  }

  .arrow {
    text-align: right;

    @media screen and (max-width:${bpSp}) {
      img {
        width: 3rem;
      }
    }
  }
`;

const ColumnCard: React.FC<Props> = ({ data }) => {

  const defaultThumbnailSrc = '/assets/images/common/default-thumbnail-column.png';
  const createDate = formatToJapaneseDate(data._sys.createdAt);
  const updateDate = formatToJapaneseDate(data._sys.updatedAt);
  const isUpdate =  data._sys.createdAt !== data._sys.updatedAt;
  
  return (
    <article className="column-card" css={columnCardStyle}>
      <a href={`/blog/${data.slug}`}>
        <div className="top">
          <figure className="thumb">
          <img
            src={data.coverImage?.src? `${data.coverImage.src}?width=782&height=450&fit=crop`: defaultThumbnailSrc }
            alt={data.coverImage?.title? data.coverImage.title: ''} 
          />
          </figure>
          {/* <p className="thumb-cate">{data.category[0].name}</p> */}
        </div>
        <div className="body">
          <h3 className="ttl">{data.title}</h3>
          {data.category?.length > 0 && (
							<ul className="category">
								{data.category.map((cat, i) => (
									<li className="item">{cat.name}</li>
								))}
							</ul>
						) }
          <p className="date">{createDate}</p>
          {/* <div className="arrow">
            <img src="/assets/images/top/column-btn.svg" alt="" />
          </div> */}
        </div>
      </a>
    </article>
    )
}

export default ColumnCard;
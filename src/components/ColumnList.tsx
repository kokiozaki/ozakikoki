/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { bpSp, vwPc } from '../scripts/styleVariables';
import { useEffect, useState } from 'react';
import type { NewtColumnArticle } from '../lib/newt';
import BtnA from './BtnA';
import ColumnCard from './ColumnCard';

const styles = css`
	.column-card-list {
		display: flex;
		flex-wrap: wrap;
    margin-bottom: ${vwPc(50)};

		> li {
			margin-right: ${vwPc(35)};
			margin-bottom: ${vwPc(35)};
			width: calc(33.33% - 1.822917vw);

      @media screen and (max-width:${bpSp}) {
        margin-right: 4%;
        margin-bottom: 2rem;
        width: 48%;
  
        &:nth-child(2n) {
          margin-right: 0;
        }
      }
		}
	}

  .pagination {
    display: flex;
    justify-content: center;
    margin-top: ${vwPc(30)};
    gap: ${vwPc(10)};

    button {
      margin: 0 ${vwPc(5)};
      padding: ${vwPc(5)} ${vwPc(10)};
      background-color: #f0f0f0;
      border: none;
      cursor: pointer;

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
      .btn{
      position: relative;
      color: #FFF;
      font-size: 14px;
      font-weight: bold;
      text-align: center;
      letter-spacing: 2px;
      width: 40px;
      height: 40px;
      background: #000;
      display: block;
      text-decoration: none;
      border-radius: 5px;
    }
    .opt {
      border-bottom: 1px solid #000;
      background-color: transparent;
      font-weight: bold;
    }
  }
`;

interface Props {
  data: NewtColumnArticle[];
}

const itemsPerPage = 6;
const ColumnList: React.FC<Props> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };


  return (
    <div css={styles}>
      <ul className="column-card-list">
        {currentItems.map((item, i) => (
          <li key={i}>
            <ColumnCard data={item} />
          </li>
        ))}
      </ul>
      {totalPages > 1 && (
        <div className="pagination">
          <button 
          className='opt'
            onClick={() => handlePageChange(currentPage - 1)} 
            disabled={currentPage === 1}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
            className='btn animation'
              key={page}
              onClick={() => handlePageChange(page)}
              disabled={currentPage === page}
            >
              {page}
            </button>
          ))}
          <button 
            className='opt'
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ColumnList;
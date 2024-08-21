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
`;

interface Props {
  data: NewtColumnArticle[];
}

const itemsPerPage = 6;
const ColumnList: React.FC<Props> = ({ data }) => {

  const [max, setMax] = useState(itemsPerPage);
  const [isMore, setIsMore] = useState(false)

  useEffect(() => {
    setIsMore(data.length > max);
  }, [data, max])


  return (
    <div css={styles}>
      <ul className="column-card-list">
        {data.map((item, i) => (
          (i >= max ) ? null : (
            <li key={i}>
              <ColumnCard data={item} />
            </li>
          )
        ))}
      </ul>
      <div className="u-align-c">
        {( isMore ) ? (
          <div onClick={()=>{
              setMax(max + itemsPerPage);
            }}>
              <BtnA href='/blog/' text="一覧を見る" />
            </div>
        ): null}
      </div>
    </div>
  );
};

export default ColumnList;